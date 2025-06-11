import { useContext } from 'react'
import { Sun, Moon, Menu } from 'lucide-react'
import { ThemeContext } from '../context/ThemeContext'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const { theme, toggle } = useContext(ThemeContext)

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link to="/" className="text-xl font-bold text-blue-600 dark:text-blue-400">
          MERN Template
        </Link>
        <ul className="hidden md:flex space-x-6">
          <li><Link to="/" className="hover:text-blue-500 dark:hover:text-blue-300">Home</Link></li>
          <li><Link to="/dashboard" className="hover:text-blue-500 dark:hover:text-blue-300">Dashboard</Link></li>
          <li><Link to="/about" className="hover:text-blue-500 dark:hover:text-blue-300">About</Link></li>
        </ul>
        <div className="flex items-center space-x-4">
          <button onClick={toggle} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <button className="md:hidden p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </nav>
  )
}
