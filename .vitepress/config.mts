import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/',
  title: "Asim Thakur",
  description: "AI & Machine Learning Portfolio, Blog & Notes",
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
}