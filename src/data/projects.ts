export interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  link: string
  github?: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: '待办事项应用',
    description: '使用原生 HTML + CSS + JavaScript 开发的待办事项应用，支持添加、完成、删除任务，数据保存在浏览器本地存储，界面简洁现代，响应式设计支持移动端。',
    image: '/project1.jpg',
    technologies: ['HTML', 'CSS', 'JavaScript', 'LocalStorage'],
    link: 'https://wusuoweiju48.github.io/todo-app/',
    github: 'https://github.com/wusuoweiju48/todo-app'
  },
  {
    id: 2,
    title: '一言爬虫',
    description: '使用 Python + urllib 开发的爬虫程序，可以抓取一言 API 的金句并保存到本地文件。支持异常处理和循环抓取。',
    image: '/project2.jpg',
    technologies: ['Python', 'urllib', 'JSON'],
    link: '#',
    github: 'https://github.com/wusuoweiju48/yiyan-spider'
  },
  {
    id: 3,
    title: '上海地铁站点爬虫',
    description: '使用 requests_html + pandas 爬取上海地铁所有线路站点数据，并导出为 Excel 文件。包含完整的异常处理机制。',
    image: '/project3.jpg',
    technologies: ['Python', 'requests_html', 'pandas', 'Excel'],
    link: '#',
    github: 'https://github.com/wusuoweiju48/shanghai-subway'
  }
]
