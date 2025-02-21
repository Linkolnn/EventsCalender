import { resolve } from "path";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  modules: ['@nuxt/icon'],
  devtools: { enabled: true },
  alias: {
    '@components': resolve(__dirname, './components'),
    '@services': resolve(__dirname, './services'),
    '@color': resolve(__dirname, './const/color.sass'),
    '@global': resolve(__dirname, './const/global.sass'), 
    '@mixin': resolve(__dirname, './const/mixin.sass'),
    '@fonts': resolve(__dirname, './const/fonts.sass'),
  },
  svgo: {
    autoImportPath: "./assets/icons/",
    componentPrefix: "Icon",
  },
  css: ['@/const/global.sass'],
  runtimeConfig: {
    public: {
      salt: '1jkashdgo871godl71982569381o67toadg78108-98sjf98weye278'
    }
  },
  modules: ['@nuxt/icon', 'nuxt-svgo'],
  icon: {
    customCollections: [
      {
        prefix: 'icon',
        dir: '/public/assets/'
      },
    ],
  },
  app: {
    head: {
      link: [
        {
            rel: 'icon',
            type: 'image/svg+xml',
            href: 'assets/icons/LogoDark.svg',
            media: '(prefers-color-scheme: light)'
          },
          {
            rel: 'icon',
            type: 'image/svg+xml',
            href: '/assets/icons/LogoLight.svg',
            media: '(prefers-color-scheme: dark)'
          },
      ]
    }
  },

  fonts: {
      provider: "local",
      defaults: {
          weights: [300, 400, 500, 700, 900],
      },
      families: [
          {
              name: "Source-Sans-3",
              src: [
                  {url: "/fonts/SourceSans3-Black.ttf", format: "'truetype'"},
              ],
              global: true,
              weight: "900",
              style: 'normal'
          },
          {
              name: "Source-Sans-3",
              src: [
                  {url: "/fonts/SourceSans3-Bold.ttf", format: "'truetype'"},
              ],
              global: true,
              weight: "700",
              style: 'normal'
          },
          {
              name: "Source-Sans-3",
              src: [
                  {url: "/fonts/SourceSans3-Medium.ttf", format: "'truetype'"},
              ],
              global: true,
              weight: "500",
              style: 'normal'
          },
          {
              name: "Source-Sans-3",
              src: [
                  {url: "/fonts/SourceSans3-Regular.ttf", format: "'truetype'"},
              ],
              global: true,
              weight: "400",
              style: 'normal'
          },
          {
              name: "Source-Sans-3",
              src: [
                  {url: "/fonts/SourceSans3-Light.ttf", format: "'truetype'"},
              ],
              global: true,
              weight: "300",
              style: 'normal'
          },
      ],
  },
})