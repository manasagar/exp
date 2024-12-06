export interface CurriculumData {
  common: {
    courseName: string;
  };
  curriculumItems: Category[];
}

export interface Category {
  categoryId: number;
  categoryName: string;
  topics: Topic[];
}

export interface Topic {
  topicId: number;
  topicName: string;
  subtopicsArr: Subtopic[];
}

export interface Subtopic {
  subtopicId: string;
  subtopicName: string;
}