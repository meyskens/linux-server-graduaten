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
          { text: "UFW", link: "/security/ufw/" },
        ],
      },
      {
        text: "LEMP",
        icon: "fab fa-php",
        items: [
          { text: "Intro", link: "/lemp/" },
          { text: "NGINX", link: "/lemp/nginx/" },
          { text: "MariaDB", link: "/lemp/mariadb/" },
          { text: "PHP", link: "/lemp/php/" },
          { text: "WordPress", link: "/lemp/wordpress/" },
          { text: "Loadtesting", link: "/lemp/loadtesting/" },
        ],
      },
      {
        text: "Services",
        icon: "fas fa-server",
        link: "#",
        items: [
          { text: "Systemd", link: "/services/systemd/" },
          { text: "FTP", link: "/services/ftp/" },
        ],
      },
      {
        text: "Docker",
        icon: "fab fa-docker",
        items: [
          { text: "Docker", link: "/docker/docker/" },
          { text: "Docker Compose", link: "/docker/compose/" },
        ],
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

    git: {
      contributor: true,
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
