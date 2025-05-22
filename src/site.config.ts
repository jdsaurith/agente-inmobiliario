import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  // Used as both a meta property (src/components/BaseHead.astro L:31 + L:49) & the generated satori png (src/pages/og-image/[slug].png.ts)
  author: "Agente Inmobiliario",
  // Date.prototype.toLocaleDateString() parameters, found in src/utils/date.ts.
  date: {
    locale: "es-ES",
    options: {
      day: "numeric",
      month: "short",
      year: "numeric",
    },
  },
  // Used as the default description meta property and webmanifest description
  description:
    "Publicá tus propiedades en varios portales al mismo tiempo, desde una sola plataforma simple y eficiente.",
  // HTML lang property, found in src/layouts/Base.astro L:18 & astro.config.ts L:48
  lang: "es-ES",
  // Meta property, found in src/components/BaseHead.astro L:42
  ogLocale: "es_ES",
  // Used to construct the meta title property found in src/components/BaseHead.astro L:11, and webmanifest name found in astro.config.ts L:42
  title: "Agente Inmobiliario",
};

// Used to generate links in both the Header & Footer.
export const menuLinks: { path: string; title: string }[] = [
  {
    path: "/",
    title: "Inicio",
  },
  {
    path: "/guiarapida/",
    title: "Guía Rápida",
  },
  {
    path: "/agente/",
    title: "Agente",
  },
];
