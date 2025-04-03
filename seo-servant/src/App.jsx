import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import MainLayout from './layouts/MainLayout'
import Home from './components/Home'
import Tools from './components/Tools'
import Contact from './components/Contact'
import ToolsLayout from './layouts/ToolsLayout'
import Converter from './components/Converter'
import Counter from './components/Counter'
import Error from './components/Error'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />}/>
          <Route path="home" element={<Home />}/>
          <Route path="tools" element={<Tools />}/>
          <Route path="contact" element={<Contact />}/>
        </Route>
        <Route path="/tools" element={<ToolsLayout />}>
          <Route path="converter" element={<Converter />}/>
          <Route path="counter" element={<Counter />}/>
        </Route>
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  )
}

export default App
