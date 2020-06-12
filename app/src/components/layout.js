/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

// import Header from "./header"
//import "./layout.css"
import "../fonts/fonts.css"

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

  const [darkMode, setDarkMode] = React.useState(
    localStorage.getItem("darkMode") !== null
      ? localStorage.getItem("darkMode")
      : false
  )
  const changeDarkMode = () => {
    handleChange()
    localStorage.setItem("darkMode", !darkMode)
    setDarkMode(!darkMode)
  }

  return (
    <ThemeProvider theme={theme}>
      <Body>
        <GlobalStyle />
        {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      </Body>
      {location &&
        (location.pathname !== "/404" ||
          location.pathname !== "/comming-soon") && (
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
              <Grid container alignItems="center" justify="center" spacing={1}>
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

              <Typography style={{ color: darkMode ? "#fff" : "#000" }}>
                © {new Date().getFullYear()}, Built with
                {` `}
                <a
                  href="https://www.gatsbyjs.org"
                  style={{
                    color: darkMode ? "#4353ff" : "#0101B6",
                    textDecoration: "none",
                  }}
                >
                  Gatsby
                </a>{" "}
              </Typography>
            </footer>
          </div>
        )}
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
