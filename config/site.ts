// Base URL configuration as const
export const BASE_URL = {
  SITE: "https://boltstorage.com",
  API: "https://api.boltstorage.com",
  DASHBOARD: "https://app.boltstorage.com",
  ASSETS: "https://assets.boltstorage.com",
} as const;

export const siteConfig = {
  name: "BoltStorage",
  description: "Lightning Fast Cloud Storage",
  url: BASE_URL.SITE,
  ogImage: getOgImageUrl({ title: "BoltStorage", mode: "dark" }),
  links: {
    dashboard: BASE_URL.DASHBOARD,
    social: {
      twitter: "https://twitter.com/boltstorage",
      github: "https://github.com/boltstorage",
      linkedin: "https://linkedin.com/company/boltstorage",
    },
  },
  creator: "@boltstorage",
  keywords: [
    "BoltStorage",
    "Cloud Storage",
    "File Sharing",
    "Data Storage",
    "Backup",
    "Sync",
    "Secure Storage",
    "Fast Storage",
    "Enterprise Storage",
  ] as string[], // Fix readonly array issue
  authors: [
    {
      name: "BoltStorage Team",
      url: `${BASE_URL.SITE}/team`,
    },
  ] as const,
  brandColors: [
    { value: "#050a30", label: "Navy", description: "Primary brand color" },
    {
      value: "#3b82f6",
      label: "Bolt Blue",
      description: "Primary accent",
    },
    { value: "#f2efeb", label: "Cream", description: "Light backgrounds" },
    { value: "#10b981", label: "Emerald", description: "Success accent" },
  ],
  aspectRatios: [
    // Common & Social Media Ratios
    {
      id: "square",
      label: "Square",
      description: "1:1 Format",
      ratio: 1,
      category: "common",
    },
    {
      id: "portrait-4-5",
      label: "4:5",
      description: "Portrait Format",
      ratio: 0.8, // 4:5
      category: "common",
    },
    {
      id: "portrait-9-16",
      label: "9:16",
      description: "Mobile/Story Format",
      ratio: 9 / 16,
      category: "common",
    },
    {
      id: "landscape-16-9",
      label: "16:9",
      description: "Widescreen Format",
      ratio: 16 / 9,
      category: "common",
    },
    {
      id: "twitter",
      label: "1.91:1",
      description: "Twitter Card Format",
      ratio: 1.91,
      category: "common",
    },
    {
      id: "portrait-2-3",
      label: "2:3",
      description: "Portrait Format",
      ratio: 2 / 3,
      category: "common",
    },
    {
      id: "portrait-3-4",
      label: "3:4",
      description: "Portrait Format",
      ratio: 3 / 4,
      category: "common",
    },
    {
      id: "landscape-4-3",
      label: "4:3",
      description: "Classic Format",
      ratio: 4 / 3,
      category: "common",
    },
    {
      id: "landscape-5-4",
      label: "5:4",
      description: "Photo Format",
      ratio: 5 / 4,
      category: "common",
    },
    {
      id: "landscape-16-10",
      label: "16:10",
      description: "Display Format",
      ratio: 16 / 10,
      category: "common",
    },
    {
      id: "cinema-21-9",
      label: "21:9",
      description: "Ultrawide Format",
      ratio: 21 / 9,
      category: "common",
    },
  ],
  urls: {
    base: BASE_URL.SITE,
    assets: {
      images: `${BASE_URL.ASSETS}/images`,
      fonts: `${BASE_URL.ASSETS}/fonts`,
      icons: `${BASE_URL.ASSETS}/icons`,
    },
    api: {
      base: BASE_URL.API,
      endpoints: {
        contact: "/contact",
        subscribe: "/subscribe",
      },
    },
    social: {
      twitter: "https://twitter.com/boltstorage",
      github: "https://github.com/boltstorage",
      linkedin: "https://linkedin.com/company/boltstorage",
    },
    legal: {
      privacy: "/privacy",
      terms: "/terms",
      cookies: "/cookies",
    },
  },
} as const;

// Helper functions
export function getUrl(path: string): string {
  return `${BASE_URL.SITE}${path}`;
}

export function getAssetUrl(path: string): string {
  return `${BASE_URL.ASSETS}${path}`;
}

export function getApiUrl(endpoint: string): string {
  return `${BASE_URL.API}${endpoint}`;
}

export function getOgImageUrl(params: {
  title?: string;
  mode?: "light" | "dark";
  type?: "default" | "blog" | "product";
}): string {
  const url = new URL(`${BASE_URL.SITE}/api/og`);
  if (params.title) url.searchParams.set("title", params.title);
  if (params.mode) url.searchParams.set("mode", params.mode);
  if (params.type) url.searchParams.set("type", params.type);
  return url.toString();
}

export type SiteConfig = typeof siteConfig;
