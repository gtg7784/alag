export type Config = {
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