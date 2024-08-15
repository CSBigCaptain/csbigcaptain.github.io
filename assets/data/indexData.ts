interface iconLink {
  name: string,
  src: string,
  href: string
}

interface worksCard {
  name: string,
  description: string,
  href: string,
}

const followIcons: iconLink[] = [
  {
    name: "bilibili",
    src: "icons/WelcomePageIcons/bilibili.svg",
    href: "https://space.bilibili.com/606574672",
  },
  {
    name: "github",
    src: "icons/WelcomePageIcons/github.svg",
    href: "https://github.com/csbigcaptain",
  },
  {
    name: "cnblogs",
    src: "icons/WelcomePageIcons/cnblogs.svg",
    href: "https://cnblogs.com/csbig",
  }
]

const works: worksCard[] = [
  {
    name: "Youthol Exhibition",
    description: "",
    href: "https://github.com/ItsDia/youthol-exhibition"
  },
  {
    name: "Captain Word Tester",
    description: "",
    href: "https://github.com/CSBigCaptain/CaptainWordTester",
  }
]


export { followIcons, works }
