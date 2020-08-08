import React from "react"
import Slider from "react-slick"
import "../css/neon.css"
import "../css/slider.css"
import "../css/slick.css"

const Tech = () => {
// state = {
//   slideIndex: 0,
//   updateCount: 0
// };
  var settings = {
    dots: true,
    infinite: false,
    slidesToScroll: 4,
    initialSlide: 0,
    rows: 3,
    fade: false,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    swipeToSlide: true,
    focusOnSelect: true,
    // afterChange: () =>
    //   this.setState(state => ({ updateCount: state.updateCount + 1 })),
    // beforeChange: (current, next) => this.setState({ slideIndex: next })
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //       infinite: true,
    //       dots: true,
    //     },
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //       initialSlide: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  }
  return (
    <Slider {...settings}>
      <div>
        <h1>1</h1>
      </div>
      <div>
        <h1>2</h1>
      </div>
      <div>
        <h1>3</h1>
      </div>
      <div>
        <h1>4</h1>
      </div>
      <div>
        <h1>5</h1>
      </div>
      <div>
        <h1>6</h1>
      </div>
      <div>
        <h1>7</h1>
      </div>
      <div>
        <h1>8</h1>
      </div>
      <div>
        <h1>9</h1>
      </div>
      <div>
        <h1>10</h1>
      </div>
      <div>
        <h1>11</h1>
      </div>
      <div>
        <h1>12</h1>
      </div>
      <div>
        <h1>13</h1>
      </div>
      <div>
        <h1>14</h1>
      </div>
      <div>
        <h1>15</h1>
      </div>
      <div>
        <h1>16</h1>
      </div>
      <div>
        <h1>17</h1>
      </div>
      <div>
        <h1>18</h1>
      </div>
      <div>
        <h1>19</h1>
      </div>
      <div>
        <h1>20</h1>
      </div>
    </Slider>
  )
}

export default Tech
