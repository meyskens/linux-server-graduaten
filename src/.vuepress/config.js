const { config } = require("vuepress-theme-hope");

module.exports = config({
  title: "Linux Server",
  description: "Cursus Linux Server IT Graduaten Thomas More",

  dest: "./dist",

  head: [
    [
      "script",
      { src: "https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" },
    ],
    [
      "script",
      {
        src: "https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js",
      },
    ],
    ["script", { src: "https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js" }],
    [
      "script",
      { src: "https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js" },
    ],
  ],

  locales: {
    "/": {
      lang: "en-US",
    },
  },

  themeConfig: {
    logo: "/tux.svg",
    hostname: "https://linux.maartje.dev",

    author: "CC-BY-SA Maartje Eyskens @ Thomas More Kempen",
    //repo: "https://github.com/meyskens/linux-server-graduaten",

    iconPrefix: "",

    nav: [
      { text: "Home", link: "/", icon: "fas fa-home" },
      { text: "Intro", link: "/intro/", icon: "fab fa-linux" },
      {
        text: "SSH",
        icon: "fas fa-terminal",
        link: "/ssh/",
      },
      {
        text: "Security",
        icon: "fas fa-shield-alt",
        link: "#",
        items: [
          { text: "Passwords", link: "/security/passwords/" },
          { text: "SSH Keys", link: "/security/ssh-keys/" },
        ],
      },
      {
        text: "LEMP",
        icon: "fab fa-php",
        link: "/lemp/",
      },
      {
        text: "Canvas LMS",
        link: "https://thomasmore.instructure.com/courses/21437",
        icon: "fas fa-book",
      },
    ],

    sidebar: "auto",
    anchorDisplay: false,
    footer: {
      display: false,
      content: "",
    },

    copyright: {
      status: "local",
    },

    git: {
      timezone: "Europe/Brussels",
    },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: [
          "highlight",
          "math",
          "search",
          "notes",
          "zoom",
          "anything",
          "audio",
          "chalkboard",
        ],
      },
    },
  },
});
