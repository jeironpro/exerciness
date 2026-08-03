import { Outlet } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import CompareBar from '@/components/common/CompareBar.jsx'
import { useCompareStore, selectCompareCount } from '@/store/compareStore.js'

// Layout principal: navbar, contenido con Outlet, footer y barra de comparación.
export default function Layout() {
  const compareCount = useCompareStore(selectCompareCount)

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className={`flex-1 ${compareCount > 0 ? 'pb-24' : ''}`}>
        <Outlet />
      </main>
      <Footer />
      <CompareBar />
    </div>
  )
}
