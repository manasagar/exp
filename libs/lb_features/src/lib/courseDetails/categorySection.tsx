// CategorySection.tsx
import { View, Text } from 'react-native';
import { Category, Topic } from './types'; // Import interfaces from types file
import TopicCard from './topicCard';
import CustomCheckbox from '../../../../lb_presentation/src/lib/ui/checkbox'; // Import CustomCheckbox
import styles from './curriculumStyles';

interface CategorySectionProps {
  category: Category;
  expandedTopics: number[];
  selectedSubtopics: string[];
  onTopicPress: (topicId: number) => void;
  onSubtopicPress: (subtopicId: string) => void;
  onSelectAllSubtopics: (topic: Topic, checked: boolean) => void; // Update parameter type to Topic
}

function CategorySection({
  category,
  expandedTopics,
  selectedSubtopics,
  onTopicPress,
  onSubtopicPress,
  onSelectAllSubtopics,
}: CategorySectionProps) {
  return (
    <View style={styles.categoryContainer}>
      <View style={styles.topicCard}>
        <CustomCheckbox
          imgSrc={""}
          // label={`Select all ${category.categoryName}`}
          // Check if all subtopics of this category are selected
          level={1}
          checked={category.topics.every((topic) =>
            topic.subtopicsArr.every((subtopic) =>
              selectedSubtopics.includes(subtopic.subtopicId)
            )
          )}
          onChange={(checked: boolean) => {
            // Select all subtopics in the category
            category.topics.forEach((topic) => {
              onSelectAllSubtopics(topic, checked);
            });
          }} // Pass a topic as an example, you may need to adjust this
        />
        <Text style={styles.categoryName}>{category.categoryName}</Text>
      </View>
      {category.topics.map((topic) => (
        <TopicCard
          key={topic.topicId}
          topic={topic}
          expandedTopics={expandedTopics}
          selectedSubtopics={selectedSubtopics}
          onTopicPress={onTopicPress}
          onSubtopicPress={onSubtopicPress}
          onSelectAllSubtopics={onSelectAllSubtopics} // Pass onSelectAllSubtopics prop
        />
      ))}
    </View>
  );
}

export default CategorySection;
