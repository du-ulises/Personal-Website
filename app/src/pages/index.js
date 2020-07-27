import React, { useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Flex, Box } from "grid-styled"
import styled, { css } from "styled-components"
import { media } from "../utils/style"

import NavBar from "../components/navbar"
import HeroText from "../components/heroText"
import SocialIcons from "../components/socialIcons"
import Tech from "../components/tech"

import "../css/neon.css"
import { Typography } from "@material-ui/core"

import { motion, AnimatePresence } from "framer-motion"

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
    setDarkMode(
      localStorage.getItem("darkMode") !== null
        ? localStorage.getItem("darkMode")
        : false
    )
    let progress = document.getElementById("progressbar")
    let totalHeight = document.body.scrollHeight - window.innerHeight
    window.onscroll = function () {
      let progressHeight = (window.pageYOffset / totalHeight) * 100
      progress.style.height = progressHeight + "%"
    }
    const cursor = document.querySelector(".cursor")

    document.addEventListener("mousemove", e => {
      cursor.setAttribute(
        "style",
        "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;"
      )
    })

    document.addEventListener("click", () => {
      cursor.classList.add("expand")

      setTimeout(() => {
        cursor.classList.remove("expand")
      }, 500)
    })
    var Emblem = {
      init: function (el, str) {
        var element = document.querySelector(el)
        var text = str ? str : element.innerHTML
        element.innerHTML = ""
        for (var i = 0; i < text.length; i++) {
          var letter = text[i]
          var span = document.createElement("span")
          var node = document.createTextNode(letter)
          var r = (360 / text.length) * i
          var x = (Math.PI / text.length).toFixed(0) * i
          var y = (Math.PI / text.length).toFixed(0) * i
          span.appendChild(node)
          span.style.webkitTransform =
            "rotateZ(" + r + "deg) translate3d(" + x + "px," + y + "px,0)"
          span.style.transform =
            "rotateZ(" + r + "deg) translate3d(" + x + "px," + y + "px,0)"
          element.appendChild(span)
        }
      },
    }

    Emblem.init(".emblem")
  }, [])

  const [darkMode, setDarkMode] = React.useState(false)

  const changeSec = () => {
    var sec = document.getElementById("sec")
    try {
      sec.classList.toggle("active")
    } catch (error) {
      console.log(error)
    }
  }

  var content = (
    <Content>
      <HeroText darkMode={darkMode} text="" />
      <div
        id="me"
        style={{
          position: "absolute",
          margin: "0 0",
          left: 0,
          right: 0,
          bottom: -5,
        }}
      >
        <motion.div
          className="title"
          initial={{ y: -250 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
        >
          <AnimatePresence>
            <img src="/bg/uli1.png" id="uli" />
            <span className="slide"></span>
            <span className="slide2"></span>
          </AnimatePresence>
        </motion.div>
      </div>
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
        <div
          className="emblem"
          style={{
            fontFamily: "MADE Evolve Sans Regular EVO",
            color: darkMode ? "#fff" : "#000",
          }}
        >
          {" "}
          * Diego * Ulises * Martínez * Aguilar
        </div>
        <Flex alignItems="center" flexDirection="column">
          <Box px={2} width={[1, 2 / 3]}>
            <Typography style={{ color: darkMode ? "#a3a3a3" : "#4e4e4e" }}>
              I'm a Frontend Web & Mobile Developer and Designer, currently
              working in a digital development agency,{" "}
              <a
                href="https://digitalignition.com.mx/en/home/"
                target="_blank"
                style={{
                  color: darkMode ? "#fff" : "#000",
                  fontFamily: "MADE Evolve Sans Regular EVO",
                }}
              >
                <strong>Digital Ignition,</strong>
              </a>{" "}
              as Android Coordinator in Morelia, Mich. <br />
              <br />
              After more than 5 years as Computer Systems Engineering student I
              have discovered a passion for programming and development. Since
              2019 I've mostly been working on front-end web development and
              UX/UI Design.
            </Typography>
          </Box>
        </Flex>
      </Section>
      <a id="work">Work</a>
      <Section>
        <Title
          style={{
            fontFamily: "MADE Evolve Sans Medium EVO",
            fontSize: 24,
            color: darkMode ? "#fff" : "#000",
          }}
        >
          Work
        </Title>
        <Flex alignItems="center" flexDirection="column">
          {/* <Cards /> */}
          <Link
            to="/work"
            id="neonButton"
            style={{ fontFamily: "MADE Evolve Sans Medium EVO" }}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Study Cases
          </Link>
        </Flex>
      </Section>
      <a id="services">Services</a>
      <Section>
        <Title
          style={{
            fontFamily: "MADE Evolve Sans Medium EVO",
            fontSize: 24,
            color: darkMode ? "#fff" : "#000",
          }}
        >
          Services
        </Title>
      </Section>
      <a id="experience">Experience</a>
      <Section>
        <Title
          style={{
            fontFamily: "MADE Evolve Sans Medium EVO",
            fontSize: 24,
            color: darkMode ? "#fff" : "#000",
          }}
        >
          Experience
        </Title>
      </Section>
      <a id="tech">Tech</a>

      <Section>
        <Title
          style={{
            fontFamily: "MADE Evolve Sans Medium EVO",
            fontSize: 24,
            color: darkMode ? "#fff" : "#000",
          }}
        >
          Tech
        </Title>
        <Tech />
      </Section>
      <a id="education">Education</a>
      <Section>
        <Title
          style={{
            fontFamily: "MADE Evolve Sans Medium EVO",
            fontSize: 24,
            color: darkMode ? "#fff" : "#000",
          }}
        >
          Education
        </Title>
      </Section>
      <a id="honoursAndAwards">Honours & Awards</a>
      <Section>
        <Title
          style={{
            fontFamily: "MADE Evolve Sans Medium EVO",
            fontSize: 24,
            color: darkMode ? "#fff" : "#000",
          }}
        >
          Honours & Awards
        </Title>
      </Section>
    </Content>
  )
  return (
    <>
      <div className="cursor"></div>

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
      </Layout>
    </>
  )
}

export default IndexPage
