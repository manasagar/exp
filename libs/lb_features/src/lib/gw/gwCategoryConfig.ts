export const gwCategoryConfig = [
  {
    categoryDisplayName: 'Academics',
    categoryId: 'academics',
    shortDescription: 'Learn core academic skills and concepts',
    apiMethod: 'POST',
    apiEndpoint: '/api/academicsSkills',
    subCategory: 'academics',
  },
  {
    categoryDisplayName: 'Software skills',
    categoryId: 'software-skills',
    shortDescription: 'Essential tools and practices for software development',
    apiMethod: 'GET',
    apiEndpoint: '/api/cyberSkills',
    subCategory: 'cyberSkills',
  },
  {
    categoryDisplayName: 'Competitive exams',
    categoryId: 'competitive-exams',
    shortDescription:
      'Preparation materials for various competitive examinations',
    apiMethod: 'GET',
    apiEndpoint: '/api/examsSkills',
    subCategory: 'competitiveExams',
  },
  {
    categoryDisplayName: 'Vocabulary',
    categoryId: 'vocabulary',
    shortDescription: 'Enhance your language and communication skills',
    apiMethod: 'GET',
    apiEndpoint: '/api/vocabularySkills',
    subCategory: 'cyberSkills',
  },
];
