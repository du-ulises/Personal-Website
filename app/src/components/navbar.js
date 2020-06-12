import React, { useEffect, useRef } from "react"
import styled, { css } from "styled-components"
import { Flex, Box } from "grid-styled"
import scrollToElement from "scroll-to-element"

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
    /* Add click to currently iterated link node in NodeList result */
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

  // const changeSec = () => {
  //   console.log("CHANGE SEC")
  //   function toggle() {
  //     var sec = document.getElementById("sec")
  //     sec.classList.toggle("active")
  //   }
  // }

  const linkMap = props.children
    .map(el => {
      if (el.props.id)
        return {
          name: el.props.children,
          href: `#${el.props.id}`,
          color: props.darkMode ? "#fff" : "#000",
        }
    })
    .filter(n => n !== undefined)
    .reverse()
  const links = linkMap.map(function (link) {
    return (
      <li key={link.name}>
        <a
          onClick={() => {
            scrollToElement(link.href)
          }}
          style={{
            fontFamily: "MADE Evolve Sans Light EVO",
            fontSize: 18,
            color: link.color,
          }}
        >
          {link.name}
        </a>
      </li>
    )
  })
  return (
    <Base {...props}>
      <Flex>
        <Box px={2} width={[1 / 2, 1 / 3, 2 / 6]}>
          <strong
            style={{
              fontFamily: "MADE Evolve Sans Medium EVO",
              fontSize: 24,
              color: props.darkMode ? "#fff" : "#000",
            }}
          >
            DUMA
          </strong>
        </Box>
        <Box px={2} width={[0, 2 / 3, 4 / 6]}>
          {/* <nav>
            <div id="marker"></div>
            <ul>{links}</ul>
          </nav> */}
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
                scrollToElement("#portfolio")
              }}
              style={{
                color: props.darkMode ? "#fff" : "#000",
              }}
            >
              Portfolio
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
