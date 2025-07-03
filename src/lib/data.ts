
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
          { name: 'IndianPornList', url: 'https://indianpornlist.com/', premium: true },
          { name: 'NSFW Subreddits', url: 'https://www.reddit.com/r/NSFW411/wiki/index', premium: true },
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
          { name: 'Noodlemagazine', url: 'https://noodlemagazine.com/', description: 'Search Engine' },
          { name: 'iXXX', url: 'https://www.ixxx.com/', description: 'Aggregators' }
        ],
      },
      {
        id: 'adm',
        name: 'Adult Movies / Grindhouse',
        links: [
          { name: 'NSFW Movie Site Search', url: 'https://cse.google.com/cse?cx=006516753008110874046:3-svpblbro8', premium: true },
          { name: 'Noodlemagazine', url: 'https://noodlemagazine.com/', premium: true, description: 'Search Engine' },
          { name: 'Film1k', url: 'https://www.film1k.com/' },
          { name: 'EroticMV', url: 'https://eroticmv.com/' },
          { name: 'RareLust', url: 'https://rarelust.com/movies-index/' },
          { name: 'PandaMovies', url: 'https://pandamovies.pw/' },
          { name: 'SleazeMovies', url: 'https://example.com' },
        ],
      },
      {
        id: 'jav',
        name: 'Asian / JAV',
        links: [
          { name: 'SexTB', url: 'https://sextb.net/', premium: true },
          { name: 'SupJav', url: 'https://supjav.com/', premium: true },
          { name: 'JAVSeen', url: 'https://javseen.tv/', premium: true },
          { name: 'JAVGG', url: 'https://javgg.net/' },
          { name: 'JavGuru', url: 'https://jav.guru/' },
          { name: 'Javtiful', url: 'https://javtiful.com/' },
        ],
      },
      {
        id: 'anim',
        name: 'Hentai',
        links: [
          { name: 'EverythingMoe', url: 'https://everythingmoe.com/?nsfw=true#section-hentai', premium: true, description: 'Hentai Sites Index' },
          { name: '/cumg/', url: 'https://rentry.co/coom', premium: true, description: 'Hentai Resources' },
          { name: 'Nyaa Sukebei', url: 'https://sukebei.nyaa.si/', premium: true, description: 'Hentai Torrents' },
          { name: 'Anime-Sharing', url: 'https://www.anime-sharing.com/#downloads-requests', description: 'Hentai DDL' },
          { name: 'Oppai.Stream', url: 'https://oppai.stream/', description: 'Hentai Streaming' },
          { name: 'hstream.moe', url: 'https://hstream.moe/', description: 'Hentai Streaming' },
        ],
      },
      {
        id: 'cam',
        name: 'Cam Models',
        links: [
          { name: 'Archivebate', url: 'https://archivebate.com/', premium: true },
          { name: 'CamCaps', url: 'https://camcaps.ac/', premium: true },
          { name: 'Peachurbate', url: 'https://peachurnet.com/', premium: true },
          { name: 'Curbate', url: 'https://curbate.tv/' },
          { name: 'LiveCamRips', url: 'https://livecamrips.su/' },
          { name: 'CamBro', url: 'https://www.cambro.tv/' },
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
            { name: 'General DDL Sites', url: 'https://www.reddit.com/r/FREEMEDIAHECKYEAH/wiki/download', premium: true },
            { name: 'Search4Porn', url: 'https://search4porn.net/', description: 'NSFW File Search' },
            { name: 'AEBN Downloader', url: 'https://github.com/estellaarrieta/aebn-vod-downloader', description: 'Downloader for AEBN' },
            { name: 'StashDB', url: 'https://stashdb.org/', description: 'Porn Database / Invite' },
        ]
      },
      {
        id: 'download-communities',
        name: 'Communities',
        links: [
            { name: 'Pornoslon', url: 'http://pornoslon.me/' },
            { name: 'PornBBS', url: 'https://pornbbs.org/' },
            { name: 'PornBB', url: 'https://www.pornbb.org/forum' },
            { name: 'Eroticity', url: 'https://eroticity.net/forum.php' },
        ]
      },
      {
        id: 'download-games',
        name: 'Games',
        links: [
            { name: 'F95Zone', url: 'https://f95zone.to/', premium: true },
            { name: 'Nyaa Sukebei', url: 'https://sukebei.nyaa.si/', premium: true },
            { name: 'Anime-Sharing', url: 'https://www.anime-sharing.com/#downloads-requests', premium: true, description: 'Hentai Games DDL' },
            { name: 'VNPocket', url: 'https://vnpocket.com/' },
        ]
      },
      {
        id: 'download-torrents',
        name: 'Torrents',
        links: [
            { name: 'myporn.club', url: 'https://myporn.club/', premium: true },
            { name: 'XXXCLub', url: 'https://xxxclub.to/', premium: true },
            { name: 'Nyaa Sukebei', url: 'https://sukebei.nyaa.si/', premium: true, description: 'JAV' },
            { name: 'ProjectJav', url: 'https://projectjav.com/', premium: true, description: 'JAV' },
            { name: 'OneJAV', url: 'https://onejav.com/', premium: true, description: 'JAV' },
            { name: 'General Torrent Sites', url: 'https://www.reddit.com/r/FREEMEDIAHECKYEAH/wiki/torrent' },
        ]
      }
    ]
  },
  {
    id: 'images',
    name: 'Images',
    subcategories: [
        { id: 'images-main', name: '', links: [
            { name: 'ImageFap', url: 'https://www.imagefap.com/', premium: true },
            { name: 'NSFWMonster', url: 'https://nsfwmonster.com/', premium: true },
            { name: 'FikFap', url: 'https://fikfap.com/' },
            { name: 'fyptt', url: 'https://fyptt.to/' },
        ]},
        { id: 'leak-sites', name: 'Leak Sites', links: [
            { name: 'Hotleak', url: 'https://hotleak.vip/', premium: true, description: 'OnlyFans / Patreon' },
            { name: 'Kemono', url: 'https://kemono.su/', premium: true, description: 'Patreon / Downloader / Patreon Buttons' },
            { name: 'Coomer', url: 'https://coomer.su/', description: 'OnlyFans / Downloader' },
            { name: 'SimpCity or SimpTown', url: 'https://simpcity.su/', description: 'OnlyFans / Patreon' },
        ]},
        { id: 'magazines', name: 'Magazines', links: [
            { name: 'Mens Magazines', url: 'https://archive.org/details/mensmagazines_post70s', premium: true, description: 'NSFW Magazine Archives (1970s-modern)' },
            { name: 'downmagaz', url: 'https://downmagaz.net/adult_magazine/' },
        ]},
        { id: 'doujins-comics', name: 'Doujins / Comics', links: [
            { name: 'Wholesome Hentai', url: 'https://wholesomelist.com/', premium: true, description: 'Wholesome Manga Index' },
            { name: 'E-Hentai or ExHentai', url: 'https://e-hentai.org/', premium: true, description: 'Hentai Manga / Comics' },
            { name: 'ComicsValley', url: 'https://comicsvalley.com/', premium: true, description: 'Comics' },
            { name: 'SchaleNetwork', url: 'https://niyaniya.moe/', premium: true, description: 'Official Translations / Mirrors' },
            { name: 'Hitomi', url: 'https://hitomi.la/', description: 'Hentai Manga' },
            { name: 'NHentai', url: 'https://nhentai.net/', description: 'Hentai Manga' },
        ]},
        { id: 'illustrations', name: 'Illustrations', links: [
            { name: 'Pixiv', url: 'https://www.pixiv.net/en/', premium: true },
            { name: 'Gelbooru', url: 'https://gelbooru.com/', premium: true },
            { name: 'Hentai Foundry', url: 'https://www.hentai-foundry.com/', premium: true },
            { name: 'kemono.party', url: 'https://kemono.su/' },
        ]},
        { id: 'ai-generated-images', name: 'AI Generated Images', links: [
            { name: 'Nectar', url: 'https://trynectar.ai/create' },
            { name: 'Made.Porn', url: 'https://made.porn/' },
            { name: 'PornLabs', url: 'https://editor.imagelabs.net/' },
            { name: 'Pornify', url: 'https://pornify.cc/' },
        ]}
    ]
  },
  {
    id: 'erotica-fanfiction',
    name: 'Erotica / Fanfiction',
    subcategories: [
        {id: 'erotica-main', name: '', links: [
            { name: 'Literotica', url: 'https://www.literotica.com/', premium: true, description: 'Fictional' },
            { name: 'Chyoa', url: 'https://chyoa.com/', description: 'Fictional' },
            { name: 'Bellesa', url: 'https://www.bellesa.co/story/all', description: 'Fictional' },
            { name: 'SexualStories', url: 'https://sexualstories.club/', description: 'Fictional' },
            { name: 'TheFetLibrary', url: 'https://www.thefetlibrary.com/', description: 'Fictional' },
            { name: 'QuestionableQuestingQ', url: 'https://forum.questionablequesting.com/', description: 'Fictional / Signup Required' },
            { name: 'Adult-Fanfiction', url: 'https://www.adult-fanfiction.org/', description: 'Fictional' },
            { name: 'HyperDreams', url: 'https://www.hyperdreams.com/', description: 'Fictional / Interactive' },
        ]}
    ]
  },
  {
    id: 'lgbtq',
    name: 'LGBTQ+',
    subcategories: [
        {id: 'lgbtq-main', name: '', links: [
            { name: 'MyGaySites', url: 'https://mygaysites.com/', description: 'Gay Porn Site Index' },
            { name: 'PlayHDPorn Gay', url: 'https://www.playhdporn.com/categories/gay/' },
            { name: 'Boyfriend.tv', url: 'https://boyfriend.tv/' },
            { name: 'Gold Gay', url: 'https://www.gold-gay.com/' },
            { name: 'JAVBoys', url: 'https://javboys.com/', description: 'Gay JAV' },
            { name: 'Gay Torrents', url: 'https://www.gay-torrents.net/', description: 'Torrents / Use VPN' },
            { name: 'Yupdates', url: 'https://yupdates.neocities.org/', description: 'Gay Porn Artwork / Drives / Discord' },
            { name: 'PBC', url: 'https://pbc.xxx/', description: 'Gay Porn Encyclopedia' },
            { name: 'MyReadingManga', url: 'https://fictionmania.tv/', description: 'LGBTQ+ Hentai' },
            { name: 'Nifty', url: 'https://www.nifty.org/nifty/', description: 'LGBT / Fictional' },
        ]}
    ]
  },
  {
    id: 'tools',
    name: 'Tools',
    subcategories: [
        {id: 'tools-main', name: '', links: [
            { name: 'Stash', url: 'https://stashapp.cc/', premium: true, description: 'Porn File Manager' },
            { name: 'Anal Sex Guide', url: 'https://example.com', premium: true, description: 'Anal Sex Guide' },
            { name: 'PornStarByFace', url: 'https://pornstarbyface.com/', premium: true, description: 'NSFW Image Reverse Search' },
            { name: 'SauceNao', url: 'https://saucenao.com/', premium: true, description: 'Fictional NSFW Reverse Image Search' },
            { name: 'Bypass Subreddit Blocks', url: 'https://pastebin.com/gAAEQnqn', premium: true },
            { name: 'Javinizer', url: 'https://github.com/javinizer/Javinizer', description: 'JAV File Organizer' },
            { name: 'DeepMosaics', url: 'https://github.com/HypoX64/DeepMosaics', description: 'Remove Mosaics from Porn' },
            { name: 'ThePornDB', url: 'https://theporndb.net/', description: 'Porn Metadata' },
        ]}
    ]
  }
];
