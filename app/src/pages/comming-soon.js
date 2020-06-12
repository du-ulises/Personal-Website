import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroText from "../components/heroText"
import "../css/neon.css"
import { useTheme, makeStyles } from "@material-ui/core/styles"
import Flock from "../components/flocking"

const useStyles = makeStyles((theme) => ({
  page: {
    overflowY: "hidden",
    overflowX: "hidden",
    height: "100vh",
    position: "fixed",
  }
}));

const CoomingSoon = props => {
  const classes = useStyles();
  const theme = useTheme()
  var windowWidth = window.innerWidth
  var breakpointWidth = theme.breakpoints.values.md
  var isSmallScreen = windowWidth < breakpointWidth

  return (
    <div className={classes.page}>
      <div
        id="root"
        style={{
          height: "100vh",
          zIndex: 1,
        }}
      >
        <Flock />
      </div>
      <Layout
        location={props.location}
        handleChange={() => {
          //setDarkMode(!darkMode)
        }}
      >
        <SEO title="Under Construction" />
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
        <HeroText darkMode={true} text="COMMING SOON... Under Construction." />
      </Layout>
    </div>
  )
}

export default CoomingSoon
