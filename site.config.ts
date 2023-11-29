type Config = {
  profile: {
    name: string
    image: string
    role: string
    bio: string
    email: string
    linkedin: string
    github: string
    instagram: string
  }
  projects?: {
    name: string
    href: string
  }[]
  blog: {
    title: string
    description: string
  }
  link: string
  since: number
  lang: string
  ogImageGenerateURL: string
  notionConfig: {
    pageId?: string
  }
  googleAnalytics: {
    enable: boolean
    config: {
      measurementId: string
    }
  }
  googleSearchConsole: {
    enable: boolean
    config: {
      siteVerification: string
    }
  }
  utterances: {
    enable: boolean
    config: {
      repo: string
      "issue-term": string
      label: string
    }
  }
  cusdis: {
    enable: boolean
    config: {
      host: string
      appid: string
    }
  }
  isProd: boolean
  revalidateTime: number
}

export const CONFIG: Config = {
  // profile setting (required)
  profile: {
    name: "alan go",
    image: "/profile.png", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "software engineer / frontend",
    bio: `this is alan's memory palace.\n(alag = alan's log)`,
    email: "tae.gun7784@gmail.com",
    linkedin: "gtg7784",
    github: "gtg7784",
    instagram: "gtg7784",
  },
  // projects: [
  //   {
  //     name: `morethan-log`,
  //     href: "https://github.com/morethanmin/morethan-log",
  //   },
  // ],
  // blog setting (required)
  blog: {
    title: "alag",
    description: "this is alan's memory palace. (alag = alan's log)",
  },

  // CONFIG configration (required)
  link: "https://blog.alango.xyz",
  since: 2023, // If leave this empty, current year will be used.
  lang: "ko-KR", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  // TODO: custom og image
  ogImageGenerateURL: "/", // The link to generate OG image, don't end with a slash 

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: true,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: true,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "Comment",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}


