import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Trails Through Shadows',
  tagline: 'Where Legends Unfold at Every Roll',
  favicon: 'img/favicon.ico',

  url: 'https://docs.tts-game.fun',
  baseUrl: '/',

  organizationName: 'Trails Through Shadows',
  projectName: 'TTS-Docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'cs'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/Trails-Through-Shadows/TTS-Docs/tree/master',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        blog: false
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: false,
          autoCollapseCategories: true,
        },
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      image: 'img/tts-logo.png',
      navbar: {
        title: 'Trails Through Shadows',
        logo: {
          alt: 'TTS Logo',
          src: 'img/tts-logo-nobg.png',
          href: 'https://docs.tts-game.fun',
        },
        items: [
          {
            type: 'doc',
            docId: 'data/intro',
            position: 'left',
            label: 'Docs'
          },
          {
            type: 'doc',
            docId: 'thesis/intro',
            position: 'left',
            label: 'Thesis'
          },
          {
            href: 'https://dashboard.tts-game.fun',
            position: 'right',
            label: 'Dashboard',
            target: '_blank'
          },
          {
            href: 'https://play.tts-game.fun',
            position: 'right',
            label: 'Frontend',
            target: '_blank'
          },
          {
            href: 'https://api.tts-game.fun/swagger-ui/index.html',
            position: 'right',
            label: 'API Docs',
            target: '_blank'
          },
          {
            href: 'https://dbdiagram.io/d/TTS-Game-Database-652c00e7ffbf5169f0b71ee4',
            position: 'right',
            label: 'Database',
            target: '_blank'
          },
          {
            href: 'https://github.com/Trails-Through-Shadows',
            position: 'right',
            label: 'GitHub',
            target: '_blank'
          },
        ]
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Trails Through Shadows, 💖 from Struggling students.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
