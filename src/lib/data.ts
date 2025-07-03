
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
    id: 'download',
    name: 'Download',
    subcategories: [
      {
        id: 'download-main',
        name: '',
        links: [
            { name: 'General DDL Sites', url: 'https://example.com', premium: true },
            { name: 'Search4Porn', url: 'https://example.com', description: 'NSFW File Search' },
            { name: 'AEBN Downloader', url: 'https://example.com', description: 'Downloader for AEBN' },
            { name: 'StashDB', url: 'https://example.com', description: 'Porn Database / Invite' },
        ]
      },
      {
        id: 'download-communities',
        name: 'Communities',
        links: [
            { name: 'Pornoslon', url: 'https://example.com' },
            { name: 'PornBBS', url: 'https://example.com' },
            { name: 'PornBB', url: 'https://example.com' },
            { name: 'Eroticity', url: 'https://example.com' },
        ]
      },
      {
        id: 'download-games',
        name: 'Games',
        links: [
            { name: 'F95Zone', url: 'https://example.com', premium: true },
            { name: 'Nyaa Sukebei', url: 'https://example.com', premium: true },
            { name: 'Anime-Sharing', url: 'https://example.com', premium: true, description: 'Hentai Games DDL' },
            { name: 'VNPocket', url: 'https://example.com' },
        ]
      },
      {
        id: 'download-torrents',
        name: 'Torrents',
        links: [
            { name: 'myporn.club', url: 'https://example.com', premium: true },
            { name: 'XXXCLub', url: 'https://example.com', premium: true },
            { name: 'Nyaa Sukebei', url: 'https://example.com', premium: true, description: 'JAV' },
            { name: 'ProjectJav', url: 'https://example.com', premium: true, description: 'JAV' },
            { name: 'OneJAV', url: 'https://example.com', premium: true, description: 'JAV' },
            { name: 'General Torrent Sites', url: 'https://example.com' },
        ]
      }
    ]
  },
  {
    id: 'images',
    name: 'Images',
    subcategories: [
        { id: 'images-main', name: '', links: [
            { name: 'ImageFap', url: 'https://example.com', premium: true },
            { name: 'NSFWMonster', url: 'https://example.com', premium: true },
            { name: 'FikFap', url: 'https://example.com' },
            { name: 'fyptt', url: 'https://example.com' },
        ]},
        { id: 'leak-sites', name: 'Leak Sites', links: [
            { name: 'Hotleak', url: 'https://example.com', premium: true, description: 'OnlyFans / Patreon' },
            { name: 'Kemono', url: 'https://example.com', premium: true, description: 'Patreon / Downloader / Patreon Buttons' },
            { name: 'Coomer', url: 'https://example.com', description: 'OnlyFans / Downloader' },
            { name: 'SimpCity or SimpTown', url: 'https://example.com', description: 'OnlyFans / Patreon' },
        ]},
        { id: 'magazines', name: 'Magazines', links: [
            { name: 'Mens Magazines', url: 'https://example.com', premium: true, description: 'NSFW Magazine Archives (1970s-modern)' },
            { name: 'downmagaz', url: 'https://example.com' },
        ]},
        { id: 'doujins-comics', name: 'Doujins / Comics', links: [
            { name: 'Wholesome Hentai', url: 'https://example.com', premium: true, description: 'Wholesome Manga Index' },
            { name: 'E-Hentai or ExHentai', url: 'https://example.com', premium: true, description: 'Hentai Manga / Comics' },
            { name: 'ComicsValley', url: 'https://example.com', premium: true, description: 'Comics' },
            { name: 'SchaleNetwork', url: 'https://example.com', premium: true, description: 'Official Translations / Mirrors' },
            { name: 'Hitomi', url: 'https://example.com', description: 'Hentai Manga' },
            { name: 'NHentai', url: 'https://example.com', description: 'Hentai Manga' },
        ]},
        { id: 'illustrations', name: 'Illustrations', links: [
            { name: 'Pixiv', url: 'https://example.com', premium: true },
            { name: 'Gelbooru', url: 'https://example.com', premium: true },
            { name: 'Hentai Foundry', url: 'https://example.com', premium: true },
            { name: 'kemono.party', url: 'https://example.com' },
        ]},
        { id: 'ai-generated-images', name: 'AI Generated Images', links: [
            { name: 'Nectar', url: 'https://example.com' },
            { name: 'Made.Porn', url: 'https://example.com' },
            { name: 'PornLabs', url: 'https://example.com' },
            { name: 'Pornify', url: 'https://example.com' },
        ]}
    ]
  },
  {
    id: 'erotica-fanfiction',
    name: 'Erotica / Fanfiction',
    subcategories: [
        {id: 'erotica-main', name: '', links: [
            { name: 'Literotica', url: 'https://example.com', premium: true, description: 'Fictional' },
            { name: 'Chyoa', url: 'https://example.com', description: 'Fictional' },
            { name: 'Bellesa', url: 'https://example.com', description: 'Fictional' },
            { name: 'SexualStories', url: 'https://example.com', description: 'Fictional' },
            { name: 'TheFetLibrary', url: 'https://example.com', description: 'Fictional' },
            { name: 'QuestionableQuestingQ', url: 'https://example.com', description: 'Fictional / Signup Required' },
            { name: 'Adult-Fanfiction', url: 'https://example.com', description: 'Fictional' },
            { name: 'HyperDreams', url: 'https://example.com', description: 'Fictional / Interactive' },
        ]}
    ]
  },
  {
    id: 'lgbtq',
    name: 'LGBTQ+',
    subcategories: [
        {id: 'lgbtq-main', name: '', links: [
            { name: 'MyGaySites', url: 'https://example.com', description: 'Gay Porn Site Index' },
            { name: 'PlayHDPorn Gay', url: 'https://example.com' },
            { name: 'Boyfriend.tv', url: 'https://example.com' },
            { name: 'Gold Gay', url: 'https://example.com' },
            { name: 'JAVBoys', url: 'https://example.com', description: 'Gay JAV' },
            { name: 'Gay Torrents', url: 'https://example.com', description: 'Torrents / Use VPN' },
            { name: 'Yupdates', url: 'https://example.com', description: 'Gay Porn Artwork / Drives / Discord' },
            { name: 'PBC', url: 'https://example.com', description: 'Gay Porn Encyclopedia' },
            { name: 'MyReadingManga', url: 'https://example.com', description: 'LGBTQ+ Hentai' },
            { name: 'Nifty', url: 'https://example.com', description: 'LGBT / Fictional' },
        ]}
    ]
  },
  {
    id: 'tools',
    name: 'Tools',
    subcategories: [
        {id: 'tools-main', name: '', links: [
            { name: 'Stash', url: 'https://example.com', premium: true, description: 'Porn File Manager' },
            { name: 'Anal Sex Guide', url: 'https://example.com', premium: true, description: 'Anal Sex Guide' },
            { name: 'PornStarByFace', url: 'https://example.com', premium: true, description: 'NSFW Image Reverse Search' },
            { name: 'SauceNao', url: 'https://example.com', premium: true, description: 'Fictional NSFW Reverse Image Search' },
            { name: 'Bypass Subreddit Blocks', url: 'https://example.com', premium: true },
            { name: 'Javinizer', url: 'https://example.com', description: 'JAV File Organizer' },
            { name: 'DeepMosaics', url: 'https://example.com', description: 'Remove Mosaics from Porn' },
            { name: 'ThePornDB', url: 'https://example.com', description: 'Porn Metadata' },
        ]}
    ]
  }
];
