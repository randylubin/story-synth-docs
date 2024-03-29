const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Story Synth Documentation',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    // ['meta', { name: 'title', content: 'Story Synth Documentation' }],
    ['meta', { name: 'og-title', content: 'Story Synth Documentation' }],
    // ['meta', { name: 'description', content: 'The guide and documentation for designing storytelling games with Story Synth' }],
    ['meta', { name: 'og-description', content: 'The guide and documentation for designing storytelling games with Story Synth'}],
    ['meta', { name: 'og:image', content: 'https://storysynth.org/img/story-synth-square-logo.gif'}],
    ['meta', { name: 'og:url', content: 'https://docs.storysynth.org' }],
    ['meta', { name: 'twitter:card', content: 'summary' }],
    ['meta', { name: 'og:site_name', content: 'Story Synth Documentation' }],
    ['meta', { name: 'twitter:image:alt', content: 'Story Synth Logo'}],
    ['meta', { name: 'monetization', content: '$ilp.uphold.com/WMbkRBiZFgbx' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'Press',
        link: '/press/',
      },
      {
        text: 'Story Synth',
        link: 'https://storysynth.org'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            '',
            'design',
            'formats',
            'options',
            'extensions',
            'monetize',
            'publish',
            'extend',
          ]
        }
      ],
      '/press/': [
        {
          title: 'Press',
          collapsable: false,
          children: [
            '',
          ]
        }
      ],
      '/tutorials/': [
        {
          title: 'Tutorials',
          collapsable: false,
          children: [
            '',
            'styling',
          ]
        }
      ]
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
