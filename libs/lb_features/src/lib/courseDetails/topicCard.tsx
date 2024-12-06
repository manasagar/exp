// import React from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';
// import { Topic } from './types'; // Import interfaces from types file
// import SubtopicCard from './subtopicCard'; // Corrected the import
// import CustomCheckbox from '../../../../lb_presentation/src/lib/ui/checkbox'; // Import CustomCheckbox
// import tw from 'twrnc'; 

// interface TopicCardProps {
//   topic: Topic;
//   expandedTopics: number[];
//   selectedSubtopics: string[];
//   onTopicPress: (topicId: number) => void;
//   onSubtopicPress: (subtopicId: string) => void;
//   onSelectAllSubtopics: (topic: Topic, checked: boolean) => void;
// }

// const TopicCard: React.FC<TopicCardProps> = ({
//   topic,
//   expandedTopics,
//   selectedSubtopics,
//   onTopicPress,
//   onSubtopicPress,
//   onSelectAllSubtopics,
// }) => {
//   const isExpanded = expandedTopics.includes(topic.topicId);

//   return (
//     <View style={tw`p-4 border rounded-lg mb-4`}>
//       <View>
//         <TouchableOpacity
//           style={tw`flex-row items-center justify-between p-4 bg-[#1CB0F6] rounded-lg `}
//           onPress={() => onTopicPress(topic.topicId)}
//         >
//           <CustomCheckbox
//             imgSrc={""}
//             // label={`Select all ${topic.topicName}`}
//             level={2}
//             checked={topic.subtopicsArr.every((subtopic) =>
//               selectedSubtopics.includes(subtopic.subtopicId)
//             )}
//             onChange={(checked: boolean) =>
//               onSelectAllSubtopics(topic, checked)
//             }
            
//           />
//           <Text style={tw`text-white font-bold text-lg ml-2`}>
//             {topic.topicName}
//           </Text>
//           <Text style={tw`text-white ml-auto`}>{isExpanded ? "▲" : "▼"}</Text>
//         </TouchableOpacity>
//       </View>
//       {isExpanded && (
//         <View style={tw`mt-2`}>
//           {topic.subtopicsArr.map((subtopic) => (
//             <SubtopicCard
//               key={subtopic.subtopicId}
//               subtopic={subtopic}
//               isSelected={selectedSubtopics.includes(subtopic.subtopicId)}
//               onPress={onSubtopicPress}
//             />
//           ))}
//         </View>
//       )}
//     </View>
//   );
// }

// export default TopicCard;


import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Topic } from './types'; // Import interfaces from types file
import SubtopicCard from './subtopicCard'; // Corrected the import
import CustomCheckbox from '../../../../lb_presentation/src/lib/ui/checkbox'; // Import CustomCheckbox
import tw from 'twrnc'; 

interface TopicCardProps {
  topic: Topic;
  expandedTopics: number[];
  selectedSubtopics: string[];
  onTopicPress: (topicId: number) => void;
  onSubtopicPress: (subtopicId: string) => void;
  onSelectAllSubtopics: (topic: Topic, checked: boolean) => void;
}

const TopicCard: React.FC<TopicCardProps> = ({
  topic,
  expandedTopics,
  selectedSubtopics,
  onTopicPress,
  onSubtopicPress,
  onSelectAllSubtopics,
}) => {
  const isExpanded = expandedTopics.includes(topic.topicId);

  return (
    <View style={tw`p-4 border rounded-lg mb-4`}>
      <TouchableOpacity
        style={tw`flex-row items-center justify-between p-4 bg-[#1CB0F6] rounded-lg`}
        onPress={() => onTopicPress(topic.topicId)}
      >
        <View style={tw`flex-row items-center flex-1`}>
          <CustomCheckbox
            imgSrc={""}
            level={2}
            checked={topic.subtopicsArr.every((subtopic) =>
              selectedSubtopics.includes(subtopic.subtopicId)
            )}
            onChange={(checked: boolean) =>
              onSelectAllSubtopics(topic, checked)
            }
          />
          <View style={tw`flex-1 ml-2`}>
            <Text style={tw`text-white font-bold text-lg flex-wrap`}>
              {topic.topicName}
            </Text>
          </View>
        </View>
        <Text style={tw`text-white ml-auto`}>{isExpanded ? "▲" : "▼"}</Text>
      </TouchableOpacity>
      {isExpanded && (
        <View style={tw`mt-2`}>
          {topic.subtopicsArr.map((subtopic) => (
            <SubtopicCard
              key={subtopic.subtopicId}
              subtopic={subtopic}
              isSelected={selectedSubtopics.includes(subtopic.subtopicId)}
              onPress={onSubtopicPress}
            />
          ))}
        </View>
      )}
    </View>
  );
}

export default TopicCard;
