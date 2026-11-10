import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Asim Thakur",
  description: "AI/ML Engineer Portfolio",
  base: '/',
  ignoreDeadLinks: true,
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Asimthakur' }
    ]
  }
})