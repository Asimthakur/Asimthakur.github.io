import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Asim Thakur",
  description: "AI/ML Engineer Portfolio",
  base: '/',
  ignoreDeadLinks: true,
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog', link: '/blog/' },
      { text: 'Notes', link: '/notes/' },
      { text: 'Projects', link: '/projects/' },
      { text: 'Reflect Back', link: '/reflect-back/' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Asimthakur' }
    ]
  }
})