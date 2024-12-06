import React, {useState, useEffect} from 'react';
/* import SkillSearch from './skillSearch'; */
import SessionFormat from './sessionFormat';
import { Text } from 'react-native';
const SkillContainer = ({onSelectedSkillsChange}) => {
  const [selectedSkills, setSelectedSkills] = useState([]);
  const handleSelectedSkillsChange = (newSelectedSkills) => {
    setSelectedSkills(newSelectedSkills);
  };

  useEffect(() => {
    onSelectedSkillsChange(selectedSkills);
  }, [selectedSkills]);


  return (
    <>
      {/* <SkillSearch  onSelectedSkillsChange={handleSelectedSkillsChange} /> 
      <Text>Selected Skills: {selectedSkills.map(skill => skill.displayName).join(', ')}</Text>*/}

     {/*  <SessionFormat /> */}
    </>
  );
};

export default SkillContainer;
