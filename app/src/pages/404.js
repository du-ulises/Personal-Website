import React, { useEffect } from "react"
import { Link } from "gatsby"
// import { navigate } from "gatsby"
// import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroText from "../components/heroText"
import "../css/neon.css"
import { useTheme } from "@material-ui/core/styles"

const NotFoundPage = props => {
  const [darkMode, setDarkMode] = React.useState(false)

  const theme = useTheme()
  var windowWidth = 0
  var breakpointWidth = theme.breakpoints.values.md
  var isSmallScreen = false

  useEffect(() => {
    setDarkMode(
      localStorage.getItem("darkMode") !== null
        ? localStorage.getItem("darkMode")
        : false
    )
    windowWidth = window.innerWidth
    isSmallScreen = windowWidth < breakpointWidth
  }, [])

  return (
    <Layout
      location={props.location}
      handleChange={() => {
        setDarkMode(!darkMode)
      }}
    >
      <SEO title="404: Not found" />
      <Link
        to="/"
        id="neonButton"
        style={{
          fontFamily: "MADE Evolve Sans Medium EVO",
          position: "absolute",
          bottom: isSmallScreen ? "25%" : "35%",
          left: "20%",
        }}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Return To Home Page
      </Link>

      {/* <HomeButton opaque light onClick={() => navigate("/")}>
        Return To Home Page
      </HomeButton> */}
      <HeroText darkMode={darkMode} text="404 Page Not Found" />
      {/* <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p> */}
    </Layout>
  )
}

export default NotFoundPage
