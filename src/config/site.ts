import { Metadata } from 'next';

enum MENU_ICONS {
  Inbox = 'inbox',
  Posts = 'posts',
}

export const site = {
  title: 'GSTC',
  description:
    'a GSTC App',
  lang: 'en',
  menus: {
    links: [
      {
        href: '/app',
        label: 'Profile',
        icon: MENU_ICONS.Inbox,
        admin: false,
      },
    ],
  },
  afterLoginRedirect: '/account-settings',
} as const;
export type SiteConfig = typeof site;

export const customMetadata: Metadata = {
  title: site.title,
  description: site.description,
};
