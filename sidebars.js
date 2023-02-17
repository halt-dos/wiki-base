/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

const sidebars = {
  community_sidebar: [
    {
      type: 'category',
      label: 'Community WAF',
      link: {
        type: 'doc',
        id: 'community'
      },
      items: [
        {
          type:'autogenerated',
          dirName: 'community'
        }
      ]
    },
  ],
  enterprise_sidebar: [
    {
      type: 'category',
      label: 'Haltdos Enterprise',
      link: {
        type: 'doc',
        id: 'enterprise'
      },
      items: [
        {
          type:'autogenerated',
          dirName: 'enterprise'
        },
        {
          type: 'html',
          value: '<br>Deployment Scenarios<br>',
          defaultStyle: true,
          className: 'sidebar-title', // Use the default menu item styling
        },
        {
          type: 'autogenerated', 
          dirName: 'scenarios'
        },
        {
          type: 'html',
          value: '<br>Knowledge Base<br>',
          defaultStyle: true,
          className: 'sidebar-title', // Use the default menu item styling
        },
        {
          type: 'doc', 
          id: 'kb/platform/platform'
        },
        {
          type: 'doc', 
          id: 'kb/waf/waf'
        },
        {
          type: 'doc', 
          id: 'kb/adc/adc'
        },
        {
          type: 'doc', 
          id: 'kb/gslb/gslb'
        }
      ]
    }
  ],
  kb_sidebar: [
    {
      type: 'category',
      label: 'Knowledge Base',
      link: {
        type: 'doc',
        id: 'kb'
      },
      items: [
        {
          type:'autogenerated',
          dirName: 'kb'
        }
      ]
    },
  ]
};

module.exports = sidebars;
