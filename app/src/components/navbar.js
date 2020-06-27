import React, { useEffect } from "react"
import styled, { css } from "styled-components"
import { Flex, Box } from "grid-styled"
import scrollToElement from "scroll-to-element"
import { motion, AnimatePresence } from "framer-motion"
import { navigate } from "gatsby" //import navigate from gatsby
import { media } from "../utils/style"
import "../css/neon.css"

const Base = styled.div`
  padding: 0;
  margin: 0;
  max-height: 62px;
  line-height: 62px;
  width: 100vw;
  & ul {
    width: 100%;
    height: 62px;
    padding: 0;
    margin: 0;
    list-style: none;
    font-size: 13px;
  }
  & ul > li a,
  & ul > li {
    height: 62px;
    font-size: 11px;
    float: right;
    position: relative;
    color: #000;
    text-decoration: none;
    cursor: pointer;
    transition: opacity .3s ease;
  }
  & ul > li a {
    
    font-weight: 600;
    letter-spacing: 1px;
    margin-right: 32px;
  }

  ${props =>
    props.dark &&
    css`
      background: #000;
      & ul > li a,
      & ul > li {
        color: #242424;
        opacity: 0.6;
      }
      & ul > li a:hover {
        opacity: 1;
      }
      a {
        color: #000;
      }
    `}

  ${props =>
    props.main &&
    css`
      background: transparent;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 100;
    `}

  ${media.xs`
    & ul {
      display: none;
    }
  `}
`

function NavBar(props) {
  var marker = document.querySelector("#marker")
  var item = document.querySelectorAll("nav a")

  for (const link of item) {
    function indicator(e) {
      marker.style.left = e.offsetLeft + "px"
      marker.style.width = e.offsetWidth + "px"
    }
    link.addEventListener("mousemove", e => {
      indicator(e.target)
      console.log("event")
      console.log(e)
    })
  }
  useEffect(() => {
    var marker = document.querySelector("#marker")
    var item = document.querySelectorAll("nav a")

    for (const link of item) {
      function indicator(e) {
        marker.style.left = e.offsetLeft + "px"
        marker.style.width = e.offsetWidth + "px"
      }
      /* Add click to currently iterated link node in NodeList result */
      link.addEventListener("mousemove", e => {
        indicator(e.target)
        console.log("event")
        console.log(e)
      })
    }
  }, [])

  return (
    <Base {...props}>
      <Flex>
        <Box px={2} width={[1 / 2, 1 / 3, 2 / 6]}>
          <AnimatePresence>
            <motion.div
              className="title"
              initial={{ y: -150 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
            >
              <strong
                style={{
                  fontFamily: "MADE Evolve Sans Medium EVO",
                  fontSize: 24,
                  color: props.darkMode ? "#fff" : "#000",
                }}
              >
                DUMA
              </strong>
            </motion.div>
          </AnimatePresence>
        </Box>
        <Box px={2} width={[0, 2 / 3, 4 / 6]}>
          <motion.div
            className="title"
            initial={{ y: -250 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
          >
            <nav>
              <div id="marker"></div>
              <a
                onClick={() => {
                  scrollToElement("#about-me")
                }}
                style={{
                  color: props.darkMode ? "#fff" : "#000",
                }}
              >
                About Me
              </a>
              <a
                onClick={() => {
                  navigate("/work")
                }}
                style={{
                  color: props.darkMode ? "#fff" : "#000",
                }}
              >
                Work
              </a>
              <a
                onClick={() => {
                  scrollToElement("#services")
                }}
                style={{
                  color: props.darkMode ? "#fff" : "#000",
                }}
              >
                Services
              </a>
              <a
                onClick={() => {
                  scrollToElement("#experience")
                }}
                style={{
                  color: props.darkMode ? "#fff" : "#000",
                }}
              >
                Experience
              </a>
              <a
                onClick={() => {
                  scrollToElement("#tech")
                }}
                style={{
                  color: props.darkMode ? "#fff" : "#000",
                }}
              >
                Tech
              </a>
              <a
                onClick={() => {
                  scrollToElement("#education")
                }}
                style={{
                  color: props.darkMode ? "#fff" : "#000",
                }}
              >
                Education
              </a>
              <a
                onClick={() => {
                  scrollToElement("#honoursAndAwards")
                }}
                style={{
                  color: props.darkMode ? "#fff" : "#000",
                }}
              >
                Honours & Awards
              </a>
            </nav>
          </motion.div>
        </Box>
      </Flex>
      <div class="bars">
        <label>
          <input type="checkbox" id="menu" onChange={props.changeSec} />
          <span class="toggle"></span>
        </label>
      </div>
    </Base>
  )
}

export default NavBar
