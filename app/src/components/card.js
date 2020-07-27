import React from "react"
import "../css/neon.css"

const Card = () => {
  return (
    <div class="cards">
      <div class="box">
        <div class="glass"></div>
        <div class="content">
          <h2 style={{fontFamily: "MADE Evolve Sans Medium EVO", color: "white"}}>Study Cases</h2>
          <p  style={{fontFamily: "Acrom Medium", color: "#a3a3a3"}}>
            Lorem ipsum dolor sit amet consectetur adipiscing elit cubilia
            eleifend, lectus ullamcorper natoque neque molestie lacus velit
            pretium imperdiet, enim ante quam mattis porta dui tortor praesent.{" "}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Card