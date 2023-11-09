import './App.css'
import SectionContext from './components/context/Context'
import Effect from './components/effect/Effect'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Memo from './components/memo/memo'
import ScrollButton from './components/scroll-button'
import State from './components/state/State'

function App() {

  return (
    <>
      <ScrollButton />
      <Header />
      <State id='state' />
      <Effect id='effect' />
      <SectionContext id='context' />
      <Memo id='memo' />
      <Footer />
    </>
  )
}

export default App
