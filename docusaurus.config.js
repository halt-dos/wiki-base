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
  plugins: [
    'docusaurus-plugin-sass',
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: "apiDocs",
        docsPluginId: "classic",
        config: {
          api: { // Note: petstore key is treated as the <id> and can be used to specify an API doc instance when using CLI commands
            specPath: "api-docs.json", // Path to designated spec file
            outputDir: "docs/api", // Output directory for generated .mdx docs
          },
         
        }
      },
    ]
  ],
  themes: ["docusaurus-theme-openapi-docs"],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
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
