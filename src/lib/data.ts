export type LinkItem = {
  name: string;
  url: string;
  description: string;
};

export type SubCategory = {
  id: string;
  name: string;
  links: LinkItem[];
};

export type Category = {
  id: string;
  name: string;
  icon: string; // emoji
  subcategories: SubCategory[];
};

export const data: Category[] = [
  {
    id: "getting-started",
    name: "Getting Started",
    icon: "🚀",
    subcategories: [
      {
        id: "essentials",
        name: "Essentials",
        links: [
          {
            name: "MDN Web Docs",
            url: "https://developer.mozilla.org/",
            description: "The ultimate resource for web developers, maintained by Mozilla and contributors.",
          },
          {
            name: "freeCodeCamp",
            url: "https://www.freecodecamp.org/",
            description: "Learn to code for free. Build projects. Earn certifications.",
          },
        ],
      },
    ],
  },
  {
    id: "frontend-dev",
    name: "Frontend Development",
    icon: "🎨",
    subcategories: [
      {
        id: "frontend-frameworks",
        name: "Frameworks",
        links: [
          {
            name: "React",
            url: "https://react.dev/",
            description: "The library for web and native user interfaces.",
          },
          {
            name: "Next.js",
            url: "https://nextjs.org/",
            description: "The React Framework for the Web. Used to build this site!",
          },
          {
            name: "SvelteKit",
            url: "https://kit.svelte.dev/",
            description: "A framework for building robust, high-performance web apps.",
          },
        ],
      },
      {
        id: "frontend-styling",
        name: "Styling",
        links: [
          {
            name: "Tailwind CSS",
            url: "https://tailwindcss.com/",
            description: "A utility-first CSS framework for rapid UI development.",
          },
          {
            name: "Shadcn/UI",
            url: "https://ui.shadcn.com/",
            description:
              "Beautifully designed components that you can copy and paste into your apps.",
          },
        ],
      },
      {
        id: "state-management",
        name: "State Management",
        links: [
          {
            name: "Redux",
            url: "https://redux.js.org/",
            description: "A predictable state container for JavaScript apps.",
          },
          {
            name: "Zustand",
            url: "https://zustand-demo.pmnd.rs/",
            description: "A small, fast and scalable bearbones state-management solution.",
          },
        ],
      },
      {
        id: "frontend-tooling",
        name: "Build Tools & Bundlers",
        links: [
          {
            name: "Vite",
            url: "https://vitejs.dev/",
            description: "Next Generation Frontend Tooling. It's fast!",
          },
          {
            name: "Webpack",
            url: "https://webpack.js.org/",
            description: "A static module bundler for modern JavaScript applications.",
          },
        ]
      }
    ],
  },
  {
    id: "backend-dev",
    name: "Backend Development",
    icon: "⚙️",
    subcategories: [
      {
        id: "backend-runtimes",
        name: "Runtimes & Frameworks",
        links: [
          {
            name: "Node.js",
            url: "https://nodejs.org/",
            description: "An asynchronous event-driven JavaScript runtime, designed to build scalable network applications.",
          },
          {
            name: "Express.js",
            url: "https://expressjs.com/",
            description: "Fast, unopinionated, minimalist web framework for Node.js.",
          },
        ],
      },
      {
        id: "backend-databases",
        name: "Databases",
        links: [
          {
            name: "PostgreSQL",
            url: "https://www.postgresql.org/",
            description: "A powerful, open source object-relational database system.",
          },
          {
            name: "MongoDB",
            url: "https://www.mongodb.com/",
            description: "A source-available cross-platform document-oriented database program.",
          },
          {
            name: "Firebase Firestore",
            url: "https://firebase.google.com/docs/firestore",
            description: "A flexible, scalable NoSQL cloud database to store and sync data for client- and server-side development.",
          }
        ],
      },
      {
        id: "backend-hosting",
        name: "Hosting & PaaS",
        links: [
          {
            name: "Firebase",
            url: "https://firebase.google.com/",
            description: "An app development platform that helps you build and grow apps and games users love. Backed by Google.",
          },
          {
            name: "Vercel",
            url: "https://vercel.com/",
            description: "The platform for frontend developers, providing the speed and reliability innovators need to create at the moment of inspiration.",
          },
        ],
      },
    ],
  },
  {
    id: "ai-ml",
    name: "AI & Machine Learning",
    icon: "🤖",
    subcategories: [
      {
        id: "ai-frameworks",
        name: "Frameworks",
        links: [
          {
            name: "Genkit",
            url: "https://firebase.google.com/docs/genkit",
            description: "An open-source framework from Google that helps you build, deploy, and monitor production-ready AI apps using Node.js/TypeScript.",
          },
          {
            name: "LangChain",
            url: "https://www.langchain.com/",
            description: "A framework for developing applications powered by language models.",
          },
          {
            name: "TensorFlow",
            url: "https://www.tensorflow.org/",
            description: "An end-to-end open source platform for machine learning.",
          }
        ],
      },
      {
        id: "ai-models",
        name: "Models & APIs",
        links: [
          {
            name: "Google AI & Gemini",
            url: "https://ai.google.dev/",
            description: "Access Google's state-of-the-art Gemini models for your applications.",
          },
          {
            name: "OpenAI",
            url: "https://openai.com/",
            description: "Creator of models like GPT-4, DALL-E, and more.",
          },
          {
            name: "Hugging Face",
            url: "https://huggingface.co/",
            description: "The AI community building the future. Build, train and deploy state of the art models powered by the reference open source in machine learning.",
          },
        ],
      },
      {
        id: "data-science",
        name: "Data Science",
        links: [
            {
                name: "Kaggle",
                url: "https://www.kaggle.com/",
                description: "The world's largest data science community with powerful tools and resources to help you achieve your data science goals."
            },
            {
                name: "Pandas",
                url: "https://pandas.pydata.org/",
                description: "A fast, powerful, flexible and easy to use open source data analysis and manipulation tool."
            }
        ]
      },
      {
        id: "mlops",
        name: "MLOps",
        links: [
            {
                name: "MLflow",
                url: "https://mlflow.org/",
                description: "An open source platform for managing the end-to-end machine learning lifecycle."
            },
            {
                name: "Kubeflow",
                url: "https://www.kubeflow.org/",
                description: "The Machine Learning Toolkit for Kubernetes."
            }
        ]
      },
      {
        id: "ai-learning",
        name: "Learning Resources",
        links: [
            {
                name: "fast.ai",
                url: "https://www.fast.ai/",
                description: "Making neural nets uncool again. Practical deep learning for coders."
            },
            {
                name: "DeepLearning.AI",
                url: "https://www.deeplearning.ai/",
                description: "Grow your career or build a business in AI with our world-class education, hands-on training, and a collaborative community."
            }
        ]
      }
    ],
  },
  {
    id: "design-inspiration",
    name: "Design & Inspiration",
    icon: "✨",
    subcategories: [
      {
        id: "ui-inspiration",
        name: "UI Kits & Libraries",
        links: [
          {
            name: "Aceternity UI",
            url: "https://ui.aceternity.com/",
            description: "Copy-paste React components for sleek, modern websites.",
          },
          {
            name: "Framer Motion",
            url: "https://www.framer.com/motion/",
            description: "A production-ready motion library for React.",
          },
        ],
      },
      {
        id: "color-tools",
        name: "Inspiration & Color",
        links: [
          {
            name: "Dribbble",
            url: "https://dribbble.com/",
            description: "The leading destination to find & showcase creative work.",
          },
          {
            name: "Coolors",
            url: "https://coolors.co/",
            description: "The super fast color palettes generator!",
          },
        ],
      },
    ],
  },
  {
    id: "productivity",
    name: "Productivity & Tools",
    icon: "🛠️",
    subcategories: [
        {
            id: "code-editors",
            name: "Code Editors & IDEs",
            links: [
                {
                    name: "VS Code",
                    url: "https://code.visualstudio.com/",
                    description: "A lightweight but powerful source code editor which runs on your desktop."
                },
                {
                    name: "WebStorm",
                    url: "https://www.jetbrains.com/webstorm/",
                    description: "The smartest JavaScript IDE by JetBrains."
                }
            ]
        },
        {
            id: "project-management",
            name: "Project Management",
            links: [
                {
                    name: "Notion",
                    url: "https://www.notion.so/",
                    description: "The connected workspace where better, faster work happens."
                },
                {
                    name: "Linear",
                    url: "https://linear.app/",
                    description: "The issue tracking tool you'll enjoy using."
                }
            ]
        }
    ]
  },
  {
    id: "community-learning",
    name: "Community & Learning",
    icon: "📚",
    subcategories: [
      {
        id: "learning-platforms",
        name: "Platforms",
        links: [
          {
            name: "GitHub",
            url: "https://github.com/",
            description: "Where the world builds software.",
          },
          {
            name: "Stack Overflow",
            url: "https://stackoverflow.com/",
            description: "The largest, most trusted online community for developers to learn, share​ ​their programming ​knowledge, and build their careers.",
          },
        ],
      },
      {
        id: "blogs-newsletters",
        name: "Blogs & Newsletters",
        links: [
          {
            name: "Smashing Magazine",
            url: "https://www.smashingmagazine.com/",
            description: "For professional web designers and developers.",
          },
          {
            name: "CSS-Tricks",
            url: "https://css-tricks.com/",
            description: "Daily articles about CSS, HTML, JavaScript, and all things related to web design and development.",
          },
        ],
      },
    ],
  },
];
