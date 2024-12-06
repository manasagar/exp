import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Subtopic } from "./types"; // Import interfaces from types file
import CustomCheckbox from "../../../../lb_presentation/src/lib/ui/checkbox"; // Import CustomCheckbox
import styles from "./curriculumStyles";

interface SubtopicCardProps {
  subtopic: Subtopic;
  isSelected: boolean;
  onPress: (subtopicId: string) => void;
}

// const SubtopicCard: React.FC<SubtopicCardProps> = ({
//   subtopic,
//   isSelected,
//   onPress,
// }) => {
//   return (
//     <TouchableOpacity
//       style={[
//         styles.subtopicCard,
//         { backgroundColor: isSelected ? "white" : "#EBE4F1" },
//       ]}
//       onPress={() => onPress(subtopic.subtopicId)}
//     >
//       <View style={styles.topicCard}>
//         <CustomCheckbox
//           imgSrc={""}
//           checked={isSelected}
//           onChange={() => onPress(subtopic.subtopicId)}
//           level={3}
//         />
//         <Text style={styles.subtopicText}>{subtopic.subtopicName}</Text>
//       </View>
//       {isSelected && (
//         <View style={{ flex: 1, alignItems: "flex-end" }}>
//           {/* <IoCheckmarkCircleOutline style={styles.checkmarkIcon} /> */}
//         </View>
//       )}
//     </TouchableOpacity>
//   );
// };

const SubtopicCard: React.FC<SubtopicCardProps> = ({
    subtopic,
   isSelected,
     onPress,
   }) => {
  return (
    <TouchableOpacity
      style={[
        styles.subtopicCard,
        { backgroundColor: isSelected ? "white" : "#EBE4F1" },
      ]}
      onPress={() => onPress(subtopic.subtopicId)}
    >
      <View style={styles.topicCard}>
        <CustomCheckbox
          imgSrc={""}
          checked={isSelected}
          onChange={() => onPress(subtopic.subtopicId)}
          level={3}
        />
        <Text style={styles.subtopicText}>{subtopic.subtopicName}</Text>
      </View>
      {isSelected && (
        <View style={{ flex: 1, alignItems: "flex-end" }}>
          {/* <IoCheckmarkCircleOutline style={styles.checkmarkIcon} /> */}
        </View>
      )}
    </TouchableOpacity>
  );
}

export default SubtopicCard;
