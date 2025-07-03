
export type LinkItem = {
  name: string;
  url: string;
  description?: string;
  premium?: boolean;
};

export type SubCategory = {
  id: string;
  name: string;
  links: LinkItem[];
};

export type Category = {
  id: string;
  name: string;
  subcategories: SubCategory[];
};

export const data: Category[] = [
  {
    id: 'index',
    name: 'NSFW Indexes',
    subcategories: [
      {
        id: 'index-main',
        name: '',
        links: [ 
          { name: "Reddit Doesn't Like This Site", url: 'https://example.com', premium: true, description: 'Organize, stream, and share your media.' },
          { name: 'Jellyfin', url: 'https://example.com', premium: true, description: 'The Free Software Media System.' },
          { name: 'Stremio', url: 'https://example.com', premium: true, description: 'All your video content on one screen.' },
          { name: 'Kodi', url: 'https://example.com', premium: true, description: 'Open source home theater software.' },
          { name: 'Emby', url: 'https://example.com', premium: true, description: 'Personal media server.' },
          { name: 'Full HD Cinema', url: 'https://example.com', description: 'Watch movies in full HD.' },
          { name: 'HD Today', url: 'https://example.com', description: 'A popular choice for recent releases.' },
          { name: 'Flixtor', url: 'https://example.com', description: 'Stream movies and TV shows for free.' },
        ],
      },
    ],
  },
  {
    id: 'nsfw-content',
    name: 'NSFW',
    subcategories: [
      {
        id: 'nsfw-doujin',
        name: 'Doujinshi & Manga',
        links: [
          { name: 'e-hentai', url: 'https://example.com', description: 'An extensive image gallery.' },
          { name: 'nhentai', url: 'https://example.com', description: 'Popular source for doujinshi.' },
        ],
      },
      {
        id: 'nsfw-video',
        name: 'Video Platforms',
        links: [
          { name: 'Pornhub', url: 'https://example.com', description: 'One of the largest video sites.' },
          { name: 'Onejav', url: 'https://example.com', description: 'Japanese adult video content.' },
        ],
      },
      {
        id: 'nsfw-specialized',
        name: 'Specialized Content',
        links: [
          { name: 'BigTits.video', url: 'https://example.com', description: 'Niche-specific video content.' },
          { name: 'MrDeepFakes', url: 'https://example.com', description: 'AI-generated content.' },
        ],
      },
      {
        id: 'nsfw-portals',
        name: 'Portals & Aggregators',
        links: [
          { name: 'ThePornDude', url: 'https://example.com', description: 'A directory for various sites.' },
          { name: 'PornKai', url: 'https://example.com', description: 'Aggregator with many categories.' },
          { name: 'The Fap Shack', url: 'https://example.com', description: 'Community and content portal.' },
        ],
      },
    ],
  },
  {
    id: 'developer-tools',
    name: 'Developer Tools',
    subcategories: [
      {
        id: 'tools-vcs',
        name: 'Version Control',
        links: [
            { name: 'GitHub', url: 'https://github.com', description: 'The leading development platform.' },
            { name: 'GitLab', url: 'https://gitlab.com', description: 'An open-source DevOps platform.' },
        ]
      },
      {
        id: 'tools-editors',
        name: 'Code Editors',
        links: [
            { name: 'VS Code', url: 'https://code.visualstudio.com', description: 'The most popular code editor.' },
            { name: 'JetBrains IDEs', url: 'https://www.jetbrains.com/', description: 'A suite of powerful IDEs.' },
        ]
      },
      {
        id: 'tools-search',
        name: 'Search & Reference',
        links: [
            { name: 'Google', url: 'https://google.com', description: 'The worlds leading search engine.' },
            { name: 'DuckDuckGo', url: 'https://duckduckgo.com', description: 'Privacy-focused search engine.' },
            { name: 'Wikipedia', url: 'https://wikipedia.org', description: 'The free encyclopedia.' },
        ]
      }
    ]
  },
  {
    id: 'frontend-dev',
    name: 'Frontend Development',
    subcategories: [
        { id: 'frontend-frameworks', name: 'JavaScript Frameworks', links: [
            { name: 'React', url: 'https://react.dev', description: 'A library for building UIs.'},
            { name: 'Vue.js', url: 'https://vuejs.org', description: 'The progressive JavaScript framework.'},
            { name: 'Svelte', url: 'https://svelte.dev', description: 'Cybernetically enhanced web apps.'},
        ]},
        { id: 'frontend-css', name: 'CSS Frameworks', links: [
            { name: 'Tailwind CSS', url: 'https://tailwindcss.com', description: 'A utility-first CSS framework.'},
            { name: 'Bootstrap', url: 'https://getbootstrap.com', description: 'Powerful, extensible, and feature-packed.'},
        ]},
        { id: 'frontend-hosting', name: 'Hosting & Deployment', links: [
            { name: 'Vercel', url: 'https://vercel.com', premium: true, description: 'Develop, preview, and ship.'},
            { name: 'Netlify', url: 'https://netlify.com', premium: true, description: 'The fastest way to build the best web experiences.'},
        ]},
        { id: 'frontend-components', name: 'Component Libraries', links: [
            { name: 'Shadcn/ui', url: 'https://ui.shadcn.com/', description: 'Beautifully designed components.'},
            { name: 'Aceternity UI', url: 'https://ui.aceternity.com/', description: 'Copy-paste UI for React & Next.js.'},
        ]},
        { id: 'frontend-animation', name: 'Animation Libraries', links: [
            { name: 'Framer Motion', url: 'https://www.framer.com/motion/', description: 'A production-ready motion library for React.'},
            { name: 'GSAP', url: 'https://gsap.com/', description: 'Professional-grade animation for the modern web.'},
        ]}
    ]
  },
  {
    id: 'backend-dev',
    name: 'Backend Development',
    subcategories: [
        {id: 'backend-main', name: '', links: [
            { name: 'Node.js', url: 'https://example.com', description: 'JavaScript runtime built on Chrome\'s V8 engine.' },
            { name: 'Express.js', url: 'https://example.com', description: 'Fast, unopinionated, minimalist web framework for Node.js.' },
            { name: 'Django', url: 'https://example.com', description: 'The web framework for perfectionists with deadlines.' },
            { name: 'Firebase', url: 'https://example.com', premium: true, description: 'An app development platform that helps you build and grow apps.' },
            { name: 'PostgreSQL', url: 'https://example.com', description: 'A powerful, open source object-relational database system.' },
        ]}
    ]
  },
  {
    id: 'design-resources',
    name: 'Design Resources',
    subcategories: [
        {id: 'design-main', name: '', links: [
            { name: 'Figma', url: 'https://example.com', description: 'The collaborative interface design tool.' },
            { name: 'Dribbble', url: 'https://example.com', description: 'Show and tell for designers.' },
            { name: 'Unsplash', url: 'https://example.com', description: 'The internet’s source of freely-usable images.' },
            { name: 'Coolors', url: 'https://example.com', description: 'The super fast color palettes generator.' },
            { name: 'Adobe Color', url: 'https://example.com', description: 'Create color palettes with the color wheel.' },
            { name: 'Canva', url: 'https://example.com', description: 'Easy-to-use graphic design platform.' },
            { name: 'Behance', url: 'https://example.com', description: 'Showcase and discover creative work.' },
            { name: 'Icons8', url: 'https://example.com', description: 'Free icons, photos, and illustrations.' },
            { name: 'Google Fonts', url: 'https://example.com', description: 'A library of free licensed fonts.' },
            { name: 'Remove.bg', url: 'https://example.com', description: 'Remove image backgrounds automatically.' },
        ]}
    ]
  },
  {
    id: 'miscellaneous',
    name: 'Miscellaneous',
    subcategories: [
        {id: 'misc-main', name: '', links: [
            { name: 'Product Hunt', url: 'https://example.com', description: 'The place to discover your next favorite things.' },
            { name: 'Indie Hackers', url: 'https://example.com', description: 'Work together to build profitable online businesses.' },
            { name: 'Hacker News', url: 'https://example.com', description: 'A social news website focusing on computer science and entrepreneurship.' },
            { name: 'Reddit', url: 'https://example.com', description: 'The front page of the internet.' },
            { name: 'Dev.to', url: 'https://example.com', description: 'A community of software developers.' },
            { name: 'Medium', url: 'https://example.com', description: 'An online publishing platform with a wide range of topics.' },
            { name: 'Stack Overflow', url: 'https://example.com', description: 'The largest community for developers to learn and share knowledge.' },
            { name: 'Lobsters', url: 'https://example.com', description: 'A computing-focused community sharing links and discussions.' },
            { name: 'Slashdot', url: 'https://example.com', description: 'News for nerds, stuff that matters.' },
            { name: 'TechCrunch', url: 'https://example.com', description: 'Breaking tech news and startup profiles.' },
            { name: 'The Verge', url: 'https://example.com', description: 'Technology news, reviews, and media network.' },
            { name: 'Ars Technica', url: 'https://example.com', description: 'In-depth news and opinions on technology, science, and more.' },
            { name: 'freeCodeCamp', url: 'https://example.com', description: 'Learn to code for free. Build projects. Earn certifications.' },
            { name: 'CSS-Tricks', url: 'https://example.com', description: 'Daily articles about CSS, HTML, JavaScript, and all things web development.' },
            { name: 'Smashing Magazine', url: 'https://example.com', description: 'For professional web designers and developers.' },
        ]}
    ]
  }
];
