import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Asim Thakur",
  description: "AI/ML Engineer Portfolio",
  base: '/',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Projects', link: '/projects/' },
      { text: 'Blog', link: '/blog/' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Asimthakur' }
    ]
  }
})