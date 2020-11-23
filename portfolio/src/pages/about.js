import React from "react"

import "../styles/styles.scss"
import SEO from "../components/seo"
import Header from "../components/header"

const About = () => {
  return (
    <div className="container">
      <SEO title="About" />
      <Header />
      <h1>About me</h1>
    </div>
    )
}


export default About