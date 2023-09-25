/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  sidebar: [
    'introduction',
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      link: {
        type: 'generated-index',
        description: 'Documentation that will get you started with using Spicetify-CLI.',
        slug: '/getting-started',
      },
      items: [
        'getting-started/installation',
        'getting-started/usage',
        'getting-started/uninstallation',
        {
          type: 'category',
          label: 'Customization',
          link: {
            type: 'generated-index',
            description: 'How to customize Spicetify to fit your needs.',
            slug: 'getting-started/customization',
          },
          items: [
            'getting-started/customization/config-file',
            'getting-started/customization/local-addons',
            'getting-started/customization/marketplace',
          ],
        },
      ],
      
    },

    {
      type: 'category',
      label: 'Addons',
      link: {
        type: 'generated-index',
        description: "Here is a collection of official and popular addons, and what they do.",
        slug: '/addons',
      },
      items: [
        'addons/themes',
        'addons/extensions',
        'addons/custom-apps',
      ],
    },

    {
      type: 'category',
      label: 'Development',
      link: {
        type: 'generated-index',
        description: "Let's learn about how to contribute to the Spicetify community!",
        slug: '/development',
      },
      items: [
        'development/compiling',
        'development/themes',
        'development/custom-apps',
        'development/js-modules',
        'development/spotify-cli-flags',
        {
          type: 'category',
          label: 'Spicetify Creator',
          link: {
            type: 'generated-index',
            description: 'The easy way to create extensions and custom apps!',
            slug: '/development/spicetify-creator',
          },
          items: [
            'development/spicetify-creator/the-basics',
            'development/spicetify-creator/create-extensions',
            'development/spicetify-creator/create-custom-apps',
            'development/spicetify-creator/building-and-testing',
          ],
        },
      ],
    },
    'faq',
  ],
};

module.exports = sidebars;
