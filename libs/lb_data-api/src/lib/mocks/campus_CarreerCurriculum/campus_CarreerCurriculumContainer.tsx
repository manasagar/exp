import { academics } from './academics';
import { academicSuccessTips } from './academicSuccessTips';
import { analyticalSkills } from './analyticalSkills';
import { careerExplorationAndTrends } from './careerExplorationAndTrends';
import { careerSupportAndMentorship } from './careerSupportAndMentorship';
import { communicationAndSoftSkills } from './communicationAndSoftSkills';
import { peopleManagement } from './peopleManagement';
import { placementSupport } from './placementSupport';
import { PortfolioData } from './portfolio';
import { productivityAndSmartWork } from './productivityAndSmartWork';
import { projectSelectionAndCollaboration } from './projectSelectionAndCollaboration';
import { specialInitiativesForRuralColleges } from './specialInitiativesForRuralColleges';
import { understandingDifferentRoles } from './understandingDifferentRoles';

export const curriculumData = {
  common: {
    courseName: 'Campus to Career Curriculum',
    imgPath: 'assets/ml/gw/careerIcons/campus-to-career',
    duration: '',
    shortDescription:
      'A comprehensive guide from campus life to a successful career.',
  },
  curriculumId: 'Campus-to-Career',
  curriculumItems: [
    ...academics,
    ...PortfolioData,
    ...peopleManagement,
    ...communicationAndSoftSkills,
    ...productivityAndSmartWork,
    ...careerExplorationAndTrends,
    ...careerSupportAndMentorship,
    ...placementSupport,
    ...understandingDifferentRoles,
    ...academicSuccessTips,
    ...projectSelectionAndCollaboration,
    ...specialInitiativesForRuralColleges,
    ...analyticalSkills,
  ],
};

// {
//   "common": {
//     "courseName": "Campus to Career Curriculum",
//     "imgPath": "assets/ml/gw/careerIcons/campus-to-career",
//     "duration": "",
//     "shortDescription": "A comprehensive guide from campus life to a successful career."
//   },
//   "curriculumId": "Campus-to-Career",
//   "curriculumItems": [
//     {
//       "categoryId": 1,
//       "categoryName": "Academic Performance",
//       "topics": [
//         {
//           "topicId": "1.1",
//           "topicName": "Academic Performance",
//           "subtopicsArr": [
//             {
//               "subtopicName": "Academics",
//               "subtopicId": "1.1_1",
//               "contentObj": {
//                 "mainDetails": {
//                   "data": [
//                     {
//                       "cardId": "c1-1.1_1",
//                       "render": [
//                         {
//                           "element": "imgPrompt",
//                           "about": "An image prompt to explain the below element in the render array.",
//                           "content": "Create an image split into two halves to depict the journey of a student transitioning into a professional career. On one side, show a student wearing a traditional graduation gown and hat, smiling proudly, holding a diploma, and standing against a backdrop of a university with a crowd of cheering classmates. On the other half, depict the same student now dressed in professional business attire, sitting confidently across a table from an interviewer in a modern office setting. The interviewer should be holding a resume, and the background should show elements of the office like a window with a cityscape view, a desk, and some office plants. The overall image should convey a sense of achievement, transition, and new beginnings.",
//                           "subDirName": "campus_career",
//                           "imgPath": ""
//                         },
//                         {
//                           "element": "formulae",
//                           "about": "represent the context of subtopicName, topicName and categoryName through a formula.",
//                           "content": "Better Academics = Better employability"
//                         }
//                       ]
//                     },
//                     {
//                       "cardId": "c2-1.1_1",
//                       "render": [
//                         {
//                           "element": "imgPrompt",
//                           "about": "An image prompt to explain the below element in the render array.",
//                           "content": "A confused programmer in the forest",
//                           "subDirName": "campus_career",
//                           "imgPath": ""
//                         },
//                         {
//                           "element": "stats",
//                           "about": "",
//                           "content": [
//                             {
//                               "text": "70% of Indian employers consider academic performance a key factor in hiring decisions",
//                               "source": "India Employability Survey by Aspiring Minds"
//                             }
//                           ]
//                         }
//                       ]
//                     },
//                     {
//                       "cardId": "c3-1.1_1",
//                       "render": [
//                         {
//                           "element": "imgPrompt",
//                           "about": "An image prompt to create image of the person in the source of the below element in the render array.",
//                           "subDirName": "campus_career",
//                           "imgPath": ""
//                         },
//                         {
//                           "element": "quotes",
//                           "about": "",
//                           "content": [
//                             {
//                               "text": "Academic excellence is the foundation for a successful career. It demonstrates a student's ability to learn, adapt, and excel in their chosen field.",
//                               "source": "Dr. Raghuram G. Rajan, Economist and Academician"
//                             }
//                           ]
//                         }
//                       ]
//                     }
//                   ]
//                 }
//               }
//             },
//             {
//               "subtopicName": "Tips to achieve better Academics",
//               "subtopicId": "1.1_2",
//               "contentObj": {
//                 "mainDetails": {
//                   "data": [
//                     {
//                       "cardId": "c1-1.1_2",
//                       "render": [
//                         {
//                           "element": "tips",
//                           "about": "represent the context of subtopicName, topicName and categoryName through a formula.",
//                           "content": [
//                             {
//                               "key": "Understand the core",
//                               "content": "Understand the core of the subject."
//                             },
//                             {
//                               "key": "Listen to classes with focus",
//                               "content": "Pay attention during classes to grasp the main concepts."
//                             },
//                             {
//                               "key": "Take effective notes",
//                               "content": "Summarize key points during lectures to aid understanding and revision."
//                             },
//                             {
//                               "key": "Join study groups",
//                               "content": "Collaborate with peers to discuss and learn different perspectives."
//                             },
//                             {
//                               "key": "Utilize resources",
//                               "content": "Make use of textbooks, online materials, and tutoring when needed."
//                             },
//                             {
//                               "key": "Stay positive and motivated",
//                               "content": "Maintain a positive mindset and remind yourself of your academic goals."
//                             }
//                           ]
//                         }
//                       ]
//                     }
//                   ]
//                 }
//               }
//             }
//           ]
//         }
//       ]
//     },
//     {
//       "categoryId": 2,
//       "categoryName": "Portfolio Building and Showcasing Skills",
//       "topics": [
//         {
//           "topicId": "13.1",
//           "topicName": "Portfolio Development",
//           "subtopicsArr": [
//             {
//               "subtopicName": "GitHub Projects",
//               "subtopicId": "13.1_1",
//               "contentObj": {
//                 "mainDetails": {
//                   "data": [
//                     {
//                       "cardId": "c1-13.1_1",
//                       "render": [
//                         {
//                           "element": "imgPrompt",
//                           "about": "An image prompt to explain GitHub projects",
//                           "content": "Create a minimalist vector illustration showing a laptop screen with the GitHub logo and several code repository icons floating around it. Use a color scheme of black, white, and GitHub's signature purple. Include visual representations of key GitHub features like branches, pull requests, and commits using simple icons or symbols.",
//                           "subDirName": "campus_career",
//                           "imgPath": "github_projects_illustration.png"
//                         },
//                         {
//                           "element": "formulae",
//                           "about": "Represent the importance of GitHub projects",
//                           "content": "Quality GitHub Projects = Showcased Skills + Collaborative Experience"
//                         }
                        
