import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { CurriculumContainer } from "@/libs/lb_features/src/lib/courseDetails/curriculumContainer";

const CurriculumCourse = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <CurriculumContainer />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
});

export default CurriculumCourse;
