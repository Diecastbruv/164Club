import { useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Nav from './components/Nav'
import Cursor from './components/Cursor'
import Footer from './components/Footer'
import Loader from './components/Loader'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Story from './pages/Story'
import Contact from './pages/Contact'

export default function App() {
  const location = useLocation()
  const [loaded, setLoaded] = useState(false)

  return (
    <div className="grain">
      <Cursor />
      <Loader onDone={() => setLoaded(true)} />
      {loaded && (
        <>
          <Nav />
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/story" element={<Story />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
          <Footer />
        </>
      )}
    </div>
  )
}
