import React from "react"
import "../styles/styles.scss"

// Component Imports
import Header from "../components/header"
import HomePageText from "../components/homePageText"
import SEO from "../components/seo"



const IndexPage = () => (
    <div>
      <SEO title="Home" />
      <Header />
      <HomePageText />
    </div>
)

export default IndexPage
