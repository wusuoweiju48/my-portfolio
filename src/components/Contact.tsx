import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Github, Linkedin, Twitter } from 'lucide-react'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const contacts = [
    {
      icon: Mail,
      label: '邮箱',
      value: 'your.email@example.com',
      href: 'mailto:your.email@example.com'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/yourname',
      href: 'https://github.com'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/yourname',
      href: 'https://linkedin.com'
    },
    {
      icon: Twitter,
      label: 'Twitter',
      value: '@yourname',
      href: 'https://twitter.com'
    }
  ]

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              联系方式
            </span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            有项目想法或合作机会？欢迎随时联系我！
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {contacts.map((contact, index) => (
              <motion.a
                key={contact.label}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-4 p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors group"
              >
                <div className="p-3 bg-gray-700 rounded-lg group-hover:bg-gray-600 transition-colors">
                  <contact.icon size={24} className="text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">{contact.label}</p>
                  <p className="text-white font-medium">{contact.value}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
