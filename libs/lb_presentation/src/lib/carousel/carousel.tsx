import _ from 'lodash';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  Animated,
  Dimensions,
  FlatList,
  SafeAreaView,
  View,
} from 'react-native';
import { usePathname, useRouter } from 'expo-router';
import { useDispatch } from 'react-redux';
import { commonConstants } from '../../../../lb_common/commonConstants';
import { getSubtopicIdFromCardId } from '../../../../lb_features/src/lib/content/templates/subtopicFinder';
import { usePatchCourseProgressMutation } from '../../../../lb_features/src/lib/courseDetails/selectedCurriculumService';
import { usePatchUserBehaviourMutation } from '../../../../lb_features/src/lib/userBehaviourService';
import {
  AUTO_PLAY_DELAY,
  getUserId,
  isUserIdTemp,
  mlConstants,
} from '../../../../lb_utils/src/index';
import Pagination from './Pagination';
import SlideItem from './slideitem';
import useAppStateAndBrowserTab from './useAppStateAndBrowserTab';
import { useSelectorWrap } from '../../../../lb_data-api/src';
import {
  setBehaviorOnLastCard,
  setPostedCourseStatus,
  setIsCardNextBtnClicked,
  setCourseStatus,
} from '../../../../lb_features/src/lib/content/templates/carouselSlice';
import { setLoginRedirect } from '../../../../lb_data-api/src/lib/rtk/rtk-slice-loginRedirect';

const width = Dimensions.get('window').width;

function getCardIds(cardsTobeRendered) {
  return cardsTobeRendered.map((card) => card.cardId);
}

