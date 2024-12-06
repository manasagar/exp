import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet, ScrollView } from "react-native";
import { useForm, Controller } from "react-hook-form";
import RadioButton from "../../../../../lb_presentation/src/lib/ui/components/Radiobutton";
import CheckBox from "../../../../../lb_presentation/src/lib/ui/components/checkbox";

interface QuizFormProps {
  options: { value: string; label: string; name: string; response: string }[];
  correctOptions: string[];
  onNextButtonClick: () => void;
}

const QuizForm: React.FC<QuizFormProps> = ({
  options,
  correctOptions,
  onNextButtonClick,
}) => {
  const { control, handleSubmit } = useForm();
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [response, setResponse] = useState<string>("");
  const [showPopup, setShowPopup] = useState(false);
  const [popupStyles, setPopupStyles] = useState({
    backgroundColor: "#202f36",
    responseColor: "#F7CA45",
    continueButtonColor: "#F7CA45",
    iconColor: "#F7CA45",
    borderColor: "black",
  });
  const [correctSelectedOptions, setCorrectSelectedOptions] = useState<string[]>([]);

  const isMultipleChoice = correctOptions.length > 1;

  const onSubmit = () => {
    setShowPopup(true);

    if (selectedOptions.length > 0) {
      const allCorrect = selectedOptions.every(option => correctOptions.includes(option));
      const someCorrect = selectedOptions.some(option => correctOptions.includes(option));

      if (allCorrect && selectedOptions.length === correctOptions.length) {
        setCorrectSelectedOptions(selectedOptions);
        setResponse("Correct!");
        setPopupStyles({
          backgroundColor: "#202f36",
          responseColor: "#00FF00",
          continueButtonColor: "#00FF00",
          iconColor: "#F7CA45",
          borderColor: "#E8BC3B",
        });
      } else if (someCorrect) {
        setResponse("Partially correct. Try again!");
        setPopupStyles({
          backgroundColor: "#202f36",
          responseColor: "#F7CA45",
          continueButtonColor: "#F7CA45",
          iconColor: "#F7CA45",
          borderColor: "#E8BC3B",
        });
      } else {
        setResponse("Incorrect. Try again!");
        setPopupStyles({
          backgroundColor: "#202f36",
          responseColor: "#E05150",
          continueButtonColor: "#E05150",
          iconColor: "#E05150",
          borderColor: "#B73A39",
        });
      }
    }
  };

  const handleOptionClick = (value: string) => {
    if (isMultipleChoice) {
      setSelectedOptions(prevOptions =>
        prevOptions.includes(value)
          ? prevOptions.filter(option => option !== value)
          : [...prevOptions, value]
      );
    } else {
      setSelectedOptions([value]);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.optionsContainer}>
          {options.map((option, idx) => (
            <View
              key={idx}
              style={[
                styles.option,
                {
                  backgroundColor: "#fff",
                  borderColor: selectedOptions.includes(option.value)
                    ? "#5f8427"
                    : "#36454e",
                },
              ]}
            >
              <Controller
                control={control}
                name={`option-${option.value}`}
                defaultValue={false}
                render={({ field: { onChange, value } }) => (
                  isMultipleChoice ? (
                    <CheckBox
                      control={control}
                      name={`option-${option.value}`}
                      label={option.label}
                      defaultValue={value}
                      onValueChange={(newValue) => {
                        onChange(newValue);
                        handleOptionClick(option.value);
                      }}
                      textStyle={styles.optionText}  // Passing the textStyle prop
                    />
                  ) : (
                    <RadioButton
                      label={option.label}
                      selected={selectedOptions.includes(option.value)}
                      onPress={() => {
                        onChange(true);
                        handleOptionClick(option.value);
                      }}
                      textStyle={styles.optionText}  // Passing the textStyle prop
                    />
                  )
                )}
              />
            </View>
          ))}
        </View>
        {showPopup && (
          <View style={styles.popupContainer}>
            <View style={styles.responseContainer}>
              <Text
                style={[
                  styles.responseText,
                  { color: popupStyles.responseColor },
                ]}
              >
                {response}
              </Text>
            </View>
            <Pressable
              style={[
                styles.continueButton,
                {
                  backgroundColor: popupStyles.continueButtonColor,
                  borderColor: popupStyles.borderColor,
                },
              ]}
              onPress={() => {
                setShowPopup(false);
                onNextButtonClick();
              }}
            >
              <Text style={styles.buttonText}>Continue</Text>
            </Pressable>
          </View>
        )}
      </ScrollView>
      <View style={styles.footer}>
        <Pressable style={styles.submitButton} onPress={handleSubmit(onSubmit)}>
          <Text style={styles.buttonText}>Submit</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  optionsContainer: {
    width: "100%",
    justifyContent: "center",
  },
  option: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    marginVertical: 7,  // marginTop as requested
    borderColor: "#ccc",
    borderWidth: 1,
  },
  footer: {
    marginTop: 10,
  },
  popupContainer: {
    marginTop: 10,
    width: "100%",
    backgroundColor: "#202f36",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  responseContainer: {
    flexDirection: "row",
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  responseText: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
  continueButton: {
    backgroundColor: "#F7CA45",
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
    alignItems: "center",
    borderWidth: 1,
    width: "80%",
  },
  submitButton: {
    backgroundColor: "#6740F6",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    borderWidth: 1,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
});

export default QuizForm;
