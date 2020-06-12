import React, { useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"

import { Flex, Box } from "grid-styled"
import styled, { css } from "styled-components"
import { media } from "../utils/style"

import NavBar from "../components/navbar"
import HeroText from "../components/heroText"
import SocialIcons from "../components/socialIcons"
import Cards from "../components/card"

import "../css/neon.css"
import { Typography } from "@material-ui/core"
import scrollToElement from "scroll-to-element"

const Content = styled.div`
  & > a {
    visibility: hidden;
    display: block;
    height: 0;
  }
  & > h1 {
    text-align: center;
  }
`

const Title = styled.h1`
  font-family: "MADE Evolve Sans Medium EVO";
  text-transform: uppercase;
  letter-spacing: 6px;
  margin-bottom: 40px;
  font-weight: 400;
  font-size: 32px;
  line-height: 40px;
  border: none;
  color: #292929;

  ${props =>
    props.small &&
    css`
      font-size: 12px;
      letter-spacing: 2px;
      font-weight: 700;
      line-height: 24px;
    `}
`

const Section = styled.div`
  text-align: center;
  padding-top: 45px;
  padding-bottom: 40px;

  a {
    font-family: "Lato";
  }

  p {
    margin-bottom: 64px;
    font-size: large;
    color: #666;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Raleway";
    text-transform: uppercase;
    color: #292929;
  }

  h4 {
    letter-spacing: 3px;
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
    color: #292929;
  }

  span {
    color: #666;
    opacity: 0.5;
    display: block;
  }

  & > div:last-child {
    border-bottom: none !important;
  }

  ${props =>
    props.center &&
    css`
      text-align: left;
      & > * {
        margin-left: 30vw;
      }
      h4 {
        margin-left: 20vw;
      }

      ${media.xs`
        & > div {
          margin-left: 3vw !important;
        }
    `}
    `}

  ${props =>
    props.dark &&
    css`
      background: #292929;
      * {
        color: #eee;
      }
      span {
        text-align: left;
        font-size: 16px;
        line-height: 28px;
        font-weight: 400;
        opacity: 0.5;
      }
      span,
      p {
        color: #fefefe !important;
      }
      h6 {
        color: #000;
        font-weight: 700;
      }
      h4 {
        color: #000;
      }
      div {
        border-bottom: 1px solid #333 !important;
      }
    `}
`

const IndexPage = props => {
  useEffect(() => {
    let progress = document.getElementById("progressbar")
    let totalHeight = document.body.scrollHeight - window.innerHeight
    window.onscroll = function () {
      let progressHeight = (window.pageYOffset / totalHeight) * 100
      progress.style.height = progressHeight + "%"
    }
  }, [])

  const [darkMode, setDarkMode] = React.useState(
    localStorage.getItem("darkMode") !== null
      ? localStorage.getItem("darkMode")
      : false
  )

  const changeSec = () => {
    console.log("CHANGE SEC")
    var sec = document.getElementById("sec")
    var navigation = document.getElementById("navigation")
    var socialIcons = document.getElementById("socialIcons")
    sec.classList.toggle("active")
    navigation.classList.toggle("active")
    socialIcons.classList.toggle("active")
  }

  var content = (
    <Content>
      <HeroText darkMode={darkMode} text="" />
      <div id="socialIcons">
        <SocialIcons
          style={{
            position: "absolute",
            margin: "0 auto",
            left: 0,
            right: 0,
            bottom: 16,
          }}
          icons={[
            {
              name: "LinkedInIcon",
              href: "www.linkedin.com/in/diegoulises",
              color: darkMode ? "#fff" : "#000",
            },
            {
              name: "GitHubIcon",
              href: "https://github.com/Diego-Ulises",
              color: darkMode ? "#fff" : "#000",
            },
            {
              name: "InstagramIcon",
              href: "https://www.instagram.com/diego.ulisess/",
              color: darkMode ? "#fff" : "#000",
            },
          ]}
          darkMode={darkMode}
        />
      </div>

      <a id="about-me">About Me</a>
      <Section>
        <Title
          style={{
            fontFamily: "MADE Evolve Sans Medium EVO",
            fontSize: 24,
            color: darkMode ? "#fff" : "#000",
          }}
        >
          About Me
        </Title>
        <Flex alignItems="center" flexDirection="column">
          <Box px={2} width={[1, 2 / 3]}>
            <Typography style={{ color: darkMode ? "#a3a3a3" : "#4e4e4e" }}>
              Lorem ipsum dolor sit amet consectetur adipiscing elit cubilia
              eleifend, lectus ullamcorper natoque neque molestie lacus velit
              pretium imperdiet, enim ante quam mattis porta dui tortor
              praesent. Torquent habitasse varius natoque ridiculus mattis
              vestibulum praesent platea ullamcorper aliquet, massa donec
              senectus cum id sapien erat taciti facilisi, tellus aenean felis a
              cras integer faucibus class ultricies.
            </Typography>
          </Box>
          <Cards />
          <Link
            to="/comming-soon"
            id="neonButton"
            style={{ fontFamily: "MADE Evolve Sans Medium EVO" }}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            See more
          </Link>
        </Flex>
      </Section>
      <a id="portfolio">Portfolio</a>
      <a id="services">Services</a>
      <a id="experience">Experience</a>
      <a id="tech">Tech</a>
      <a id="education">Education</a>
      <a id="honoursAndAwards">Honours & Awards</a>
    </Content>
  )
  return (
    <>
      <section class="banner" id="sec">
        <Layout
          location={props.location}
          handleChange={() => {
            setDarkMode(!darkMode)
          }}
        >
          <SEO title="Home" />
          <div id="progressbar"></div>
          <div id="scrollPath"></div>
          <NavBar
            main
            children={content.props.children}
            darkMode={darkMode}
            changeSec={() => {
              changeSec()
            }}
          />
          {content}
          {/* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
        </Layout>
      </section>
      <div
        id="navigation"
        style={{
          backgroundColor: darkMode ? "#0e0d18" : "#fff",
        }}
      >
        <ul>
          <li>
            <a
              onClick={() => {
                scrollToElement("#about-me")
              }}
              style={{
                color: darkMode ? "#4353ff" : "#000",
                textShadow: darkMode
                  ? "0 0 10px #1779ff, 0 0 40px #1779ff, 0 0 80px #1779ff"
                  : "none",
              }}
            >
              About Me
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                scrollToElement("#portfolio")
              }}
              style={{
                color: darkMode ? "#4353ff" : "#000",
                textShadow: darkMode
                  ? "0 0 10px #1779ff, 0 0 40px #1779ff, 0 0 80px #1779ff"
                  : "none",
              }}
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                scrollToElement("#services")
              }}
              style={{
                color: darkMode ? "#4353ff" : "#000",
                textShadow: darkMode
                  ? "0 0 10px #1779ff, 0 0 40px #1779ff, 0 0 80px #1779ff"
                  : "none",
              }}
            >
              Services
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                scrollToElement("#experience")
              }}
              style={{
                color: darkMode ? "#4353ff" : "#000",
                textShadow: darkMode
                  ? "0 0 10px #1779ff, 0 0 40px #1779ff, 0 0 80px #1779ff"
                  : "none",
              }}
            >
              Experience
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                scrollToElement("#tech")
              }}
              style={{
                color: darkMode ? "#4353ff" : "#000",
                textShadow: darkMode
                  ? "0 0 10px #1779ff, 0 0 40px #1779ff, 0 0 80px #1779ff"
                  : "none",
              }}
            >
              Tech
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                scrollToElement("#education")
              }}
              style={{
                color: darkMode ? "#4353ff" : "#000",
                textShadow: darkMode
                  ? "0 0 10px #1779ff, 0 0 40px #1779ff, 0 0 80px #1779ff"
                  : "none",
              }}
            >
              Education
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                scrollToElement("#honoursAndAwards")
              }}
              style={{
                color: darkMode ? "#4353ff" : "#000",
                textShadow: darkMode
                  ? "0 0 10px #1779ff, 0 0 40px #1779ff, 0 0 80px #1779ff"
                  : "none",
              }}
            >
              Honours & Awards
            </a>
          </li>
        </ul>
        <div id="socialIconsNav">
        <SocialIcons
          style={{
            position: "absolute",
            margin: "0 auto",
            left: 0,
            right: 0,
            bottom: 80,
          }}
          icons={[
            {
              name: "LinkedInIcon",
              href: "www.linkedin.com/in/diegoulises",
              color: darkMode ? "#fff" : "#000",
            },
            {
              name: "GitHubIcon",
              href: "https://github.com/Diego-Ulises",
              color: darkMode ? "#fff" : "#000",
            },
            {
              name: "InstagramIcon",
              href: "https://www.instagram.com/diego.ulisess/",
              color: darkMode ? "#fff" : "#000",
            },
          ]}
          darkMode={darkMode}
        />
      </div>
      </div>
    </>
  )
}

export default IndexPage
