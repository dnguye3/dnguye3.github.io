import React from "react"

import "../styles/styles.scss"
import SEO from "../components/seo"
import Header from "../components/header"
import ProjectsPortfolio from "../components/projectsPortfolio"

const Projects = () => {
  return (
      <div>
          <SEO title="Projects" />
          <Header />
          <ProjectsPortfolio />
      </div>
    )
}


export default Projects
