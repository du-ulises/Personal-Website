/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { motion, AnimatePresence } from "framer-motion"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

// import Header from "./header"
//import "./layout.css"
import "../fonts/fonts.css"
import "../css/neon.css"

import { createMuiTheme } from "@material-ui/core/styles"
import { ThemeProvider } from "@material-ui/styles"
import { Typography, Grid } from "@material-ui/core"

import styled, { createGlobalStyle } from "styled-components"

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#01579b",
      main: "#01579b",
      dark: "#880e4f",
    },
    secondary: {
      light: "#2196f3",
      main: "#2196f3",
      dark: "#2196f3",
    },
    type: "dark",
    background: {
      default: "#101010",
    },
  },
  typography: {
    fontFamily: [
      "Acrom Medium",
      "MADE Evolve Sans Bold EVO",
      "MADE Evolve Sans Light EVO",
      "MADE Evolve Sans Medium EVO",
      "MADE Evolve Sans Regular EVO",
      "MADE Evolve Sans Thin EVO",
      "Acrom ExtraBold",
      "Acrom Light",
      "Acrom Regular",
      "Acrom Thin",
    ].join(","),
  },
})

const GlobalStyle = createGlobalStyle`
  html {
    max-width: 100vw;
    overflow-x: hidden;
  }
`

const Body = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  width: 100vw;
  img {
    margin-bottom: 0;
  }
