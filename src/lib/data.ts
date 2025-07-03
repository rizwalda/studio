
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
    name: 'NSFW Indices',
    subcategories: [
      {
        id: 'index-main',
        name: '',
        links: [ 
          { name: "Reddit Doesn't Like This Site", url: 'https://www.reddit-doesnt-like-this.site/', premium: true },
          { name: 'NSFW Subreddits, 2, 3 or Multireddits', url: 'https://www.reddit.com/r/NSFW411/wiki/index', premium: true },
          { name: 'PornBox', url: 'http://pornbox.org/' },
          { name: 'One Porn List', url: 'https://onepornlist.com/' },
          { name: 'BigPornList', url: 'https://bigpornlist.net/' },
          { name: 'MrPornGeek', url: 'https://www.mrporngeek.com/' },
          { name: 'The Best Fetish Sites', url: 'https://thebestfetishsites.com/' },
          { name: 'PornList18', url: 'https://pornlist18.com/' },
        ],
      },
    ],
  },
  {
    id: 'streaming-content',
    name: 'Streaming',
    subcategories: [
      {
        id: 'streaming-main',
        name: '',
        links: [
          { name: 'HQPorner', url: 'https://hqporner.com/', premium: true },
          { name: 'SexyPorn', url: 'https://www.sxyprn.com/', premium: true },
          { name: 'WatchPorn.to', url: 'https://watchporn.to/', premium: true },
          { name: 'Porninja', url: 'https://www.por.ninja/' },
          { name: 'PornHoarder, 2', url: 'https://pornhoarder.tv/' },
          { name: 'Noodlemagazine', url: 'https://noodlemagazine.com/', description: 'Search Engine' },
          { name: 'iXXX or PornMD', url: 'https://example.com', description: 'Aggregators' }
        ],
      },
      {
        id: 'adm',
        name: 'Adult Movies / Grindhouse',
        links: [
          { name: 'NSFW Movie Site Search', url: 'https://example.com', premium: true },
          { name: 'Noodlemagazine', url: 'https://example.com', premium: true, description: 'Search Engine' },
          { name: 'Film1k', url: 'https://example.com' },
          { name: 'EroticMV', url: 'https://example.com' },
          { name: 'RareLust', url: 'https://example.com' },
          { name: 'PandaMovies', url: 'https://example.com' },
          { name: 'SleazeMovies', url: 'https://example.com' },
        ],
      },
      {
        id: 'jav',
        name: 'Asian / JAV',
        links: [
          { name: 'SexTB', url: 'https://example.com', premium: true },
          { name: 'SupJav', url: 'https://example.com', premium: true },
          { name: 'JAVSeen', url: 'https://example.com', premium: true },
          { name: 'JAVGG', url: 'https://example.com' },
          { name: 'JavGuru', url: 'https://example.com' },
          { name: 'Javtiful', url: 'https://example.com' },
        ],
      },
      {
        id: 'anim',
        name: 'Hentai',
        links: [
          { name: 'EverythingMoe', url: 'https://example.com', premium: true, description: 'Hentai Sites Index' },
          { name: '/cumg/', url: 'https://example.com', premium: true, description: 'Hentai Resources' },
          { name: 'Nyaa Sukebei', url: 'https://example.com', premium: true, description: 'Hentai Torrents' },
          { name: 'Anime-Sharing', url: 'https://example.com', description: 'Hentai DDL' },
          { name: 'Oppai.Stream', url: 'https://example.com', description: 'Hentai Streaming' },
          { name: 'hstream.moe', url: 'https://example.com', description: 'Hentai Streaming' },
        ],
      },
      {
        id: 'cam',
        name: 'Cam Models',
        links: [
          { name: 'Archivebate', url: 'https://example.com', premium: true },
          { name: 'CamCaps', url: 'https://example.com', premium: true },
          { name: 'Peachurbate', url: 'https://example.com', premium: true },
          { name: 'Curbate', url: 'https://example.com' },
          { name: 'LiveCamRips', url: 'https://example.com' },
          { name: 'CamBro', url: 'https://example.com' },
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
