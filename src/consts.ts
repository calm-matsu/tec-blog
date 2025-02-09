// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

/**
 * title {string} website title
 * favicon {string} website favicon url
 * description {string} website description
 * author {string} author
 * avatar {string} Avatar used in the profile
 * motto {string} used in the profile
 * url {string} Website link
 * recentBlogSize {number} Number of recent articles displayed in the sidebar
 * archivePageSize {number} Number of articles on archive pages
 * postPageSize {number} Number of articles on blog pages
 * feedPageSize {number} Number of articles on feed pages
 * beian {string} Chinese policy
 */
export const site = {
  title: 'revo-Labo', // required
  favicon: '/favicon.svg', // required
  description: '主に技術情報をまとめています。',
  author: "calm-matsu", // required
  avatar: '/charatsukuai.jpg', // required
  motto: '主に技術情報をまとめています。',
  url: 'https://revo-labo.pages.dev',
  recentBlogSize: 5,
  archivePageSize: 25,
  postPageSize: 10,
  feedPageSize: 20,
  beian: '',
}

/**
 * busuanzi {boolean} link: https://busuanzi.ibruce.info/
 * lang {string} Default website language
 * codeFoldingStartLines {number}
 * ga {string|false}
 */
export const config = {
  busuanzi: false,
  lang: 'ja', // en | zh-cn
  codeFoldingStartLines: 16, // Need to re-run the project to take effect
  ga: false // If you want to integrate with Google Analytics, just enter your GA-ID here.
}

/**
 * Navigator
 * name {string}
 * iconClass {string} icon style
 * href {string}  link url
 * target {string} optional "_self|_blank" open in current window / open in new window
 */
export const mainMenu = [
  {
    name: "Archive",
    iconClass: "ri-archive-line",
    href: "/archive/",
    target:'',
    children:[],
  },
  {
    name: "Search",
    iconClass: "ri-search-line",
    href: "/search/",
    target:'',
    children:[],
  },
  {
    name: 'About',
    iconClass: 'ri-information-line',
    href: '/about/',
    target:'',
    children:[],
  },
]

export const subMenu = [
  {
    name: "トップ",
    href: "/",
  },
  {
    name: "お問い合わせ",
    href: "/contact/",
  },
  {
    name: 'プライバシーポリシー',
    href: '/privacy/',
  },
  {
    name: 'サイトマップ',
    href: '/sitemap/',
  },
]

export const categories = [
  {
    name: "技術",
    slug: "tec",
  },
  {
    name: "未整理",
    slug: "uncategorized",
  },
]

/**
 * Personal link address
 */
export const infoLinks = [
/* 
  {
    icon: 'ri-twitter-x-fill',
    name: 'twitter',
    outlink: 'https://twitter.com/',
  },
  {
    icon: 'ri-mastodon-fill',
    name: 'mastodon',
    outlink: 'https://mstdn.jp/',
  },
 */
  {
    icon: 'ri-github-fill',
    name: 'github',
    outlink: 'https://github.com/calm-matsu',
  },
  {
    icon: 'ri-rss-fill',
    name: 'rss',
    outlink: site.url+'/rss.xml',
  }
]

export const usedIcons = {
  date: 'ri-calendar-2-fill',
  update: 'ri-reset-right-line',
  category: 'ri-folder-line',
  tag: 'ri-price-tag-3-line',
  draft: 'ri-draft-line',
}

/**
 * donate
 * enable {boolean}
 * tip {string}
 * wechatQRCode: Image addresses should be placed in the public directory.
 * alipayQRCode: Image addresses should be placed in the public directory.
 * paypalUrl {string}
 */
export const donate = {
  enable: false,
  tip: "Thanks for the coffee !!!☕",
  wechatQRCode: "/WeChatQR.png",
  alipayQRCode: "/AliPayQR.png",
  paypalUrl: "https://paypal.me/xxxxxxxxxx",
}

/**
 * Friendship Links Page
 * name {string}
 * url {string}
 * avatar {string}
 * description {string}
 */
export const friendshipLinks =
  [
    // {
    //   name: "Cirry's Blog",
    //   url: 'https://cirry.cn',
    //   avatar: "https://cirry.cn/avatar.png",
    //   description: '前端开发的日常'
    // },
  ]

/**
 * Comment Feature
 * enable {boolean}
 * type {string} required waline | giscus
 * walineConfig.serverUrl {string} server link
 * walineConfig.lang {string} link: https://waline.js.org/guide/features/i18n.html
 * walineConfig.pageSize {number} number of comments per page. default 10
 * walineConfig.wordLimit {number} Comment word s limit. When a single number is filled in, it 's the maximum number of comment words. No limit when set to 0
 * walineConfig.count {number} recent comment numbers
 * walineConfig.pageview {boolean} display the number of page views and comments of the article
 * walineConfig.reaction {string | string[]} Add emoji interaction function to the article
 * walineConfig.requiredMeta {string[]}  Set required fields, default anonymous
 * walineConfig.whiteList {string[]} set some pages not to display reaction
 */
export const comment = {
  enable: false,
  type: 'giscus', // waline | giscus,
  walineConfig:{
    serverUrl: "https://xxxxx.xxxxx.app",
    lang: 'en',
    pageSize: 20,
    wordLimit: '',
    count: 5,
    pageview: true,
    reaction: true,
    requiredMeta: ["nick", "mail"],
    whiteList: ['/message/', '/friends/'],
  },

  // giscus config
  giscusConfig: {
    'data-repo': "xxxxxxx",
    'data-repo-id': "xxxxxx",
    'data-category': "Announcements",
    'data-category-id': "xxxxxxxxx",
    'data-mapping': "pathname",
    'data-strict': "0",
    'data-reactions-enabled': "1",
    'data-emit-metadata': "0",
    'data-input-position': "bottom",
    'data-theme': "light",
    'data-lang': "xxxxxxxxxxx",
    'crossorigin': "anonymous",
  }
}
