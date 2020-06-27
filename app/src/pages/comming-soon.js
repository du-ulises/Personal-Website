import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroText from "../components/heroText"
import "../css/neon.css"
import { useTheme, makeStyles } from "@material-ui/core/styles"
import Flock from "../components/flocking"
import { motion, AnimatePresence } from "framer-motion"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Grid } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  page: {
    overflowY: "hidden",
    overflowX: "hidden",
    height: "100vh",
    position: "fixed",
  },
}))

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

const CoomingSoon = props => {
  const classes = useStyles()
  const theme = useTheme()
  var windowWidth = window.innerWidth
  var breakpointWidth = theme.breakpoints.values.md
  var isSmallScreen = windowWidth < breakpointWidth
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
      Deer: file(relativePath: { eq: "Deer.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
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
      <div
        style={{
          fontFamily: "MADE Evolve Sans Medium EVO",
          position: "absolute",
          top: "10%",
          zIndex: 2,
          color: "#fff",
          height: 100,
          width: "100%",
        }}
      >
        <Grid container justify="center">
          <Grid item xs={12}>
            <motion.div
              className="home container"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence>
                <Img
                  imgStyle={{ objectFit: "contain" }}
                  style={{ margin: "1rem", height: "80px" }}
                  fluid={images.DeerLight.childImageSharp.fluid}
                />
              </AnimatePresence>
            </motion.div>
          </Grid>
          <Link
            to="/"
            id="neonButton"
            style={{
              fontFamily: "MADE Evolve Sans Medium EVO",
            }}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Return To Home Page
          </Link>
          <Grid xs={12}>
            <HeroText
              darkMode={true}
              text="COMMING SOON... Under Construction."
            />
          </Grid>
        </Grid>
      </div>

      <Layout
        location={props.location}
        handleChange={() => {
          //setDarkMode(!darkMode)
        }}
      >
        <SEO title="Under Construction" />
      </Layout>
    </div>
  )
}

export default CoomingSoon