const Carousel = React.memo(
  ({ data: { cardsTobeRendered, unDisplayedCards_st } }) => {
    const router = useRouter();
    const {
      routePaths: { startNewSession },
    } = mlConstants;
    const { appRoutes_common } = commonConstants;
    const [patchCourseProgress, { isSuccess: isPatchCourseProgSuccess }] =
      usePatchCourseProgressMutation();
    const [patchUserBehaviour] = usePatchUserBehaviourMutation();

    const { data: nextBtnClickData } = useSelectorWrap('cardNextBtn_rn');
    const { data: postedCourseStatus } = useSelectorWrap(
      'courseStatusPosted_rn'
    ); //Get the content status posted to the server
    const { data: courseStatus } = useSelectorWrap('courseStatus_rn'); //Get the content status
    const [isPaginationVisible, setIsPaginationVisible] = useState(false);
    const dispatch = useDispatch();
    const scrollX = useRef(new Animated.Value(0)).current;
    const flatListRef = useRef(null);
    const autoplayTimer = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isInteracting, setIsInteracting] = useState(false);
    const currentPathName = usePathname();

    const [userId, setUserId] = useState('');
    const [viewedCards, setViewedCards] = useState(new Set());

    //const { contentStatusCopy } = useCarouselData(contentStatusData, cardsTobeRendered);

    let contentStatusCopy = _.cloneDeep(courseStatus);
    if (!cardsTobeRendered[0]) {
      console.info('No cards to be rendered');
    }
    console.info({ cardsTobeRendered });

    // Function to scroll to specified index (moved up)
    const scrollToIndex = useCallback(
      (index) => {
        if (
          flatListRef.current &&
          cardsTobeRendered &&
          cardsTobeRendered.length > 0
        ) {
          flatListRef.current.scrollToIndex({
            animated: true,
            index: index >= 0 ? index : 0,
            viewPosition: 0.5,
          });
        }
      },
      [cardsTobeRendered]
    );
    const fetchUserId = async () => {
      let id = await getUserId();
      setUserId(id);
    };

    const prevUnDisplayedCardsRef = useRef();

    const updateUndisplayedCards = useCallback(() => {
      if (!contentStatusCopy) return;
    
      const allCards = new Set([
        ...getCardIds(cardsTobeRendered),
        ...(Array.isArray(unDisplayedCards_st) ? getCardIds(unDisplayedCards_st) : []),
      ]);
    
      const updatedUnDisplayedCards = [...allCards].filter(cardId => 
        !viewedCards.has(cardId)
      );
    
      if (!_.isEqual(updatedUnDisplayedCards, prevUnDisplayedCardsRef.current)) {
        prevUnDisplayedCardsRef.current = updatedUnDisplayedCards;
        contentStatusCopy.unDisplayedCards = updatedUnDisplayedCards;      

        dispatch(setCourseStatus(contentStatusCopy));
      }
      console.info(
        'unDisplayedCards2',
        contentStatusCopy.unDisplayedCards,
        contentStatusCopy.unDisplayedCards.length
      );
    }, [cardsTobeRendered, unDisplayedCards_st, contentStatusCopy, dispatch, viewedCards]);
    
    
    useEffect(() => {
      fetchUserId();
      return () => {
        setCurrentIndex(0); 
      }
    }, []);

    useEffect(() => {
      if ((cardsTobeRendered.length > 0 || (Array.isArray(unDisplayedCards_st) && unDisplayedCards_st.length > 0))) {
        updateUndisplayedCards();
      }
    }, [cardsTobeRendered, unDisplayedCards_st, updateUndisplayedCards]);
    
    const apiCallInProgressRef = useRef(false);

    const postLearningStatus = useCallback(async () => {
      if (
        !contentStatusCopy ||
        _.isEqual(contentStatusCopy, postedCourseStatus) ||
        apiCallInProgressRef.current
      ) {
        return;
      }

      apiCallInProgressRef.current = true;

      try {
        const result = await patchCourseProgress(contentStatusCopy);
        if (result.data) {
          dispatch(setPostedCourseStatus(contentStatusCopy));
          console.log('Content status saved:', contentStatusCopy);
        }
      } catch (error) {
        console.error('Failed to save content status:', error);
      } finally {
        apiCallInProgressRef.current = false;
      }
    }, [contentStatusCopy, postedCourseStatus, patchCourseProgress, dispatch]);

    const saveContentStatus = useCallback(
      () => postLearningStatus(),
      [postLearningStatus]
    );

    // Effect for handling app state changes
    const handleAppStateChange = useCallback(
      (nextAppState) => {
        if (nextAppState === 'background' || nextAppState === 'inactive') {
          saveContentStatus();
        }
      },
      [saveContentStatus]
    );

    // Effect for handling visibility changes
    const handleVisibilityChange = useCallback(
      (visibility) => {
        if (visibility === 'hidden') {
          saveContentStatus();
        }
      },
      [saveContentStatus]
    );

    // Effect for handling before unload (browser tab close)
    const handleBeforeUnload = useCallback(() => {
      saveContentStatus();
    }, [saveContentStatus]);

    // Hook to subscribe to app state and visibility changes
    useAppStateAndBrowserTab(
      handleAppStateChange,
      handleVisibilityChange,
      handleBeforeUnload
    );

    function redirectHandlerOnLastSlide() {
      if (userId.startsWith("xz-")) {
        //Display the login screen For anonymous users
        dispatch(setLoginRedirect(startNewSession));
        router.push(appRoutes_common.loginRoute);
      } else {
        router.push(startNewSession);
      }
    }

    const onLastSlideReached = useCallback((delay = 0 ) => {
      //Make API  call to update learning status
      postLearningStatus();

      let data = { nextSession: { route: currentPathName } };

      dispatch(setBehaviorOnLastCard(data));

      console.info('Last slide reached');

      setTimeout(() => {
        redirectHandlerOnLastSlide();
      }, delay);     
     
     
    }, [
      postLearningStatus,
      currentPathName,
      dispatch,
      router,
      appRoutes_common,
      startNewSession,
    ]);

    const startAutoplay = useCallback(() => {
      return; //TODO:
      if (autoplayTimer.current) {
        clearInterval(autoplayTimer.current);
      }
      autoplayTimer.current = setInterval(() => {
        if (!isInteracting) {
          if (currentIndex === cardsTobeRendered.length - 1) {
            // Last slide reached
            // Stop the autoplay
            clearInterval(autoplayTimer.current);
          } else {
            // Not the last slide, continue to the next
            scrollToIndex(currentIndex + 1);
          }
        }
      }, AUTO_PLAY_DELAY);
    }, [isInteracting, currentIndex, cardsTobeRendered.length, scrollToIndex]);

    const stopAutoplay = useCallback(() => {
      if (autoplayTimer.current) {
        clearInterval(autoplayTimer.current);
        autoplayTimer.current = null;
      }
    }, []);

    // Effect to handle autoplay
    useEffect(() => {
      if (!isInteracting) {
        startAutoplay();
      } else {
        stopAutoplay();
      }

      return () => {
        stopAutoplay();
      };
    }, [isInteracting, startAutoplay, stopAutoplay]);

    const cardInView = useCallback(
      async (cardId) => {
        if (_.isEmpty(contentStatusCopy)) {
          return;
        }

        // Mark the card as viewed
        setViewedCards(prev => new Set([...prev, cardId]));

        if (cardId === 'mvpCard') {
          //If MVP card is displayed, update the userbehavior data
          /*TODO:   await patchUserBehaviour({
        isMvpNudgeDisplayed: true,
        URL_PARAMS: [userId],
      });*/
        }

        if (currentIndex === cardsTobeRendered.length - 1) {
          //If the current card is the last card
            onLastSlideReached(AUTO_PLAY_DELAY);          
        }

        const subtopicId = getSubtopicIdFromCardId(cardId);

        //Remove the current cardId
        if (contentStatusCopy.unDisplayedCards) {
          contentStatusCopy.unDisplayedCards = Array.from(new Set(contentStatusCopy.unDisplayedCards.filter(id => id !== cardId)));
      
        }

        // Check if all cards for this subtopic are finished
        const remainingCardsForSubtopic =
          contentStatusCopy.unDisplayedCards?.filter((cardId) =>
            cardId.includes(subtopicId)
          );

        if (remainingCardsForSubtopic?.length === 0) {
          // All cards finished for this subtopic

          //Reset all the displayed cards of a completed subtopic id
          contentStatusCopy.displayedCards = [];
          //Remove from unVisitedIds
          contentStatusCopy.unVisitedSt_ids =
            contentStatusCopy.unVisitedSt_ids?.filter(
              (id) => id !== subtopicId
            );
        }

          // Add the viewed card's ID to the displayedCards array
    // Replace the existing code block with this:
if (!Array.isArray(contentStatusCopy.displayedCards)) {
  contentStatusCopy.displayedCards = [];
}

if (!contentStatusCopy.displayedCards.includes(cardId)) {
  contentStatusCopy.displayedCards = [...contentStatusCopy.displayedCards, cardId];
}

          

        dispatch(setCourseStatus(contentStatusCopy));
      },
      [
        currentIndex,
        patchUserBehaviour,
        userId,
        setViewedCards,
      ]
    );

    // Effect to fetch and update content status on card change
    useEffect(() => {
      const currentCard = cardsTobeRendered[currentIndex];
      if (currentCard) {
        cardInView(currentCard.cardId);
      }
    }, [currentIndex, cardsTobeRendered, cardInView]);

    useEffect(() => {
      //When the next button is clicked
      const { isCardNextBtnClicked } = nextBtnClickData;
      if (isCardNextBtnClicked) {
        if (currentIndex === cardsTobeRendered.length - 1) {
          //If the current card is the last card
          onLastSlideReached();
        } else {
          scrollToIndex(currentIndex + 1);
          //Resetting
          dispatch(
            setIsCardNextBtnClicked({
              isCardNextBtnClicked: false,
            })
          );
        }
      }
    }, [
      nextBtnClickData,
      currentIndex,
      cardsTobeRendered.length,
      dispatch,
      scrollToIndex,
    ]);

    // Callback for handling scroll event
    const handleOnScroll = Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      {
        useNativeDriver: false,
      }
    );

    // Callback for handling viewable items change
    const handleOnViewableItemsChanged = useCallback((info) => {
      if (info.viewableItems && info.viewableItems.length > 0) {
        setCurrentIndex(info.viewableItems[0].index);
      }
    }, []);

    // Render item function for FlatList
    const renderItem = useCallback(
      ({ item, index }) => {
        return (
          <SlideItem
            slide={item}
            index={index} // Pass the index to SlideItem
            size={cardsTobeRendered.length} // Pass the actual size to SlideItem
            onTouchStart={() => setIsInteracting(true)}
            onTouchEnd={() => setIsInteracting(false)}
          />
        );
      },
      [cardsTobeRendered.length]
    );

    // Configuration for viewability check
    const viewabilityConfig = useRef({
      itemVisiblePercentThreshold: 50,
    }).current;

    return (
      <SafeAreaView>
        <View style={{ width }}>
          <FlatList
            ref={flatListRef}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            snapToAlignment="center"
            onScroll={handleOnScroll}
            data={cardsTobeRendered}
            renderItem={renderItem}
            onViewableItemsChanged={handleOnViewableItemsChanged}
            viewabilityConfig={viewabilityConfig}
            initialScrollIndex={currentIndex}
            scrollEventThrottle={16}
            keyExtractor={(_, index) => `item-${index}`}
            getItemLayout={(_, index) => ({
              length: width,
              offset: width * index,
              index,
            })}
            initialNumToRender={0}
          />
        {isPaginationVisible && (
          <Pagination
            data={cardsTobeRendered}
            scrollX={scrollX}
            currentIndex={currentIndex}
          />
        )}
        </View>
      </SafeAreaView>
    );
  }
);
export default  Carousel; 