export type LinkItem = {
  name: string;
  url: string;
  description?: string;
  premium?: boolean;
  icon?: string;
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
        id: 'streaming',
        name: 'Streaming',
        subcategories: [
            {
                id: 'streaming-main',
                name: '',
                links: [
                    { name: 'Plex', url: '#', premium: true },
                    { name: 'Jellyfin', url: '#', premium: true },
                    { name: 'Stremio', url: '#', premium: true },
                    { name: 'Kodi', url: '#', premium: true },
                    { name: 'Emby', url: '#', premium: true },
                    { name: 'Full HD Cinema', url: '#'},
                    { name: 'HD Today', url: '#'},
                    { name: 'Flixtor', url: '#'},
                ]
            }
        ]
    },
    {
        id: 'nsfw',
        name: 'NSFW',
        subcategories: [
            {
                id: 'nsfw-main',
                name: '',
                links: [
                    { name: 'e-hentai', url: '#', icon: '🌐' },
                    { name: 'nhentai', url: '#', icon: '🌐' },
                    { name: 'Pornhub', url: '#'},
                    { name: 'Onejav', url: '#'},
                    { name: 'BigTits.video', url: '#'},
                    { name: 'MrDeepFakes', url: '#'},
                    { name: 'ThePornDude', url: '#'},
                    { name: 'PornKai', url: '#'},
                    { name: 'IndianPorn.com', url: '#'},
                    { name: 'TompJ', url: '#'},
                    { name: 'The Fap Shack', url: '#'},
                ]
            }
        ]
    },
    {
        id: 'tools',
        name: 'Tools',
        subcategories: [
            {
                id: 'tools-main',
                name: '',
                links: [
                    { name: 'Google', url: 'https://google.com' },
                    { name: 'DuckDuckGo', url: 'https://duckduckgo.com' },
                    { name: 'Wikipedia', url: 'https://wikipedia.org' },
                ]
            }
        ]
    }
];
