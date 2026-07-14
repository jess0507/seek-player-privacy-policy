import { useEffect } from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import PrivacyPolicy from './pages/PrivacyPolicy'

const tabClass = ({ isActive }: { isActive: boolean }) =>
  `px-4 py-3 text-sm font-semibold border-b-2 transition-colors ${
    isActive
      ? 'border-green-500 text-green-600'
      : 'border-transparent text-gray-500 hover:text-gray-800 hover:border-gray-300'
  }`

// 靜態頁(Firebase Hosting 直接服務)在開發模式下的轉址備援;
// 正式環境由 hosting 的 cleanUrls 先攔截,不會走到這裡。
function StaticRedirect({ to }: { to: string }) {
  useEffect(() => {
    window.location.replace(to)
  }, [to])
  return null
}

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 via-sky-50 to-rose-50 text-gray-900">
      <header className="bg-white/80 shadow-sm backdrop-blur">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-2 pt-4">
            <img src="/app_logo_icon.png" alt="" className="h-8 w-8" />
            <h1 className="text-xl font-extrabold tracking-tight">Lyrics Player</h1>
          </div>
          <nav className="mt-2 flex gap-2">
            <NavLink to="/" end className={tabClass}>
              Home
            </NavLink>
            <NavLink to="/privacy-policy" className={tabClass}>
              Privacy Policy
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/delete-account" element={<StaticRedirect to="/delete-account.html" />} />
          <Route path="/delete-data" element={<StaticRedirect to="/delete-data.html" />} />
        </Routes>
      </main>

      <footer className="py-8 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Lyrics Player
      </footer>
    </div>
  )
}