//                       ]
//                     },
//                     {
//                       "cardId": "c2-13.1_1",
//                       "render": [
//                         {
//                           "element": "imgPrompt",
//                           "about": "An image prompt to visualize GitHub's importance in hiring",
//                           "content": "Create an infographic-style image showing a hiring manager reviewing a candidate's profile. The image should be split into two parts: on one side, show a traditional resume, and on the other, a GitHub profile with repositories, contributions, and activity graph. Use contrasting colors to highlight the GitHub side, emphasizing its importance in the hiring process.",
//                           "subDirName": "campus_career",
//                           "imgPath": "github_hiring_importance.png"
//                         },
//                         {
//                           "element": "stats",
//                           "about": "Statistics about GitHub usage in hiring",
//                           "content": [
//                             {
//                               "text": "87% of hiring managers consider candidates' GitHub profiles important in the hiring process",
//                               "source": "GitHub Open Source Survey 2021"
//                             }
//                           ]
//                         }
//                       ]
//                     }
//                   ]
//                 }
//               }
//             }
//           ]
//         }
//       ]
//     },
//     {
//       "categoryId": 4,
//       "categoryName": "Communication and Soft Skills",
//       "topics": [
//         {
//           "topicId": "4.1",
//           "topicName": "Communication Skills",
//           "subtopicsArr": [
//             {
//               "subtopicName": "Verbal and Written Communication",
//               "subtopicId": "4.1_1"
//             },
//             {
//               "subtopicName": "Presentation Skills",
//               "subtopicId": "4.1_2"
//             }
//           ]
//         },
//         {
//           "topicId": "4.2",
//           "topicName": "Soft Skills",
//           "subtopicsArr": [
//             {
//               "subtopicName": "Interpersonal Skills",
//               "subtopicId": "4.2_1"
//             },
//             {
//               "subtopicName": "Negotiation Skills",
//               "subtopicId": "4.2_2"
//             },
//             {
//               "subtopicName": "Emotional Intelligence",
//               "subtopicId": "4.2_3"
//             }
//           ]
//         }
//       ]
//     },
//     {
//       "categoryId": 5,
//       "categoryName": "Productivity and Smart Work",
//       "topics": [
//         {
//           "topicId": "5.1",
//           "topicName": "Productivity",
//           "subtopicsArr": [
//             {
//               "subtopicName": "Time Management",
//               "subtopicId": "5.1_1"
//             },
//             {
//               "subtopicName": "Focus and Concentration",
//               "subtopicId": "5.1_2"
//             }
//           ]
//         }
//       ]
//     },
//     {
//       "categoryId": 6,
//       "categoryName": "Interview Preparation",
//       "topics": [
//         {
//           "topicId": "6.1",
//           "topicName": "Mock Interviews",
//           "subtopicsArr": [
//             {
//               "subtopicName": "Interview Questions",
//               "subtopicId": "6.1_1"
//             },
//             {
//               "subtopicName": "Feedback and Improvement",
//               "subtopicId": "6.1_2"
//             }
//           ]
//         }
//       ]
//     },
//     {
//       "categoryId": 7,
//       "categoryName": "Interview Preparation",
//       "topics": [
//         {
//           "topicId": "7.1",
//           "topicName": "Interview Techniques",
//           "subtopicsArr": [
//             {
//               "subtopicName": "Common Interview Questions",
//               "subtopicId": "7.1_1"
//             },
//             {
//               "subtopicName": "Body Language",
//               "subtopicId": "7.1_2"
//             }
//           ]
//         }
//       ]
//     },
//     {
//       "categoryId": 8,
//       "categoryName": "Job Search Strategies",
//       "topics": [
//         {
//           "topicId": "8.1",
//           "topicName": "Finding Opportunities",
//           "subtopicsArr": [
//             {
//               "subtopicName": "Online Job Portals",
//               "subtopicId": "8.1_1"
//             },
//             {
//               "subtopicName": "Networking Events",
//               "subtopicId": "8.1_2"
//             }
//           ]
//         }
//       ]
//     },
//     {
//       "categoryId": 9,
//       "categoryName": "Resume Writing",
//       "topics": [
//         {
//           "topicId": "9.1",
//           "topicName": "Creating an Effective Resume",
//           "subtopicsArr": [
//             {
//               "subtopicName": "Formatting",
//               "subtopicId": "9.1_1"
//             },
//             {
//               "subtopicName": "Content Strategy",
//               "subtopicId": "9.1_2"
//             }
//           ]
//         }
//       ]
//     },
//     {
//       "categoryId": 10,
//       "categoryName": "Personal Branding",
//       "topics": [
//         {
//           "topicId": "10.1",
//           "topicName": "Building Your Brand",
//           "subtopicsArr": [
//             {
//               "subtopicName": "Online Presence",
//               "subtopicId": "10.1_1"
//             },
//             {
//               "subtopicName": "Professional Image",
//               "subtopicId": "10.1_2"
//             }
//           ]
//         }
//       ]
//     },
//     {
//       "categoryId": 11,
//       "categoryName": "Technical Skills Development",
//       "topics": [
//         {
//           "topicId": "11.1",
//           "topicName": "Skill Enhancement",
//           "subtopicsArr": [
//             {
//               "subtopicName": "Online Courses",
//               "subtopicId": "11.1_1"
//             },
//             {
//               "subtopicName": "Certifications",
//               "subtopicId": "11.1_2"
//             }
//           ]
//         }
//       ]
//     },
//     {
//       "categoryId": 12,
//       "categoryName": "Workplace Skills",
//       "topics": [
//         {
//           "topicId": "12.1",
//           "topicName": "Adaptability and Flexibility",
//           "subtopicsArr": [
//             {
//               "subtopicName": "Adjusting to Changes",
//               "subtopicId": "12.1_1"
//             },
//             {
//               "subtopicName": "Working in Diverse Teams",
//               "subtopicId": "12.1_2"
//             }
//           ]
//         }
//       ]
//     },
//     {
//       "categoryId": 13,
//       "categoryName": "Leadership and Management Skills",
//       "topics": [
//         {
//           "topicId": "13.1",
//           "topicName": "Leadership Styles",
//           "subtopicsArr": [
//             {
//               "subtopicName": "Transformational Leadership",
//               "subtopicId": "13.1_1"
//             },
//             {
//               "subtopicName": "Transactional Leadership",
//               "subtopicId": "13.1_2"
//             }
//           ]
//         }
//       ]
//     }
//   ]
// }