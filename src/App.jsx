import { ThemeProvider } from "@material-tailwind/react";
import { Home, About, Contact, Pricing, Project, Resume, Services, Skill, Testimonials, Footer, Blogs, Exp } from "./Pages"
import React from "react"
function App() {
  return (
    <>
      <ThemeProvider>
        <Home />
        <div className="bg-[#131212] text-white ">
          <About />
          <Resume />
          <Skill />
          <Services />
          <Exp />
          <Project />
          {/* <Pricing/> */}
          <Testimonials />
          <Blogs />
          <Contact />
        </div>

        <Footer />
      </ThemeProvider>
    </>
  )
}

export default App
