// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Haltdos',
  tagline: 'User Guide',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'ignore',
  favicon: 'img/logo/icon_light.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  url: 'https://docs.haltdos.com',
  baseUrl: '/',
  organizationName: 'haltdos', // Usually your GitHub org/user name.
  projectName: 'wiki-base', // Usually your repo name.

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
          lastVersion: 'current',
          versions:{
            current: {
              label: '7.0',
              banner: 'none'
            },
          },
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          docItemComponent: require.resolve('./src/components/CustomDocItem/index.tsx'),
          breadcrumbs: true,
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      }),
    ],
  ],
  plugins: ['docusaurus-plugin-sass'],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      // algolia: {
      //   appId: 'IYTTHE6Z6K',
      //   apiKey: '89013e04360221d1559a0a4d012fa3b5',
      //   indexName: 'dev_haltdos',
      //   contextualSearch: true,
      //   searchParameters: {},
      //   searchPagePath: 'search',
      // },
      docs:{
        sidebar:{
          hideable: true,
          autoCollapseCategories: true
        }
      },
      navbar: {
        title: 'Haltdos Docs',
        logo: {
          alt: 'Haltdos',
          src: 'img/logo/icon_light.png',
          srcDark: 'img/logo/icon_dark.png'
        },
        items:[
          {
            label: 'Products',
            position: 'left',
            items: [
              {
                label: 'Haltdos Community WAF',
                to: 'community',
              },
              {
                label: 'Haltdos Enterprise',
                to: 'enterprise',
              }
            ],
            className: 'navbar__link--products',
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
            dropdownActiveClassDisabled: true,
          },
          {
            label: 'More',
            position: 'right',
            items: [
              {
                href: 'https://haltdos.com',
                label: 'Haltdos',
                target: '_blank',
                rel: null,
              },
              {
                label: 'Knowledge Base',
                to: 'kb',
              },
              {
                label: 'Glossary',
                to: 'glossary',
              }
            ],
            className: 'navbar__link--more',
          }
        ]
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
