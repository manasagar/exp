/* eslint-disable @nx/enforce-module-boundaries */
import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import tw from 'twrnc';

import { usePostGetSkillDataMutation } from '../createCourseContent/getrskillDataService';
import { GwCategoryDisplayBox } from './gw-category-display';
import { GwFiltersContainer } from './gwFiltersContainer';

export const GwContainer: any = () => {
  const [selectedSkillType, setSelectedSkillType] = useState<string | null>(
    null
  );

  const [postGetSkillData] = usePostGetSkillDataMutation();
  let skillsData: any;

  /*  const { data: cyberSkills } = useGetSkillDataQuery(
    {
      URL_PARAMS: ['cyberSkills'],
    },
    {
      skip: !selectedSkillType, // Skip the query if no skill type is selected
    }
  ); */

  const [selectedCategories, setSelectedCategories] = useState<any>([]);

  useEffect(() => {
    if (
      skillsData?.skills &&
      Array.isArray(skillsData.skills) &&
      skillsData.skills.length
    ) {
      setSelectedCategories(
        skillsData.skills.map((ele) => ({
          ...ele,
          key: ele?.categoryId,
          value: ele?.categoryDisplayName,
          checked: true,
        }))
      );
    }
  }, [skillsData]);

  // Handle 'Select All' option
  const handleSelectAll = () => {
    const allSelected = selectedCategories.every((ele: any) => ele.checked);

    if (allSelected) {
      // Deselect all if all are selected
      setSelectedCategories(
        selectedCategories.map((ele: any) => ({
          ...ele,
          checked: false,
        }))
      );
    } else {
      // Select all options
      setSelectedCategories(
        selectedCategories.map((ele: any) => ({
          ...ele,
          checked: true,
        }))
      );
    }
  };

  // Handle individual category selection
  const handleCategorySelect = (item: any) => {
    // Check if all categories are selected
    const allSelected = selectedCategories.every((ele: any) => ele.checked);

    if (allSelected && !item.checked) {
      // Prevent unchecking if all are selected
      return;
    }

    setSelectedCategories(
      selectedCategories.map((ele: any) =>
        ele.key === item.key ? { ...ele, checked: !ele.checked } : ele
      )
    );
  };

  const handleChange = async (values: string[]) => {
    setSelectedSkillType(values[0]);
    /* Academics 
       const filter = {
       stream = "engineering",
       classLevel = "undergraduate",
      department: 'common',
      
       }
    */
    const payload = { skill: [values[0]], filter: {} };


    
    skillsData = await postGetSkillData({payload}).unwrap();
  };

  return (
    <ScrollView 
      style={tw`relative top-0 bg-[#131927]`}
      contentContainerStyle={tw`flex-1`}
    >
      <GwFiltersContainer
        selectedSkillType={selectedSkillType}
        selectedCategories={selectedCategories}
        handleChange={handleChange}
        handleSelectAll={handleSelectAll}
        handleCategorySelect={handleCategorySelect}
      />
      <GwCategoryDisplayBox 
        selectedCategories={selectedCategories} 
      />
    </ScrollView>
  );
};
