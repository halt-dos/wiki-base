// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Haltdos',
  tagline: 'User Guide',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo/icon_light.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  url: 'https://halt-dos.github.io',
  baseUrl: '/wiki/',
  organizationName: 'haltdos', // Usually your GitHub org/user name.
  projectName: 'wiki', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
      algolia: {
        appId: 'IYTTHE6Z6K',
        apiKey: '89013e04360221d1559a0a4d012fa3b5',
        indexName: 'dev_haltdos',
        contextualSearch: true,
        searchParameters: {},
        searchPagePath: 'search',
      },
      navbar: {
        title: 'Haltdos Wiki',
        logo: {
          alt: 'Haltdos',
          src: 'img/logo/icon_light.png',
          srcDark: 'img/logo/icon_dark.png'
        },
        items: [
          {
            type: 'dropdown',
            label: 'Products',
            position: 'right',
            items: [
              {
                type: 'doc',
                label: 'Anti-DDoS',
                docId: 'ddos/docs/docs',
              },
              {
                type: 'doc',
                label: 'Web Application Firewall',
                docId: 'waf/docs/docs',
              },
              {
                type: 'doc',
                label: 'Community Web Application Firewall',
                docId: 'community-waf/docs/docs',
              },
              {
                type: 'doc',
                label: 'Application Delivery Controller',
                docId: 'adc/docs/docs',
              },
              {
                type: 'doc',
                label: 'Global Server Load Balancer',
                docId: 'gslb/docs/docs',
              },
              {
                type: 'doc',
                label: 'Link Load Balancer',
                docId: 'llb/docs/docs',
              },
              {
                type: 'doc',
                label: 'SSL VPN',
                docId: 'ssl-vpn/docs/docs',
              },
              {
                type: 'doc',
                label: 'Haltdos SaaS',
                docId: 'saas/docs/docs',
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
