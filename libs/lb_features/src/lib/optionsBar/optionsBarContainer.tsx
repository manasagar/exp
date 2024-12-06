import React, { useState } from "react";
import tw from "twrnc";
import { View, Modal, StyleSheet, Text, TouchableWithoutFeedback, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import FeedbackContainer from "../feedback/feedbackContainer";
import { commonConstants } from "../../../../lb_common/commonConstants";
import SocialSharingContainer from "../socialSharing/socialSharingContainer";
import { usePostSentimentMutation } from "../useSentiment";

const {
  appRoutes_common: { services, profile },
  apiUrls: { postSentiment },
} = commonConstants;

const optionsConfig = [
  {
    option: "home",
    img: <Icon name="home" style={tw`text-black`} size={24} />,
    redirectTo: services,
  },
  {
    option: "share",
    img: <Icon name="share-social" style={tw`text-black`} size={24} />,
    display: <SocialSharingContainer url="google.com" />,
  },
  {
    option: "dislike",
    img: <Icon name="thumbs-down" style={tw`text-black`} size={24} />,
  },
  {
    option: "feedback",
    img: <Icon name="chatbubble" style={tw`text-black`} size={24} />,
    display: <FeedbackContainer type="feedback" />,
  },
  {
    option: "profile",
    img: <Icon name="person" style={tw`text-black`} size={24} />,
    redirectTo: profile,
  },
];

const OptionsBarContainer = () => {
  const [visible, setVisible] = useState(false);
  const [selectOption, setSelectOption] = useState({
    option: "",
    img: <></>,
    display: <></>,
  });
  const [isOptionsVisible, setIsOptionsVisible] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [error, setError] = useState(null);
  const [postSentiment] = usePostSentimentMutation();

  const handleButtonClick = (option) => {
    if (option === "sort") {
      setIsOptionsVisible(!isOptionsVisible);
    } else {
      const selectedOption = optionsConfig.find(
        (item) => item.option === option
      );
      if (selectedOption) {
        setSelectOption(selectedOption);
      }
      setVisible(true);
      setIsOptionsVisible(false); // Hide options when opening modal
    }
  };

  const closeModal = () => {
    setSelectOption({
      option: "",
      img: <></>,
      display: <></>,
    });
    setVisible(false);
    setIsOptionsVisible(false); // Ensure the options are hidden when modal closes
  };

  const handleDislikeClick = async () => {
    setDisliked(!disliked);

    try {
      const response = await postSentiment({
        sentiment: 'dislike',
        route: '',
        otherDetails: {
          parent: 'angular',
          cardId: 'cc1-1.1_2',
        },
      }).unwrap();

      if (response.status === 200) {
        console.log("Dislike submitted successfully");
        setError(null); // Clear any previous errors
      }
    } catch (err) {
      console.log("Error submitting dislike", err);
      setError("Failed to submit dislike. Please try again.");
    }
  };

  return (
    <View
      style={tw`fixed bottom-0 left-0 w-full ${isOptionsVisible ? 'bg-gray-200' : 'bg-transparent'} flex justify-between items-center p-0`}
    >
      <View style={tw`flex items-center w-full justify-between`}>
        {!isOptionsVisible && (
          <TouchableOpacity
            onPress={() => handleButtonClick("sort")}
            style={tw`bg-white bg-gray-200 border-gray-600 border-2 p-1 h-9 w-9 flex my-1`}
          >
            <Icon name="options" style={tw`text-black`} size={24} />
          </TouchableOpacity>
        )}

        {isOptionsVisible && (
          <View style={tw`flex p-1 bg-gray-200 p-2 opacity-70 px-3 flex-row rounded w-full items-center justify-between`}>
            <TouchableOpacity
              onPress={() => handleButtonClick("sort")}
              style={tw`bg-gray-200 border-gray-600 border-2 p-1 h-9 w-9 flex my-1`}
            >
              <Icon name="options" style={tw`text-black`} size={24} />
            </TouchableOpacity>
            {optionsConfig.map((item) => (
              <View key={item.option} style={tw`flex items-center mb-0`}>
                <TouchableOpacity
                  style={tw`border-transparent bg-light-gray text-black px-4 rounded transition-transform duration-200 ease-in-out ${
                    item.option === "dislike" && disliked
                      ? "text-black bg-light-gray"
                      : "hover:text-white hover:bg-black"
                  }`}
                  onPress={() =>
                    item.option === "dislike"
                      ? handleDislikeClick()
                      : handleButtonClick(item.option)
                  }
                >
                  {React.cloneElement(item.img, {
                    style: {
                      ...item.img.props.style,
                      color:
                        item.option === "dislike" && disliked ? "red" : "black",
                      transition: "color 0.3s ease, transform 0.3s ease",
                    },
                  })}
                </TouchableOpacity>
              </View>
            ))}
          </View>
        )}
      </View>

      <Modal visible={visible} transparent animationType="fade">
        <TouchableWithoutFeedback onPress={closeModal}>
          <View style={styles.modalContainer}>
            <TouchableWithoutFeedback>
              <View>
                <Text>{selectOption.display}</Text>
                {error && <Text style={styles.errorText}>{error}</Text>}
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional: Add a semi-transparent background
  },

  errorText: {
    color: "red",
    marginTop: 10,
  },
});

export default OptionsBarContainer;
