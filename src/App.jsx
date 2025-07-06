import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import ProjectsPage from "./pages/Projects"
import Contact from "./pages/Contact"
import NotFound from "./pages/NotFound"


function App() {

  return (
   <BrowserRouter>
   <Routes>
    <Route index element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/projects" element={<ProjectsPage/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="*" element={<NotFound/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App
