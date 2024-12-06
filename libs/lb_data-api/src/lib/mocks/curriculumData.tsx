export const curriculumData = {
  common: {
    courseName: "Spring Boot",
    imgPath: "assets/ml/gw/computerIcons/Spring-Boot_icon",
    duration: "",
    shortDescription: "",
  },
  _id: "669e43dbf3070be908c19c28",
  curriculumId: "Spring-Boot",
  curriculumItems: [
    {
      categoryId: 1,
      categoryName: "Introductory",
      topics: [
        {
          topicId: "1.1",
          topicName: "What is Spring Boot?",
          subtopicsArr: [
            {
              subtopicName: "Introduction to Spring Framework",
              subtopicId: "1.1_1",
              contentObj: {
                mainDetails: {
                  data: [
                    {
                      cardId: "des1-1.1_1",
                      render: [
                        {
                          element: "title_description",
                          about:
                            "A single line question / title that will help the user to understand the concept.",
                          content: "What is Spring Boot?",
                        },
                        {
                          element: "list_description",
                          about: "Short, impactful sentence(s)",
                          content: [
                            "Spring Boot is a powerful, convention-over-configuration framework for building standalone, production-ready Spring-based applications.",
                            "It simplifies the process of building Spring applications by providing auto-configuration and starter dependencies.",
                            "Think of it as a streamlined and optimized way to create Spring projects quickly and efficiently.",
                          ],
                        },
                      ],
                      promptKey: "createContentForSubtopicsObj",
                    },
                    {
                      cardId: "des2-1.1_1",
                      render: [
                        {
                          element: "title_description",
                          about:
                            "A single line question / title that will help the user to understand the concept.",
                          content: "Why use Spring Boot?",
                        },
                        {
                          element: "list_description",
                          about: "Short, impactful sentence(s)",
                          content: [
                            "<b>Faster development:</b> Spring Boot reduces boilerplate code and configuration, allowing you to focus on business logic.",
                            "<b>Embedded servers:</b> It comes with embedded servers like Tomcat, Jetty, and Undertow, making it easy to run applications directly without external deployments.",
                            "<b>Auto-configuration:</b> Spring Boot automatically configures common dependencies and settings, simplifying the setup process.",
                            "<b>Production-ready:</b> Spring Boot applications are ready for production environments, with features like metrics, health checks, and security.",
                          ],
                        },
                      ],
                      promptKey: "createContentForSubtopicsObj",
                    },
                    {
                      cardId: "des3-1.1_1",
                      render: [
                        {
                          element: "title_description",
                          about:
                            "A single line question / title that will help the user to understand the concept.",
                          content:
                            "Spring Boot and Spring Framework: The Relationship",
                        },
                        {
                          element: "list_description",
                          about: "Short, impactful sentence(s)",
                          content: [
                            "Spring Boot is built on top of the Spring Framework, using its core components and features.",
                            "Think of Spring Boot as a powerful tool that makes it easier to work with the Spring Framework, providing convenient features and simplifying configuration.",
                          ],
                        },
                      ],
                      promptKey: "createContentForSubtopicsObj",
                    },
                    {
                      cardId: "des4-1.1_1",
                      render: [
                        {
                          element: "title_description",
                          about:
                            "A single line question / title that will help the user to understand the concept.",
                          content: "Key Features of Spring Boot",
                        },
                        {
                          element: "list_description",
                          about: "Short, impactful sentence(s)",
                          content: [
                            "<b>Auto-configuration:</b> Automatic configuration of common dependencies and settings.",
                            "<b>Starter dependencies:</b> Pre-packaged dependencies for common application functionalities.",
                            "<b>Embedded servers:</b> Built-in support for embedded web servers like Tomcat.",
                            "<b>Spring Data JPA:</b> Simplified database access with JPA.",
                            "<b>Spring Security:</b> Easy integration of security features.",
                            "<b>Actuator:</b> Provides endpoints for monitoring and managing applications.",
                            "<b>DevTools:</b> Features for faster development, including hot reloading.",
                          ],
                        },
                      ],
                      promptKey: "createContentForSubtopicsObj",
                    },
                  ],
                },
                jokes: {
                  data: [
                    {
                      cardId: "jok1-1.1_1",
                      render: [
                        {
                          element: "jo_qn",
                          about: "Question in a joke.",
                          content:
                            "Why did the Spring Boot developer get lost in the woods?",
                        },
                        {
                          element: "jo_ans",
                          about: "Answer of the joke",
                          content:
                            "Because he couldn't find his 'application.properties' file!",
                        },
                        {
                          element: "imgPrompt_jo",
                          about:
                            "An image prompt with respect to the above joke. The image should  should evoke fun. Use a suitable image style eg:['Caricatures', 'Reaction images', 'Visual puns', 'emojis', 'cartoon'] based on the content ",
                          content: "A confused programmer in the forest",
                          subDirName: "joke",
                          imgPath:
                            "assets/ml/Spring-Boot/joke/joke__Introduction_to_Spring_Framework",
                        },
                      ],
                      promptKey: "createJokesForSubtopicsObj",
                    },
                  ],
                },
                funfacts: {
                  data: [
                    {
                      cardId: "fac1-1.1_1",
                      render: [
                        {
                          element: "facts_title",
                          content: "3 fun facts about Spring Boot",
                        },
                        {
                          element: "facts_Items",
                          about: "For listing interesting facts",
                          content: [
                            "Spring Boot simplifies the development of Java applications.",
                            "It provides a set of default configurations for quick setup.",
                            "Spring Boot promotes convention over configuration.",
                          ],
                        },
                      ],
                      promptKey: "createFunfactsForSubtopicsObj",
                    },
                  ],
                },
                quizScenarioContent: {
                  data: [
                    {
                      cardId: "qui1-1.1_1",
                      render: [
                        {
                          element: "qz_scenario",
                          about: "Scenario about Spring Framework.",
                          content:
                            "Imagine you're building a web application. You need to manage dependencies, handle configuration, and interact with databases. <br>What framework helps simplify these tasks and provides a consistent approach to application development?",
                        },
                        {
                          element: "qz_options",
                          content:
                            "a) Spring Framework <br> b) JavaFX <br> c) Apache Struts <br> d) React",
                        },
                        {
                          element: "qz_answer",
                          content: "a) Spring Framework",
                        },
                      ],
                      promptKey: "createQuizScenarioForSubtopicsObj",
                    },
                    {
                      cardId: "qui2-1.1_1",
                      render: [
                        {
                          element: "qz_scenario",
                          about: "Understanding Spring's Role.",
                          content:
                            "What is the primary purpose of the Spring Framework in software development? <br>Is it for building user interfaces, managing databases, or something else?",
                        },
                        {
                          element: "qz_options",
                          content:
                            "a) Building user interfaces with JavaFX. <br> b) Providing a lightweight framework for web applications. <br> c) Simplifying Java application development with features like dependency injection and aspect-oriented programming. <br> d) Creating complex databases.",
                        },
                        {
                          element: "qz_answer",
                          content:
                            "c) Simplifying Java application development with features like dependency injection and aspect-oriented programming.",
                        },
                      ],
                      promptKey: "createQuizScenarioForSubtopicsObj",
                    },
                  ],
                },
                quizContent: {
                  data: [
                    {
                      cardId: "qui1-1.1_1",
                      render: [
                        {
                          element: "qz_qn",
                          about: "Quiz question",
                          content: "What is Spring Boot?",
                        },
                        {
                          element: "qz_options",
                          about:
                            "For displaying options in response to a quiz question. It  comes in combination with qz_qn element",
                          content: {
                            correctOptions: [
                              "A standalone, production-ready Spring application",
                            ],
                            options: [
                              {
                                value:
                                  "A standalone, production-ready Spring application",
                                label:
                                  "A standalone, production-ready Spring application",
                                name: "spring_boot",
                                response:
                                  "Correct! Spring Boot simplifies the development of Spring applications.",
                              },
                              {
                                value:
                                  "A complex, heavyweight Spring application",
                                label:
                                  "A complex, heavyweight Spring application",
                                name: "spring_boot",
                                response:
                                  "Incorrect. Spring Boot aims to be lightweight and easy to use.",
                              },
                              {
                                value:
                                  "A framework for building web applications only",
                                label:
                                  "A framework for building web applications only",
                                name: "spring_boot",
                                response:
                                  "Incorrect. While Spring Boot is excellent for web applications, it can also be used for various other types of applications.",
                              },
                            ],
                          },
                        },
                      ],
                      promptKey: "createQuizForSubtopicsObj",
                    },
                    {
                      cardId: "qui2-1.1_1",
                      render: [
                        {
                          element: "qz_qn",
                          about: "Quiz question",
                          content: "What is the primary goal of Spring Boot?",
                        },
                        {
                          element: "qz_options",
                          about:
                            "For displaying options in response to a quiz question. It  comes in combination with qz_qn element",
                          content: {
                            correctOptions: [
                              "To simplify Spring application development and deployment",
                            ],
                            options: [
                              {
                                value:
                                  "To simplify Spring application development and deployment",
                                label:
                                  "To simplify Spring application development and deployment",
                                name: "spring_boot_goal",
                                response:
                                  "Correct! Spring Boot automates configuration and reduces boilerplate code, making it easier to build and run Spring applications.",
                              },
                              {
                                value:
                                  "To create complex, enterprise-grade applications",
                                label:
                                  "To create complex, enterprise-grade applications",
                                name: "spring_boot_goal",
                                response:
                                  "Incorrect. While Spring Boot can be used for complex applications, its main goal is to simplify the development process.",
                              },
                              {
                                value:
                                  "To provide a replacement for the Spring Framework",
                                label:
                                  "To provide a replacement for the Spring Framework",
                                name: "spring_boot_goal",
                                response:
                                  "Incorrect. Spring Boot is built on top of the Spring Framework and complements its functionality.",
                              },
                            ],
                          },
                        },
                      ],
                      promptKey: "createQuizForSubtopicsObj",
                    },
                    {
                      cardId: "qui3-1.1_1",
                      render: [
                        {
                          element: "qz_qn",
                          about: "Quiz question",
                          content:
                            "What are some of the benefits of using Spring Boot?",
                        },
                        {
                          element: "qz_options",
                          about:
                            "For displaying options in response to a quiz question. It  comes in combination with qz_qn element",
                          content: {
                            correctOptions: [
                              "Reduced configuration",
                              "Faster development",
                              "Embedded servers",
                              "Simplified dependency management",
                              "Production-ready applications",
                            ],
                            options: [
                              {
                                value: "Reduced configuration",
                                label: "Reduced configuration",
                                name: "spring_boot_benefits",
                                response:
                                  "Correct! Spring Boot provides auto-configuration, minimizing the need for manual configuration.",
                              },
                              {
                                value: "Faster development",
                                label: "Faster development",
                                name: "spring_boot_benefits",
                                response:
                                  "Correct! Spring Boot's conventions and simplified setup accelerate development.",
                              },
                              {
                                value: "Embedded servers",
                                label: "Embedded servers",
                                name: "spring_boot_benefits",
                                response:
                                  "Correct! Spring Boot includes embedded servers like Tomcat, Jetty, or Undertow, simplifying deployment.",
                              },
                              {
                                value: "Simplified dependency management",
                                label: "Simplified dependency management",
                                name: "spring_boot_benefits",
                                response:
                                  "Correct! Spring Boot provides starter dependencies that include all necessary components for common use cases.",
                              },
                              {
                                value: "Production-ready applications",
                                label: "Production-ready applications",
                                name: "spring_boot_benefits",
                                response:
                                  "Correct! Spring Boot applications are designed to be production-ready with minimal additional configuration.",
                              },
                            ],
                          },
                        },
                      ],
                      promptKey: "createQuizForSubtopicsObj",
                    },
                  ],
                },
              },
            },
            {
              subtopicName: "Benefits of using Spring Boot",
              subtopicId: "1.1_2",
              contentObj: {
                mainDetails: {
                  data: [
                    {
                      cardId: "des1-1.1_2",
                      render: [
                        {
                          element: "title_description",
                          about:
                            "A single line question / title that will help the user to understand the concept.",
                          content:
                            "What are the benefits of using Spring Boot?",
                        },
                        {
                          element: "list_description",
                          about: "Short, impactful sentence(s)",
                          content: [
                            "<b>Faster Development:</b> Spring Boot's auto-configuration and conventions help you build applications quickly and efficiently.",
                            "<b>Simplified Dependency Management:</b> Spring Boot automatically includes necessary dependencies, reducing the need for manual configuration.",
                            "<b>Embedded Servers:</b> Spring Boot supports embedded servers like Tomcat and Jetty, simplifying deployment.",
                            "<b>Production-Ready Features:</b>  Spring Boot provides built-in support for monitoring, logging, and security, ensuring your applications are ready for production environments.",
                            "<b>Easy to Learn and Use:</b> Spring Boot's conventions and auto-configuration make it easier to learn and use than traditional Spring applications.",
                          ],
                        },
                      ],
                      promptKey: "dummyKey",
                    },
                    {
                      cardId: "des2-1.1_2",
                      render: [
                        {
                          element: "title_description",
                          about:
                            "A single line question / title that will help the user to understand the concept.",
                          content: "How does Spring Boot simplify development?",
                        },
                        {
                          element: "list_description",
                          about: "Short, impactful sentence(s)",
                          content: [
                            "<b>Auto-Configuration:</b> Spring Boot automatically configures your application based on the dependencies you include. This eliminates the need for extensive XML configuration.",
                            "<b>Starter Dependencies:</b> Spring Boot provides starter dependencies that bundle commonly used libraries, simplifying dependency management.",
                            "<b>Embedded Servers:</b> Spring Boot includes embedded servers like Tomcat, allowing you to run your application without external server installations.",
                          ],
                        },
                      ],
                      promptKey: "dummyKey",
                    },
                    {
                      cardId: "des3-1.1_2",
                      render: [
                        {
                          element: "title_description",
                          about:
                            "A single line question / title that will help the user to understand the concept.",
                          content:
                            "How does Spring Boot improve production readiness?",
                        },
                        {
                          element: "list_description",
                          about: "Short, impactful sentence(s)",
                          content: [
                            "<b>Production-Ready Features:</b> Spring Boot provides features like health checks, metrics, and logging that are essential for production environments.",
                            "<b>Security:</b> Spring Boot includes built-in support for security, including authentication and authorization.",
                            "<b>Monitoring:</b> Spring Boot integrates with monitoring tools like Prometheus and Spring Boot Actuator for easy monitoring and troubleshooting.",
                          ],
                        },
                      ],
                      promptKey: "dummyKey",
                    },
                    {
                      cardId: "des4-1.1_2",
                      render: [
                        {
                          element: "title_description",
                          about:
                            "A single line question / title that will help the user to understand the concept.",
                          content:
                            "What are some common use cases for Spring Boot?",
                        },
                        {
                          element: "list_description",
                          about: "Short, impactful sentence(s)",
                          content: [
                            "<b>RESTful Web Services:</b> Spring Boot is widely used for building RESTful APIs and microservices.",
                            "<b>Web Applications:</b> Spring Boot can be used to create web applications with features like templating and data access.",
                            "<b>Batch Processing:</b> Spring Boot provides support for batch processing tasks, making it suitable for data-intensive applications.",
                            "<b>Cloud Native Applications:</b> Spring Boot is highly compatible with cloud platforms and enables the creation of cloud-native applications.",
                          ],
                        },
                      ],
                      promptKey: "dummyKey",
                    },
                  ],
                },
                jokes: {
                  data: [
                    {
                      cardId: "jok1-1.1_2",
                      render: [
                        {
                          element: "jo_qn",
                          about: "Question in a joke.",
                          content:
                            "Why is Spring Boot like a good pair of shoes?",
                        },
                        {
                          element: "jo_ans",
                          about: "Answer of the joke",
                          content:
                            "It's comfortable, fast, and gets you to your destination quickly!",
                        },
                        {
                          element: "imgPrompt_jo",
                          about:
                            "An image prompt with respect to the above joke. The image should  should evoke fun. Use a suitable image style eg:['Caricatures', 'Reaction images', 'Visual puns', 'emojis', 'cartoon'] based on the content ",
                          content:
                            "A pair of sneakers next to a Spring Boot logo",
                          subDirName: "joke",
                          imgPath:
                            "assets/ml/Spring-Boot/joke/joke__Benefits_of_using_Spring",
                        },
                      ],
                      promptKey: "createJokesForSubtopicsObj",
                    },
                  ],
                },
                riddles: {
                  data: [
                    {
                      cardId: "rid1-1.1_2",
                      render: [
                        {
                          element: "riddle_qn",
                          about: "Question in a riddle",
                          content:
                            "<p>I'm a framework for Java development,<br/> With auto-configuration and embedded servers by my side.</p><p>What am I?</p>",
                        },
                        {
                          element: "riddle_ans",
                          about: "Answer in a riddle",
                          content:
                            "<p><span style='color: blue;'>Spring Boot</span></p>",
                        },
                      ],
                      promptKey: "createRiddlesForSubtopicsObj",
                    },
                  ],
                },
                funfacts: {
                  data: [
                    {
                      cardId: "fac1-1.1_2",
                      render: [
                        {
                          element: "facts_title",
                          content: "Benefits of using Spring Boot:",
                        },
                        {
                          element: "facts_Items",
                          about: "Advantages of Spring Boot",
                          content: [
                            "Rapid development",
                            "Easy deployment",
                            "Robust error handling",
                          ],
                        },
                      ],
                      promptKey: "createFunfactsForSubtopicsObj",
                    },
                  ],
                },
                quizScenarioContent: {
                  data: [
                    {
                      cardId: "qui1-1.1_2",
                      render: [
                        {
                          element: "qz_scenario",
                          about:
                            "Scenario based on benefits of using Spring Boot.",
                          content:
                            "You are developing a RESTful API for a large-scale e-commerce platform. You need to quickly build a robust and reliable API with minimal configuration. </br>Which of the following benefits of Spring Boot would be most helpful in this scenario?  </br>A. Auto-configuration</br>B. Embedded servers</br>C. Spring Data JPA integration",
                        },
                        {
                          element: "qz_options",
                          content:
                            "A. Auto-configuration</br>B. Embedded servers</br>C. Spring Data JPA integration",
                        },
                        {
                          element: "qz_answer",
                          content: "A. Auto-configuration",
                        },
                        {
                          element: "qz_explanation",
                          content:
                            "Spring Boot's auto-configuration feature automatically configures common dependencies and settings, reducing boilerplate code and allowing for faster development. </br>While embedded servers and Spring Data JPA integration are also valuable benefits, they are not as directly relevant to the scenario of quickly building a robust API.",
                        },
                      ],
                      promptKey: "createQuizScenarioForSubtopicsObj",
                    },
                    {
                      cardId: "qui2-1.1_2",
                      render: [
                        {
                          element: "qz_scenario",
                          about:
                            "Scenario based on benefits of using Spring Boot.",
                          content:
                            "You have a Spring Boot application that needs to connect to a database. You want to minimize the amount of code required for data access and focus on business logic. </br>Which of the following benefits of Spring Boot would be most helpful in this scenario?</br>A. Auto-configuration</br>B. Spring Data JPA integration</br>C. Embedded servers",
                        },
                        {
                          element: "qz_options",
                          content:
                            "A. Auto-configuration</br>B. Spring Data JPA integration</br>C. Embedded servers",
                        },
                        {
                          element: "qz_answer",
                          content: "B. Spring Data JPA integration",
                        },
                        {
                          element: "qz_explanation",
                          content:
                            "Spring Data JPA provides a simplified way to interact with databases, reducing the amount of boilerplate code needed for data access. This allows developers to focus more on business logic. </br>While auto-configuration and embedded servers are also useful, they are not as directly relevant to the scenario of simplifying database interactions.",
                        },
                      ],
                      promptKey: "createQuizScenarioForSubtopicsObj",
                    },
                  ],
                },
                quizContent: {
                  data: [
                    {
                      cardId: "qui1-1.1_2",
                      render: [
                        {
                          element: "qz_qn",
                          about: "Quiz question",
                          content:
                            "What is the primary advantage of using Spring Boot's embedded servers? </br>",
                        },
                        {
                          element: "qz_options",
                          about:
                            "For displaying options in response to a quiz question. It  comes in combination with qz_qn element",
                          content: {
                            correctOptions: ["Reduced Deployment Complexity"],
                            options: [
                              {
                                value: "Reduced Deployment Complexity",
                                label: "Reduced Deployment Complexity",
                                name: "embedded_servers",
                                response:
                                  "Correct! Embedded servers simplify deployment by eliminating the need for separate server installations.",
                              },
                              {
                                value: "Enhanced Performance",
                                label: "Enhanced Performance",
                                name: "embedded_servers",
                                response:
                                  "While embedded servers can improve performance in some cases, it's not their primary advantage.",
                              },
                              {
                                value: "Increased Security",
                                label: "Increased Security",
                                name: "embedded_servers",
                                response:
                                  "Embedded servers don't inherently provide enhanced security. Security is a separate concern addressed through configurations and practices.",
                              },
                            ],
                          },
                        },
                      ],
                      promptKey: "createQuizForSubtopicsObj",
                    },
                    {
                      cardId: "qui2-1.1_2",
                      render: [
                        {
                          element: "qz_qn",
                          about: "Quiz question",
                          content:
                            "How does Spring Boot simplify dependency management? </br>",
                        },
                        {
                          element: "qz_options",
                          about:
                            "For displaying options in response to a quiz question. It  comes in combination with qz_qn element",
                          content: {
                            correctOptions: ["Starter Dependencies"],
                            options: [
                              {
                                value: "Starter Dependencies",
                                label: "Starter Dependencies",
                                name: "dependency_management",
                                response:
                                  "Yes! Starter dependencies provide pre-configured sets of libraries, reducing the need for manual dependency management.",
                              },
                              {
                                value: "Manual Dependency Configuration",
                                label: "Manual Dependency Configuration",
                                name: "dependency_management",
                                response:
                                  "Spring Boot aims to simplify dependency management, not make it more manual.",
                              },
                              {
                                value: "External Dependency Management Tools",
                                label: "External Dependency Management Tools",
                                name: "dependency_management",
                                response:
                                  "While external tools can be used alongside Spring Boot, Spring Boot itself provides its own streamlined approach to dependency management.",
                              },
                            ],
                          },
                        },
                      ],
                      promptKey: "createQuizForSubtopicsObj",
                    },
                    {
                      cardId: "qui3-1.1_2",
                      render: [
                        {
                          element: "qz_qn",
                          about: "Quiz question",
                          content:
                            "What is the purpose of Spring Boot's Auto-Configuration feature? </br>",
                        },
                        {
                          element: "qz_options",
                          about:
                            "For displaying options in response to a quiz question. It  comes in combination with qz_qn element",
                          content: {
                            correctOptions: [
                              "Automatic Configuration of Beans",
                            ],
                            options: [
                              {
                                value: "Automatic Configuration of Beans",
                                label: "Automatic Configuration of Beans",
                                name: "auto_configuration",
                                response:
                                  "That's right! Auto-configuration automatically configures beans based on the dependencies present in your project.",
                              },
                              {
                                value: "Manual Bean Configuration",
                                label: "Manual Bean Configuration",
                                name: "auto_configuration",
                                response:
                                  "Auto-configuration aims to reduce manual bean configuration, not increase it.",
                              },
                              {
                                value: "Dynamic Code Generation",
                                label: "Dynamic Code Generation",
                                name: "auto_configuration",
                                response:
                                  "While auto-configuration might involve some code generation, its primary focus is on bean configuration.",
                              },
                            ],
                          },
                        },
                      ],
                      promptKey: "createQuizForSubtopicsObj",
                    },
                    {
                      cardId: "qui4-1.1_2",
                      render: [
                        {
                          element: "qz_qn",
                          about: "Quiz question",
                          content:
                            "How does Spring Boot promote rapid application development? </br>",
                        },
                        {
                          element: "qz_options",
                          about:
                            "For displaying options in response to a quiz question. It  comes in combination with qz_qn element",
                          content: {
                            correctOptions: ["Convention over Configuration"],
                            options: [
                              {
                                value: "Convention over Configuration",
                                label: "Convention over Configuration",
                                name: "rapid_development",
                                response:
                                  "Yes! Convention over Configuration minimizes boilerplate code and configuration, allowing developers to focus on business logic.",
                              },
                              {
                                value: "Complex Configuration",
                                label: "Complex Configuration",
                                name: "rapid_development",
                                response:
                                  "Spring Boot emphasizes reducing configuration complexity, not increasing it.",
                              },
                              {
                                value: "Limited Functionality",
                                label: "Limited Functionality",
                                name: "rapid_development",
                                response:
                                  "Spring Boot provides a wide range of features and integrations, promoting rapid development without limiting functionality.",
                              },
                            ],
                          },
                        },
                      ],
                      promptKey: "createQuizForSubtopicsObj",
                    },
                    {
                      cardId: "qui5-1.1_2",
                      render: [
                        {
                          element: "qz_qn",
                          about: "Quiz question",
                          content:
                            "Which of these is NOT a benefit of using Spring Boot? </br>",
                        },
                        {
                          element: "qz_options",
                          about:
                            "For displaying options in response to a quiz question. It  comes in combination with qz_qn element",
                          content: {
                            correctOptions: [
                              "Increased Development Complexity",
                            ],
                            options: [
                              {
                                value: "Increased Development Complexity",
                                label: "Increased Development Complexity",
                                name: "spring_boot_benefits",
                                response:
                                  "Correct! Spring Boot aims to simplify development, not make it more complex.",
                              },
                              {
                                value: "Faster Startup Times",
                                label: "Faster Startup Times",
                                name: "spring_boot_benefits",
                                response:
                                  "Spring Boot often results in faster startup times due to its optimized configurations.",
                              },
                              {
                                value: "Simplified Testing",
                                label: "Simplified Testing",
                                name: "spring_boot_benefits",
                                response:
                                  "Spring Boot provides features that make testing easier and more efficient.",
                              },
                            ],
                          },
                        },
                      ],
                      promptKey: "createQuizForSubtopicsObj",
                    },
                  ],
                },
              },
            },
            {
              subtopicName: "Key Features of Spring Boot",
              subtopicId: "1.1_3",
            },
          ],
        },
        {
          topicId: "1.2",
          topicName: "Setting up Spring Boot",
          subtopicsArr: [
            {
              subtopicName: "Installing Java Development Kit (JDK)",
              subtopicId: "1.2_1",
            },
            {
              subtopicName: "Installing Spring Boot CLI",
              subtopicId: "1.2_2",
            },
            {
              subtopicName: "Creating a Spring Boot Project",
              subtopicId: "1.2_3",
            },
            {
              subtopicName: "Understanding the Project Structure",
              subtopicId: "1.2_4",
            },
          ],
        },
        {
          topicId: "1.3",
          topicName: "Running a Spring Boot Application",
          subtopicsArr: [
            {
              subtopicName: "Running from the command line",
              subtopicId: "1.3_1",
            },
            {
              subtopicName: "Running from an IDE",
              subtopicId: "1.3_2",
            },
            {
              subtopicName: "Understanding the application lifecycle",
              subtopicId: "1.3_3",
            },
          ],
        },
      ],
    },
  ],
  __v: 0,
};
