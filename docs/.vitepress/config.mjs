import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'nusireti',
  description: 'AI应用开发 · 个人作品集',
  lang: 'zh-CN',
  base: '/nusireti-site/',
  themeConfig: {
    logo: '🦝',
    siteTitle: 'nusireti',
    nav: [
      { text: '首页', link: '/' },
      { text: '项目', link: '/projects/' },
      { text: '笔记', link: '/notes/' },
      { text: '关于', link: '/about' },
    ],
    sidebar: {
      '/projects/': [
        {
          text: '项目',
          items: [
            { text: 'RAG 智能知识库', link: '/projects/rag-knowledge-base' },
          ],
        },
      ],
      '/notes/': [
        {
          text: 'AI 学习笔记',
          items: [
            { text: 'AI For Everyone 精华', link: '/notes/ai-for-everyone' },
            { text: '吴恩达课程全览', link: '/notes/courses' },
          ],
        },
      ],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/nusireti' },
    ],
    footer: {
      message: 'Built with VitePress · 🦝 nusireti',
    },
  },
})
