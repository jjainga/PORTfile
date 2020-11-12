import React from "react"
import BannerImage from "./Banner.jpg"



const Banner = () => {
const imgStyle = {
  backgroundImage: 'url(' + BannerImage + ')'
}

return <div className="jumbotron jumbotron-fluid" style={imgStyle}>
  <div className="container">
    <h1 className="display-4">Joshua Jainga</h1>
  </div>
</div>

}

export default Banner;