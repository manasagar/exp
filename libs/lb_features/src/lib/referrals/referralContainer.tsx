import React, { useState, useEffect } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import * as Linking from "expo-linking";

const ReferralContainer = () => {
  const [link, setLink] = useState("");
  const [rewards, setRewards] = useState(0);
  const [referralCode, setReferralCode] = useState("");
  const [enteredCode, setEnteredCode] = useState("");

  useEffect(() => {
    const handleInitialUrl = async () => {
      try {
        const initialUrl = await Linking.getInitialURL();
        if (initialUrl) {
          handleDeepLink(initialUrl);
        }
      } catch (error) {
        console.error("Error getting initial URL:", error);
      }
    };

    const handleDeepLink = (url) => {
      const { path, queryParams } = Linking.parse(url);
      if (path === "referral") {
        const code = queryParams.code;
        setReferralCode(code);
        console.log("Referral code found in deep link:", code);
      }
    };

    const linkingListener = Linking.addEventListener("url", ({ url }) => {
      handleDeepLink(url);
    });

    handleInitialUrl();

    return () => {
      linkingListener.remove();
    };
  }, []);

  const generateReferralLink = () => {
    const code = "REF" + Date.now();
    const url = `https://your-app.com/referral?code=${code}`;
    setLink(url);
    setReferralCode(code);
    console.log("Generated Referral Link:", url);
  };

  const validateReferralCode = () => {
    if (enteredCode === referralCode) {
      setRewards((prevRewards) => prevRewards + 10);
      console.log("Referral code is valid. Rewards added!");
    } else {
      console.error("Invalid referral code.");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.header}>Referral Tracking</Text>

        <TouchableOpacity
          id="createReferralLinkButton"
          style={styles.button}
          onPress={generateReferralLink}
        >
          <Text style={styles.buttonText}>Create Referral Link</Text>
        </TouchableOpacity>

        {link !== "" && (
          <View style={styles.linkContainer}>
            <Text style={styles.link} onPress={() => Linking.openURL(link)}>
              {link}
            </Text>
            <Text style={styles.referralCode}>Referral Code: {referralCode}</Text>
          </View>
        )}

        <View style={styles.inputContainer}>
          <Text style={styles.subHeader}>Enter Referral Code</Text>
          <TextInput
            style={styles.input}
            value={enteredCode}
            onChangeText={setEnteredCode}
          />
          <TouchableOpacity style={styles.button} onPress={validateReferralCode}>
            <Text style={styles.buttonText}>Validate Code</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.rewardsContainer}>
          <Text style={styles.subHeader}>Your Rewards</Text>
          <Text style={styles.rewardsText}>{rewards}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    justifyContent: "center",
    paddingVertical: 20,
    paddingHorizontal: 20,

  },
  container: {
    alignItems: "center",
    width: "100%",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "white",
  },
  subHeader: {
    fontSize: 18,
    fontWeight: "600",
    color: "white",
    marginBottom: 10,
  },
  inputContainer: {
    width: "100%",
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    backgroundColor: "#f8f8f8",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#3b82f6",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
    width: "100%",
    marginBottom:15
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  linkContainer: {
    width: "100%", // Make the container full width
    alignItems: "center", // Center the link horizontally
  },
  link: {
    color: "green",
    textDecorationLine: "underline",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 10,
  },
  
  referralCode: {
    color: "white",
  },
  rewardsContainer: {
    alignItems: "center",
  },
  rewardsText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default ReferralContainer;
