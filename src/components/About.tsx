import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skills = [
    'React', 'TypeScript', 'Tailwind CSS', 'Node.js',
    'Python', 'Git', 'Figma', 'Next.js'
  ]

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              关于我
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <p className="text-gray-400 leading-relaxed">
                我是一名充满热情的全栈开发者，专注于创建美观且功能强大的Web应用。
                我相信好的代码不仅要能运行，还要易于维护和理解。
              </p>
              <p className="text-gray-400 leading-relaxed">
                在空闲时间，我喜欢学习新技术、参与开源项目，
                并通过写技术博客分享我的学习心得。
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">技能栈</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-gray-800 rounded-full text-sm text-gray-300 hover:bg-gray-700 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
