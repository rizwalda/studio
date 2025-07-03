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
    id: "frontend-tools",
    name: "Frontend Tools",
    icon: "🎨",
    subcategories: [
      {
        id: "frameworks",
        name: "Frameworks & Libraries",
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
        id: "styling",
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
    ],
  },
  {
    id: "backend-tools",
    name: "Backend Tools",
    icon: "⚙️",
    subcategories: [
      {
        id: "hosting",
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
      {
        id: "databases",
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
        id: "frameworks-ai",
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
        ],
      },
      {
        id: "models-api",
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
        ],
      },
    ],
  },
    {
    id: "design-inspiration",
    name: "Design & Inspiration",
    icon: "✨",
    subcategories: [
      {
        id: "ui-inspiration",
        name: "UI Inspiration",
        links: [
          {
            name: "Dribbble",
            url: "https://dribbble.com/",
            description: "The leading destination to find & showcase creative work and home to the world's best design professionals.",
          },
          {
            name: "Awwwards",
            url: "https://www.awwwards.com/",
            description: "The awards that recognize the talent and effort of the best web designers, developers and agencies in the world.",
          },
        ],
      },
      {
        id: "color-tools",
        name: "Color Tools",
        links: [
          {
            name: "Coolors",
            url: "https://coolors.co/",
            description: "The super fast color palettes generator!",
          },
          {
            name: "Adobe Color",
            url: "https://color.adobe.com/",
            description: "Create color palettes with the color wheel or browse thousands of color combinations from the Color community.",
          },
        ],
      },
    ],
  },
];
