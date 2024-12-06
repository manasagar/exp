import React from "react";
import { View, Text } from "react-native";
import tw from "twrnc";
import { GwCourseCard } from "./gw-course-card";

const getOpacity = (status: string | string[]) => {
  if (!status) return 1;
  // courseStatus only has "generate" and "generated" states
  // if (status.includes("onlyCurriculumExists")) return 0.7;
  if (status === "generate") return 0.3;
  return 1;
};

export const GwCategoryDisplayBox = ({
  selectedCategories,
}: {
  selectedCategories: {
    checked: boolean;
    key: string;
    categoryDisplayName: string;
    items: { status: string | string[]; itemId: string; [key: string]: any }[];
  }[];
}) => {
  return (
    <View style={tw`mt-12`}>
      {selectedCategories?.map((categoryData) => {
        if (!categoryData?.checked || categoryData.key === "all") return null;

        return (
          <View key={categoryData.categoryId}>
            <Text style={tw`font-bold text-2xl p-2 text-white`}>
              {categoryData?.categoryDisplayName}
            </Text>
            <View style={tw`flex-col flex-wrap gap-5 p-2 my-2`}>
              {categoryData?.items?.map((ele) => {
                const opacity = getOpacity(ele.courseStatus);
                return <GwCourseCard course={ele} key={ele.itemId} opacity={opacity} />;
              })}
            </View>
          </View>
        );
      })}
    </View>
  );
};
