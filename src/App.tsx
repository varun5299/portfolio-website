import { BrowserRouter, Routes, Route } from "react-router-dom"
import BaseLayout from "@components/layouts/BaseLayout"
import Home from "@pages/home/Home"
import Education from "@pages/education/Education"
import Experience from "@pages/experience/Experience"
import Projects from "@pages/project/Projects"
import Blog from "@pages/blog/Blog"
import Contact from "@pages/contact/Contact"

const App = () => {
  return (
    <BrowserRouter>
      <BaseLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BaseLayout>
    </BrowserRouter>
  )
}

export default App
