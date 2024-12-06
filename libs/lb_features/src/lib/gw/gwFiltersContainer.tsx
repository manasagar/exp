import React from 'react';
import { View } from 'react-native';
import { CustomMultipleSelect, Select, Option } from '../../../../lb_presentation/src/index';

interface GwFiltersContainerProps {
  selectedSkillType: string | null;
  selectedCategories: any[];
  handleChange: (values: string[]) => void;
  handleSelectAll: () => void;
  handleCategorySelect: (item: any) => void;
}

export const GwFiltersContainer: React.FC<GwFiltersContainerProps> = ({
  selectedSkillType,
  selectedCategories,
  handleChange,
  handleSelectAll,
  handleCategorySelect,
}) => {
  const skillTypeOptions = [
    { label: 'Academics', value: 'academics' },
    { label: 'Software', value: 'software' },
    { label: 'Competive exams preperation', value: 'exams', status: "upcoming" },
    { label: 'Vocabulary', value: 'vocabulary', status: "upcoming" },
  ];

  const disabledOptions = skillTypeOptions
  .filter(option => option.status === "upcoming")
  .map(option => option.value);

  return (
    <View
      style={{
        position: 'absolute',
        zIndex: 1000,
        top: 10,
        right: '2%',
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <Select
  onChange={handleChange}
  selectedValues={[selectedSkillType || '']}
  style={{ marginBottom: 20 }}
  disabledValues={disabledOptions}
  label="Select Skill Type" 
>
        {skillTypeOptions.map((option) => (
          <Option
            key={option.value}
            value={option.value}
            label={option.label}
          />
        ))}
      </Select>
      {selectedSkillType && (
        <CustomMultipleSelect
          data={selectedCategories}
          selectAll={handleSelectAll}
          onSelect={handleCategorySelect}
        />
      )}
    </View>
  );
};
