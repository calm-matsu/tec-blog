import {defineConfig} from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import solid from '@astrojs/solid-js';
import {remarkModifiedTime} from "./src/remarkPlugin/remark-modified-time.mjs";
import {resetRemark} from "./src/remarkPlugin/reset-remark.js";
import remarkDirective from "remark-directive";
import {remarkAsides} from  './src/remarkPlugin/remark-asides.js'

import expressiveCode from "astro-expressive-code";
//import {pluginLineNumbers} from '@expressive-code/plugin-line-numbers'

import {visit} from 'unist-util-visit'
import {pluginCollapsibleSections} from '@expressive-code/plugin-collapsible-sections'

export default defineConfig({
  site: 'https://labo.calm-dev.f5.si',
  integrations: [sitemap(), tailwind(), solid(), expressiveCode({
    plugins: [pluginCollapsibleSections()],
    themes: ["github-dark", "github-light"],
    styleOverrides: {
      codeFontFamily: "jetbrains-mono",
      uiFontFamily: "jetbrains-mono",
    },
    themeCssSelector: (theme) => `[data-theme="${theme.type}"]`
  }), mdx()],
  markdown: {
    remarkPlugins: [resetRemark, remarkDirective, remarkAsides({}) ],
    rehypePlugins: [],
    remarkRehype: {
      footnoteLabel: "脚注"
    },
  }
});
