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
    title: '一言爬虫',
    description: '使用 Python + urllib 开发的爬虫程序，可以抓取一言 API 的金句并保存到本地文件。支持异常处理和循环抓取。',
    image: '/project1.jpg',
    technologies: ['Python', 'urllib', 'JSON'],
    link: '#',
    github: 'https://github.com/yourname/yiyan-spider'
  },
  {
    id: 2,
    title: '上海地铁站点爬虫',
    description: '使用 requests_html + pandas 爬取上海地铁所有线路站点数据，并导出为 Excel 文件。包含完整的异常处理机制。',
    image: '/project2.jpg',
    technologies: ['Python', 'requests_html', 'pandas', 'Excel'],
    link: '#',
    github: 'https://github.com/yourname/shanghai-subway'
  },
  {
    id: 3,
    title: '图像处理工具',
    description: '使用 OpenCV 进行图像增强和傅里叶变换，支持直方图均衡化和频谱分析，可保存处理结果。',
    image: '/project3.jpg',
    technologies: ['Python', 'OpenCV', 'NumPy', 'Matplotlib'],
    link: '#',
    github: 'https://github.com/yourname/image-processing'
  }
]
