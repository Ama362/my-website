// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Refract',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.png',

  // Future flags
  future: {
    v4: true,
  },
  // Deployment URLs
  url: 'https://ama362.github.io',
  baseUrl: '/my-website/',

  organizationName: 'Ama362', // Replace later with your GitHub username
  projectName: 'my-website', // Replace later with your repo name

  

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
         blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
  [
    require.resolve('@easyops-cn/docusaurus-search-local'),
    {
      hashed: true,
      docsRouteBasePath: '/docs',
      blogRouteBasePath: '/blog',
      language: ['en'],
    },
  ],
],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/refract-social-card.svg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Refract',
        logo: {
          alt: 'Refract Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            to: '/docs/getting-started',
            label: 'Get Started',
            position: 'left',
          },
         
          {
            href: 'https://github.com/Ama362/',
            label: 'GitHub',
            position: 'right',
            
          },
          
          {
            href: 'https://www.linkedin.com/in/amaeti-usoro-624a16242',
            label: 'Linkedin',
            position: 'right',
            
          },
          
        ],
        
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/getting-started',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              
              {
                label: 'GitHub',
                href: 'https://github.com/Ama362/',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/amaeti-usoro-624a16242',
              },
            ],
          },
          {
           
          },
        ],
        copyright: `Copyright © Refract.`,
        // Footer gradient banner
       
      },
    }),
};

export default config;

