import './index.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Architecture from './components/Architecture'
import Timeline from './components/Timeline'
import Outcomes from './components/Outcomes'
import Media from './components/Media'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Architecture />
        <Timeline />
        <Outcomes />
        <Media />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
