import './index.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Architecture from './components/Architecture'
import HowToRun from './components/HowToRun'
import Troubleshooting from './components/Troubleshooting'
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
        <HowToRun />
        <Troubleshooting />
        <Media />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