`

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 1.5, duration: 1.5 },
  },
  exit: {
    x: "-100vh",
    transition: { ease: "easeInOut" },
  },
}

const duration = 0.5

const variants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: duration,
      delay: duration,
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: duration },
  },
}

const Layout = ({ location, children, handleChange }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  const [darkMode, setDarkMode] = useState(false)
  const changeDarkMode = () => {
    handleChange()
    localStorage.setItem("darkMode", !darkMode)
    setDarkMode(!darkMode)
  }

  useEffect(() => {
    setDarkMode(
      localStorage.getItem("darkMode") !== null
        ? localStorage.getItem("darkMode")
        : false
    )
  }, [])

  const images = useStaticQuery(graphql`
    query {
      DeerDark: file(relativePath: { eq: "DeerDark.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      DeerLight: file(relativePath: { eq: "DeerLight.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const [environment, setEnvironment] = useState({ language: "EN" })
  const languages = ["EN", "|", "ES"]
  const handleChangueLanguage = language => {
    setEnvironment({ ...environment, language })
  }

  
  return (
    <ThemeProvider theme={theme}>
      <Body>
        <GlobalStyle />
      </Body>

      <AnimatePresence>
        <motion.main
          key={location?.pathname}
          variants={variants}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          {location &&
            (location?.pathname !== "/404" ||
              location?.pathname !== "/comming-soon") && (
              <>
                <div
                  style={{
                    margin: `0 auto`,
                    maxWidth: 960,
                    padding: `0 1.0875rem 1.45rem`,
                  }}
                >
                  <main>{children}</main>
                  <footer
                    style={{
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    <motion.div
                      className="home container"
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      <AnimatePresence>
                        {darkMode ? (
                          <Img
                            imgStyle={{ objectFit: "contain" }}
                            style={{ margin: "1rem", maxHeight: "50px" }}
                            fluid={images.DeerLight.childImageSharp.fluid}
                          />
                        ) : (
                          <Img
                            imgStyle={{ objectFit: "contain" }}
                            style={{ margin: "1rem", maxHeight: "50px" }}
                            fluid={images.DeerDark.childImageSharp.fluid}
                          />
                        )}
                      </AnimatePresence>
                    </motion.div>
                    <Grid
                      container
                      alignItems="center"
                      justify="center"
                      spacing={1}
                    >
                      {languages.map(language => {
                        let spanClass =
                          environment.language === language ? "active" : ""
                        return (
                          <motion.li
                            key={language}
                            onClick={() => {
                              if (language !== "|") {
                                handleChangueLanguage(language)
                              }
                            }}
                            whileHover={{
                              scale: 1.2,
                              originX: 0,
                              color: "#1779ff",
                            }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <span
                              className={spanClass}
                              style={{
                                color:
                                  environment.language === language
                                    ? darkMode
                                      ? "#4353ff"
                                      : "#0101B6"
                                    : darkMode
                                    ? "#fff"
                                    : "#000",
                              }}
                            >
                              <Typography
                                style={{
                                  marginBottom: 5,
                                  color:
                                    environment.language === language
                                      ? darkMode
                                        ? "#4353ff"
                                        : "#0101B6"
                                      : darkMode
                                      ? "#fff"
                                      : "#000",
                                  display: "inline",
                                }}
                              >
                                {language}
                              </Typography>
                            </span>
                          </motion.li>
                        )
                      })}
                    </Grid>

                    <Grid
                      container
                      alignItems="center"
                      justify="center"
                      spacing={1}
                    >
                      <Grid item>
                        <Typography
                          style={{
                            marginBottom: 5,
                            color: darkMode ? "#fff" : "#000",
                          }}
                        >
                          Night mode
                        </Typography>
                      </Grid>
                      <Grid item>
                        <label>
                          <input
                            type="checkbox"
                            checked={darkMode}
                            onChange={changeDarkMode}
                          />
                          <span class="check"></span>
                        </label>
                      </Grid>
                    </Grid>
                  </footer>
                </div>
                <div className="banner">
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      margin: 24
                    }}
                  >
                    <Typography
                      style={{
                        color: darkMode ? "#fff" : "#000",
                        textAlign: "center",
                        letterSpacing: 1.2,
                        fontFamily: "MADE Evolve Sans Medium EVO",
                      }}
                    >
                      Frontend Web & Mobile Developer + UX / UI Designer
                    </Typography>
                  </div>
                  <div id="deer-footer" style={{position: "absolute", bottom: 0, width: "200px", height: "200px"}}>
                  {darkMode ? (
                          <Img
                            imgStyle={{ objectFit: "contain" }}
                            style={{ margin: "1rem", maxHeight: "500px" }}
                            fluid={images.DeerLight.childImageSharp.fluid}
                          />
                        ) : (
                          <Img
                            imgStyle={{ objectFit: "contain" }}
                            style={{ margin: "1rem", maxHeight: "500px" }}
                            fluid={images.DeerDark.childImageSharp.fluid}
                          />
                        )}
                  </div>
                  <h1
                    id="text"
                    style={{
                      color: darkMode ? "#fff" : "#000",
                    }}
                  >
                    DUMA
                  </h1>
                  <div className="clouds">
                    <img src="/clouds/cloud1.png" className="st1" />
                    <img src="/clouds/cloud2.png" className="st2" />
                    <img src="/clouds/cloud3.png" className="st3" />
                    <img src="/clouds/cloud4.png" className="st4" />
                    <img src="/clouds/cloud5.png" className="st5" />
                    <img src="/clouds/cloud1.png" className="st10" />
                    <img src="/clouds/cloud2.png" className="st9" />
                    <img src="/clouds/cloud3.png" className="st8" />
                    <img src="/clouds/cloud4.png" className="st7" />
                    <img src="/clouds/cloud5.png" className="st6" />
                  </div>
                  <div className="copyright">
                    <Typography style={{ color: darkMode ? "#fff" : "#000" }}>
                      © {new Date().getFullYear()}, Built with
                      {` `}
                      <a
                        href="https://www.gatsbyjs.org"
                        style={{
                          color: darkMode ? "#1779ff" : "#4353ff",
                          textDecoration: "none",
                        }}
                      >
                        Gatsby
                      </a>{" "}
                    </Typography>
                  </div>

                  <Typography
                    style={{ position: "absolute", bottom: "10px", zIndex: 2 }}
                  >
                    #BoostYourBrand
                  </Typography>
                </div>
              </>
            )}
        </motion.main>
      </AnimatePresence>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
