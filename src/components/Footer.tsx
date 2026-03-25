const Footer = () => {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} 个人作品集. All rights reserved.
        </p>
        <p className="text-gray-500 text-sm">
          Built with React + TypeScript + Tailwind CSS
        </p>
      </div>
    </footer>
  )
}

export default Footer
