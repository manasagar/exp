import React from 'react';
import { View, Text, Button } from 'react-native';
import { useRoute } from '@react-navigation/native'; // Import useRoute to get current path
import styles from './curriculumStyles';
import CustomCheckbox from '../../../../lb_presentation/src/lib/ui/checkbox';

interface CurriculumTopBarProps {
  courseName: string;
  isSelectAllChecked: boolean;
  selectAll: (checked: boolean) => void;
  onStartCourse: () => void;
}

function CurriculumTopBar({
  courseName,
  isSelectAllChecked,
  selectAll,
  onStartCourse,
}: CurriculumTopBarProps) {
  const route = useRoute(); // Get the current route

  // const curriculumId = route.params?.curriculumId || route.name || route.path;
  const curriculumId =   route.path;

  // Debugging to ensure curriculumId is retrieved correctly
  console.log('Curriculum ID:', curriculumId);

  return (
    <View style={styles.topView}>
      <View style={styles.leftContainer}>
        <CustomCheckbox
          imgSrc={''}
          label="Select all"
          checked={isSelectAllChecked}
          onChange={(checked) => selectAll(checked)}
        />
      </View>
      <View style={styles.centerContainer}>
        <Text style={styles.courseName}>{courseName}</Text>
      </View>
      <View style={styles.rightContainer}>
        {/* Hide Start Course button if curriculumId is 'Campus-to-Career' */}
        {curriculumId !== '/Campus-to-Career' ?
          <Button title="Start course" onPress={onStartCourse} />
        : <></>}
      </View>
    </View>
  );
}

export default CurriculumTopBar;
