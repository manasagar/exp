import React, { useState } from 'react';
import { Dimensions, Image, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import CodeEditor from '../../../../../lb_presentation/codeEditor';
import { CardWrapper } from '../../../../../lb_presentation/src/index';
import { HtmlRenderer, RenderImg } from '../../../../../lb_utils/src/index';
import { setIsCardNextBtnClicked } from './carouselSlice';
import QuizForm from './quizForm';
import BubbleArrowDown from './bubbleArrowDown';

export default function ElementRenderer({ currentSegmentIndex, card, sizy }) {
  const dispatch = useDispatch();
  const totalSegments = sizy;
  const percentage = ((currentSegmentIndex + 1) / totalSegments) * 100;

  const renderersProps = {
    img: {
      enableExperimentalPercentWidth: true,
    },
  };
  const isMobile = Dimensions.get('window').width < 768;

  const getQuizContent = (element) => {
    return card.render.find((item) => item.element === element)?.content;
  };

  const questionContent = getQuizContent('qz_qn'); 
  const optionsContent = getQuizContent('qz_options');

  const [visible, setVisible] = useState(false);
  /*  useEffect(() => {
    setVisible(false);
    const setTimer = setTimeout(() => {
      setVisible(true);
    }, 5000);

    return () => clearTimeout(setTimer); // Cleanup the timer
  }, [onNextButtonClick]);  */ // Re-run effect when `onNextButtonClick` changes

  const nextBtnHandler = () => {
    dispatch(
      setIsCardNextBtnClicked({
        isCardNextBtnClicked: true,
      })
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <CardWrapper
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {card.render.map(({ element, content, imgPath }, elemIndex) => {
          return (
            <View key={elemIndex} style={{ width: '100%', maxWidth: '40rem' }}>
              {(element === 'title_description' ||
                element === 'title_an' ||
                element === 'title_codeSnippet' ||
                element == 'question_des') && (
                <View
                  style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: isMobile ? '100%' : 'auto',
                    marginTop: '30px',
                  }}
                >
                  <View
                    style={{
                      width: '90%',
                      backgroundColor: '#092635',
                      borderRadius: 10,
                      padding: 0,
                      alignItems: 'center',
                    }}
                  >
                    <View
                      style={{
                        maxHeight: isMobile ? 120 : 70,
                        marginRight: isMobile ? 0 : 30,
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginBottom: 10,
                        padding: 10,
                        borderWidth: 1,
                        borderColor: '#FFFFFF',
                        borderRadius: 10,
                        backgroundColor: '#092635', // Background color for the header
                      }}
                    >
                      <Image
                        source={require('../../../../../../assets/images/muscots/66.png')} // Replace with your image URL
                        style={{
                          marginRight: 10,
                          ...(isMobile
                            ? { width: 100, height: 120 }
                            : { width: 80, height: 80 }),
                        }}
                      />
                      <Text
                        style={{
                          fontSize: isMobile ? 20 : 18,
                          fontWeight: 'bold',
                          color: 'white',
                        }}
                      >
                        <HtmlRenderer htmlContent={content} />
                      </Text>
                    </View>
                  </View>
                </View>
              )}
              {element === 'answer' && (
                <View
                  style={{
                    width: '90%',
                    backgroundColor: '#092635',
                    borderRadius: 10,
                    padding: 20,
                    alignItems: 'center',
                  }}
                >
                  <Text
                    style={{
                      fontSize: isMobile ? 18 : 16,
                      color: 'white',
                      textAlign: 'center',
                      marginBottom: 18,
                      marginLeft: isMobile ? 30 : 0,
                    }}
                  >
                    <HtmlRenderer htmlContent={content} />
                  </Text>
                  <Image
                    source={require('../../../../../../assets/images/dummy.png')} // Replace with your image URL
                    style={{
                      width: '100%',
                      height: 100,
                      resizeMode: 'contain',
                    }}
                  />
                </View>
              )}
              {element === 'title_ana' && (
                <View
                  style={{
                    flex: 1,
                    backgroundColor: '#092635',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 20,
                    paddingBottom: 0,
                  }}
                >
                  <View
                    style={{
                      maxHeight: isMobile ? 120 : 90,
                      flexDirection: 'row',
                      backgroundColor: '#092635',
                      borderColor: 'white',
                      borderWidth: 2,
                      borderRadius: 10,
                      padding: 20,
                      alignItems: 'center',
                      marginBottom: 20,
                      width: '95%',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Image
                      source={require('../../../../../../assets/images/muscots/33.png')} // Update with your image path
                      style={{
                        marginRight: 10,
                        ...(isMobile
                          ? { width: 60, height: 140 }
                          : { width: 80, height: 80 }),
                      }}
                    />
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 20,
                        fontWeight: 'bold',
                        textAlign: 'center',
                        flex: 1,
                      }}
                    >
                      <HtmlRenderer htmlContent={content} />
                    </Text>
                  </View>
                </View>
              )}

              {element === 'analogy' && (
                <View
                  style={{
                    flex: 1,
                    backgroundColor: '#092635',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 20,
                    paddingTop: 10,
                  }}
                >
                  <Text
                    style={{
                      color: 'white',
                      fontSize: isMobile ? 21 : 16,
                      textAlign: 'left',
                      marginBottom: isMobile ? 70 : 0, // Adjust margin for mobile vs non-mobile
                    }}
                  >
                    <HtmlRenderer htmlContent={content} />
                  </Text>
                </View>
              )}

              {(element === 'listItems_des' ||
                element === 'list_description') && (
                <View style={{ marginLeft: '1.25rem', marginRight: '1.25rem' }}>
                  {content.map((text, idx) => (
                    <Text
                      key={idx}
                      style={{
                        marginBottom: '0.25rem',
                        color: '#fff',
                        fontSize: 18,
                        textAlign: 'justify',
                        padding: '10px',
                      }}
                    >
                      <HtmlRenderer htmlContent={text} />
                    </Text>
                  ))}
                </View>
              )}
              {element === 'jo_qn' && (
                <View>
                  <View
                    style={{
                      background: 'linear-gradient(90deg, #FF7E00, #FFAE00)',
                      padding: 10,
                      borderRadius: 10,
                      alignItems: 'center',
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignSelf: 'center',
                      margin: '18px',
                      marginTop: 60,
                      width: '90%',
                    }}
                  >
                    <Image
                      source={require('../../../../../../assets/images/muscots/22.png')} // Adjust the path to your image
                      style={{
                        marginRight: 10,
                        ...(isMobile
                          ? { width: 100, height: 100 }
                          : { width: 60, height: 60 }),
                        resizeMode: 'contain',
                      }}
                    />
                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: 'bold',
                        color: 'white',
                      }}
                    >
                      <HtmlRenderer htmlContent={content} />
                    </Text>
                  </View>
                </View>
              )}

              {element === 'jo_ans' && (
                <View style={{ alignItems: 'center', marginBottom: 10 }}>
                  {visible ? (
                    <View style={{ alignItems: 'center', marginBottom: 10 }}>
                      <View
                        style={{
                          backgroundColor: 'black',
                          padding: isMobile ? 20 : 20,
                          borderRadius: '49%', // This creates the oval shape
                          marginBottom: 10,
                          position: 'relative',
                          width: isMobile ? 250 : 200, // Initial width, adjust as needed
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          marginLeft: '100px',
                          marginTop: '10px',
                          border: '2px solid gold',
                          marginRight: '8px',
                        }}
                      >
                        <Text
                          style={{
                            fontSize: content.length > 30 ? 13 : 16, // Adjust font size dynamically
                            fontWeight: 'bold',
                            color: 'yellow',
                          }}
                        >
                          <HtmlRenderer htmlContent={content} />
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: 'column',
                          alignItems: 'center',
                          marginBottom: isMobile ? -100 : -40, // Adjust to position the circles
                        }}
                      >
                        <View
                          style={{
                            width: isMobile ? 50 : 30,
                            height: isMobile ? 50 : 30,
                            backgroundColor: 'yellow',
                            borderRadius: 25, // Half of width/height to make it a circle
                            marginBottom: 5, // Adjust space between circles
                          }}
                        />
                        <View
                          style={{
                            width: isMobile ? 30 : 20,
                            height: isMobile ? 30 : 20,
                            backgroundColor: 'yellow',
                            borderRadius: 15, // Half of width/height to make it a circle
                            marginBottom: 5, // Adjust space between circles
                            marginRight: 30,
                          }}
                        />
                        <View
                          style={{
                            width: isMobile ? 10 : 10,
                            height: isMobile ? 10 : 10,
                            backgroundColor: 'yellow',
                            borderRadius: 10, // Half of width/height to make it a circle
                            marginRight: 50,
                          }}
                        />
                      </View>
                      <Image
                        source={require('../../../../../../assets/images/muscots/3.png')} // Adjust the path to your image
                        style={{
                          ...(isMobile
                            ? {
                                width: 180,
                                height: 240,
                                marginRight: '200px',
                                bottom: -4,
                              }
                            : {
                                width: 140,
                                height: 140,
                                resizeMode: 'contain',
                                marginRight: '110px',
                                marginBottom: '20px',
                              }),
                        }}
                      />
                    </View>
                  ) : (
                    <Text
                      style={{
                        fontSize: 50,
                        fontWeight: 'bold',
                        color: 'yellow',
                      }}
                    >
                      ?
                    </Text>
                  )}
                </View>
              )}

              {element === 'riddle_qn' && (
                <View
                  style={{
                    marginTop: '1.25rem',
                    padding: '0',
                    marginBottom: '1.25rem',
                    color: 'white',
                    flexDirection: 'row',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Image
                    source={require('../../../assets/ICON.png')}
                    style={{
                      height: 120,
                      width: 80,
                      marginLeft: 20,
                      marginRight: 0,
                    }}
                  />

                  <View
                    style={{
                      position: 'relative',
                      margin: 0,
                      backgroundColor: 'transparent',
                      borderWidth: 2,
                      borderColor: '#38464f',
                      borderRadius: 30,
                      padding: 0,
                      paddingHorizontal: 30,
                      width: 250,
                    }}
                  >
                    <Text
                      style={{
                        textAlign: 'center',
                        fontSize: 18,
                        color: 'white',
                      }}
                    >
                      <HtmlRenderer htmlContent={content} />
                    </Text>
                    <View
                      style={{
                        position: 'absolute',
                        left: 15,
                        bottom: -30,
                        width: 0,
                        height: 0,
                        borderTopWidth: 15,
                        borderTopColor: '#38464f',
                        borderRightWidth: 15,
                        borderRightColor: 'transparent',
                        borderBottomWidth: 15,
                        borderBottomColor: 'transparent',
                        borderLeftWidth: 15,
                        borderLeftColor: 'transparent',
                      }}
                    />
                    <View
                      style={{
                        position: 'absolute',
                        left: 15,
                        bottom: -28,
                        width: 0,
                        height: 0,
                        borderTopWidth: 15,
                        borderTopColor: '#092635',
                        borderRightWidth: 15,
                        borderRightColor: 'transparent',
                        borderBottomWidth: 15,
                        borderBottomColor: 'transparent',
                        borderLeftWidth: 15,
                        borderLeftColor: 'transparent',
                      }}
                    />
                  </View>
                </View>
              )}

              {element === 'riddle_ans' && (
                <View style={{ alignItems: 'center', marginBottom: 10 }}>
                  {visible ? (
                    <Text
                      style={{
                        marginTop: '0',
                        padding: '0.25rem',
                        marginBottom: '0',
                        color: 'black',
                        fontWeight: 'normal',
                        textAlign: 'center',
                        height: '2.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'rgba(209, 213, 219, 1)',
                        fontSize: 12,
                        marginLeft: '1.25rem',
                        marginRight: '1.25rem',
                        marginTop: '40px',
                      }}
                    >
                      <HtmlRenderer htmlContent={content} />
                    </Text>
                  ) : (
                    <Text
                      style={{
                        fontSize: 50,
                        fontWeight: 'bold',
                        color: 'yellow',
                      }}
                    >
                      ?
                    </Text>
                  )}
                </View>
              )}

              {element === 'facts_title' && (
                <View
                  style={{
                    marginTop: '1.95rem',
                    padding: '0',
                    marginBottom: '1.25rem',
                    color: 'white',
                    flexDirection: 'row',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: isMobile ? 0 : 50,
                  }}
                >
                  <Image
                    source={require('../../../assets/ICON.png')}
                    style={{
                      height: 120,
                      width: 80,
                      marginLeft: 20,
                      marginRight: 0,
                    }}
                  />

                  <View
                    style={{
                      position: 'relative',
                      margin: 0,
                      backgroundColor: 'transparent',
                      borderWidth: 2,
                      borderColor: '#38464f',
                      borderRadius: 30,
                      padding: 0,
                      height: 50,
                      width: 250,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Text
                      style={{
                        textAlign: 'center',
                        fontSize: 20,
                        color: 'white',
                      }}
                    >
                      <HtmlRenderer htmlContent={content} />
                    </Text>
                    <View
                      style={{
                        position: 'absolute',
                        left: 15,
                        bottom: -30,
                        width: 0,
                        height: 0,
                        borderTopWidth: 15,
                        borderTopColor: '#38464f',
                        borderRightWidth: 15,
                        borderRightColor: 'transparent',
                        borderBottomWidth: 15,
                        borderBottomColor: 'transparent',
                        borderLeftWidth: 15,
                        borderLeftColor: 'transparent',
                      }}
                    />
                    <View
                      style={{
                        position: 'absolute',
                        left: 15,
                        bottom: -28,
                        width: 0,
                        height: 0,
                        borderTopWidth: 15,
                        borderTopColor: '#092635',
                        borderRightWidth: 15,
                        borderRightColor: 'transparent',
                        borderBottomWidth: 15,
                        borderBottomColor: 'transparent',
                        borderLeftWidth: 15,
                        borderLeftColor: 'transparent',
                      }}
                    />
                  </View>
                </View>
              )}

              {element === 'facts_Items' && (
                <View
                  style={{
                    marginLeft: '1.25rem',
                    marginRight: '1.25rem',
                    color: 'white',
                    marginBottom: '100px',
                  }}
                >
                  {content.map((text, idx) => (
                    <View
                      key={idx}
                      style={{
                        flexDirection: 'row',
                        alignItems: 'flex-start',
                        marginBottom: '0.75rem',
                      }}
                    >
                      <Text style={{ color: 'white', marginRight: '0.5rem' }}>
                        •
                      </Text>
                      <Text
                        style={{
                          color: 'white',
                          flexShrink: 1,
                          fontSize: 16,
                        }}
                      >
                        {text}
                      </Text>
                    </View>
                  ))}
                </View>
              )}

              {element === 'sessionTitle' && (
                <View
                  style={{
                    flex: 1,
                    paddingTop:30,
                    backgroundColor: '#092635',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Text
                    style={{
                      color: 'yellow',
                      fontSize: 24,
                      fontWeight: 'bold',
                    }}
                  >
                    {/* Assuming content has the title */}
                    {content.categoryName}
                  </Text>
                  <Image
                    source={require('../../../../../../assets/images/muscots/3.png')} // Adjust the path to your image
                    style={{
                      marginRight: 10,
                      ...(isMobile
                        ? { width: 350, height: 350 }
                        : { width: 180, height: 180 }),
                    }}
                  />
                  <View
                    style={{
                      backgroundColor: '#092635',
                      borderColor: 'white',
                      borderWidth: 2,
                      padding: 20,
                      borderRadius: 10,
                    }}
                  >
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 18,
                        textAlign: 'center',
                      }}
                    >
                      {/* Assuming content has the topicName */}
                      {content.topicName}
                    </Text>
                  </View>
                </View>
              )}

{(
                element === 'qz_scenario') && (
                <>
                  <View
                    style={{
                     
                    
                      paddingTop:30,
                      color: 'white',                     
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                   

                    <View
                      style={{
                        position: 'relative',
                        margin: 0,
                        backgroundColor: 'transparent',
                        borderWidth: 2,
                        borderColor: '#38464f',
                        borderRadius: 30,
                        padding: 10,
                        paddingHorizontal: 30,
                        width: 300,
                      }}
                    >
                      <Text
                        style={{
                          textAlign: 'center',
                          fontSize: 18,
                          color: 'white',
                        }}
                      >
                        <HtmlRenderer htmlContent={content} />
                      </Text>
                      
                      <BubbleArrowDown/>
                    </View>
                    <Image
                      source={require('../../../assets/ICON.png')}
                      style={{
                        height: 120,
                        width: 80,
                      
                      }}
                    />
                  </View>
                </>
              )}

              {(element === 'qz_qn' ||               
                element === 'objective_assignment') && (
                <>
                  <View
                    style={{
                      marginTop: '0.25rem',
                      padding: '0',
                      marginBottom: '1.25rem',
                      color: 'white',
                      flexDirection: 'row',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Image
                      source={require('../../../assets/ICON.png')}
                      style={{
                        height: 120,
                        width: 80,
                        marginLeft: 20,
                        marginRight: 0,
                      }}
                    />

                    <View
                      style={{
                        position: 'relative',
                        margin: 0,
                        backgroundColor: 'transparent',
                        borderWidth: 2,
                        borderColor: '#38464f',
                        borderRadius: 30,
                        padding: 10,
                        paddingHorizontal: 30,
                        width: 250,
                      }}
                    >
                      <Text
                        style={{
                          textAlign: 'center',
                          fontSize: 18,
                          color: 'white',
                        }}
                      >
                        <HtmlRenderer htmlContent={content} />
                      </Text>
                     <BubbleArrowDown/>
                    </View>
                  </View>
                </>
              )}
              {element === 'qz_options' &&
                questionContent &&
                optionsContent && (
                  <View
                    style={{
                      marginTop: '1.25rem',
                      marginLeft: '1.25rem',
                      marginRight: '1.25rem',
                    }}
                  >
                    <QuizForm
                      options={optionsContent.options}
                      correctOptions={optionsContent.correctOptions}
                      onNextButtonClick={nextBtnHandler}
                    />
                  </View>
                )}

              {element === 'features_assignment' && (
                <View style={{ marginLeft: '1.25rem', marginRight: '1.25rem' }}>
                  {content.map(({ name, details }, idx) => (
                    <View key={idx} style={{ marginBottom: '0.25rem' }}>
                      <Text>
                        {' '}
                        <HtmlRenderer htmlContent={`<h3>${Nothing}</h3>`} />
                      </Text>
                      {details.map((detail, i) => (
                        <Text
                          key={i}
                          style={{
                            color: '#fff',
                            fontSize: 18,
                            textAlign: 'justify',
                            padding: '10px',
                          }}
                        >
                          • <HtmlRenderer htmlContent={detail} />
                        </Text>
                      ))}
                    </View>
                  ))}
                </View>
              )}

              {element === 'code' && (
                <View
                  style={{
                    marginTop: '1.25rem',
                    marginBottom: '0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    backgroundColor: '#202F36',
                    padding: '0.75rem',
                    marginLeft: '1.25rem',
                    marginRight: '1.25rem',
                    borderRadius: '0.375rem',
                  }}
                >
                  <CodeEditor code=<HtmlRenderer htmlContent={content} /> />
                </View>
              )}
              {element === 'codeSnippet' && (
                <View
                  style={{
                    marginTop: '0.5rem',
                    marginBottom: '1.25rem',
                    marginLeft: '1.25rem',
                    marginRight: '1.25rem',
                  }}
                >
                  <View
                    style={{
                      backgroundColor: '#202F36',
                      padding: '0.5rem',
                      marginTop: '0.75rem',
                      borderBottomLeftRadius: '0.375rem',
                      borderBottomRightRadius: '0.375rem',
                      borderBottomWidth: 2,
                      borderBottomColor: 'black',
                      marginBottom: '0',
                      width:
                        Dimensions.get('window').width < 768
                          ? '370px'
                          : '400px',
                      height:
                        Dimensions.get('window').width < 768
                          ? '330px'
                          : '300px',
                      alignSelf: 'center',
                    }}
                  >
                    <CodeEditor
                      content=<HtmlRenderer htmlContent={content} />
                      style={{
                        fontSize:
                          Dimensions.get('window').width < 768
                            ? '16px'
                            : '14px', // Smaller font size for laptops
                      }}
                    />
                  </View>
                </View>
              )}

              {element === 'imgPrompt' && (
                <RenderImg
                  imgDetails={{
                    imgPath: `${imgPath}`,
                    imgTwClasses: 'w-76 h-124',
                  }}
                />
              )}

              {element === 'info_nudge' && (
                <View
                  style={{
                    flex: 1,
                    backgroundColor: '#092635',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <HtmlRenderer
                    containerStyle={{
                      color: 'yellow',
                      fontSize: 24,
                      fontWeight: 'bold',
                    }}
                    htmlContent={content}
                  />
                </View>
              )}
            </View>
          );
        })}
      </CardWrapper>
    </View>
  );
}
