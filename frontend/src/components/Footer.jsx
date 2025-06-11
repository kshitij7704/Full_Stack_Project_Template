export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 mt-auto py-4">
      <div className="container mx-auto text-center text-sm text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} Kshitij Kashyap • MERN Template • Vite + React + Tailwind
      </div>
    </footer>
  )
}
