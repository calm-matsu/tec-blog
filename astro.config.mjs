import {defineConfig} from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import solid from '@astrojs/solid-js';
//import {remarkModifiedTime} from "./src/remarkPlugin/remark-modified-time.mjs";
import {resetRemark} from "./src/remarkPlugin/reset-remark.js";
import remarkDirective from "remark-directive";
import {remarkAsides} from  './src/remarkPlugin/remark-asides.js'
import {remarkClassadd} from  './src/remarkPlugin/remark-classadd.js'
import remarkBreaks from "remark-breaks";

import expressiveCode,{ pluginFramesTexts } from "astro-expressive-code";
//import {pluginLineNumbers} from '@expressive-code/plugin-line-numbers'

//import {visit} from 'unist-util-visit'
//import {pluginCollapsibleSections} from '@expressive-code/plugin-collapsible-sections'

// 画像の遅延読み込み用設定
// コンテンツコレクション内のmarkdownファイルから相対パスで画像を読もうとすると失敗するので無効化した
/*
function customRehypeLazyLoadImage() {
  return function (tree) {
    visit(tree, function (node) {
      if (node.tagName === 'img') {
        node.properties['data-src'] = node.properties.src
        node.properties.src = '/spinner.gif'
        node.properties['data-alt'] = node.properties.alt
        node.properties.alt = 'default'
      }
    })
  }
}
*/

export default defineConfig({
  site: 'https://labo.calm-dev.f5.si',
  integrations: [sitemap(), tailwind(), solid(), expressiveCode({
    plugins: [],
    themes: ["github-dark", "github-light"],
    defaultLocale: "ja",
    styleOverrides: {
      codeFontFamily: "jetbrains-mono",
      uiFontFamily: "jetbrains-mono",
    },
    themeCssSelector: (theme) => `[data-theme="${theme.type}"]`
  }), mdx()],
  markdown: {
    remarkPlugins: [resetRemark, remarkDirective, remarkAsides({}), remarkClassadd, remarkBreaks ],
    rehypePlugins: [/* customRehypeLazyLoadImage */],
    remarkRehype: {
      footnoteLabel: "脚注"
    },
  }
});

pluginFramesTexts.overrideTexts("ja", {
  copyButtonTooltip: "クリップボードにコピー",
  copyButtonCopied: "コピーしました",
});