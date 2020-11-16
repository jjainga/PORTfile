import React, {useSate} from "react";
import Banner from "./Banner/Banner"
import ContactCard from "./Contact/ContactCard"

const GREY = "#9E9E9E"

const style = {
  div:{
    boxshadow: `3px 5px 3px ${GREY}`
  }
}

const Home = () => {


return (
        <div>
        <Banner />
        <main className="container">
          <section className="row m-1 p-1">
            <div className="col-md-6 rounded position-center border m-3 p-3" style={style.div}>
              <div className="row ">
                <div className="col-md-12">
                  <h2>Personal Bio</h2>
                  <hr/> 
                </div>
              </div>
              <div className="row ">
                <div className="col-md-12">
                  <p>
                    My name is Joshua Jainga! I have my Bachelor's in Economics, I am currently an operations manager and have been exploring career opportunities that combine all of my interest.
                  </p>
                  <p>I am an aspiring Full Stack Developer leveraging my economics and operations management background to help solve complex problems in order to improve user experience. I am completing a full stack development program through the University of Washington with newly developed skills in HTML5, CSS, Javascript, jQuery, Node.js, Express.js, React.js, MySQL, MongoDB and self-taught in Python. I am quick to learn, integrate and teach new knowledge to benefit the team I am supporting. I am excited to continue to grow my skills to build a better experience for everyone.</p>
                  <p>
                    In my free time you can find me gaming, hiking, taking photos and spending time with my girlfriend and our puppy, Lexi. I have recently started working on my car to become more knowledgeable in the engineering behind how my car actually works!
                  </p>
                  <p>Feel free to explore my projects and reach out to me with any questions!</p>
                </div>
              </div>
            </div>
            <ContactCard />
          </section>
         </main>

    </div>
    )
}

export default Home;


{/* <a href="https://icons8.com/icon/AZOZNnY73haj/github">GitHub icon by Icons8</a> */}