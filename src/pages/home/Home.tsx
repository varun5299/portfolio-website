import Skills from "@components/skills/Skills"
import About from "@components/about/About"
import TopButton from "@components/top-button/TopButton"
import {useDocumentTitle} from "@hooks/useDocumentTitle"

const Home = () => {
  useDocumentTitle("Home")
  return (
    <>
      <About />
      <Skills />
      <TopButton />
    </>
  )
}


export default Home
