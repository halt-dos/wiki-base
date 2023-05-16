const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Haltdos',
  tagline: 'User Guide',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'ignore',
  favicon: 'img/logo/icon_light.ico',

  url: 'https://docs.haltdos.com',
  baseUrl: '/',
  organizationName: 'haltdos',
  projectName: 'wiki-base',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'redocusaurus',
      {
        specs: [{
          route: '/api',
          spec: 'api/api.json',
        }],
        theme: {
          // Change with your site colors
          primaryColor: '#1890ff',
        },
      }
    ],
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          lastVersion: 'current',
          versions:{
            current: {
              label: '7.0'
            },
            '6.0': {
              path:'v6',
              banner:'none'
            }
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
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
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
          {to: 'kb', label: 'Knowledge Base', position: 'left'},
          {to: 'api', label: 'API', position: 'left'},
          {
            type: 'docsVersionDropdown',
            position: 'right',
            dropdownActiveClassDisabled: true,
          },
        ]
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
