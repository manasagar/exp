import React from "react";
import { Pressable, Text, Image } from "react-native";
import tw from "twrnc";
import { useRouter } from "expo-router";

export const GwCourseCard = ({
  course,
  opacity,
}: {
  course: any;
  opacity: number;
}) => {
  const router = useRouter();

  return (
    <Pressable
      onPress={() =>
        router.push({
          pathname: `/${course?.itemId}`, // Updated pathname format
          params: { curriculumCourse: course?.itemId },
        })
      }
      style={[
        tw`w-[100%] h-18 flex flex-row items-center`,
        { borderRadius: 8, borderWidth: 1, borderColor: "#5B5F66", opacity },
      ]}
      accessibilityRole="button"
      accessibilityLabel={course?.itemDisplayName}
    >
      <Image
        style={{
          height: 40,
          width: 40,
          borderRadius: 5,
          marginLeft: 10,
        }}
        source={require("../../assets/stockIcon.jpeg")}
        accessible
        accessibilityLabel="Course icon"
      />
      <Text style={tw`text-white font-semibold text-lg ml-2`}>
        {course?.itemDisplayName}
      </Text>
    </Pressable>
  );
};
