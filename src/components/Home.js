import React, {useSate} from "react";
import Banner from "./Banner/Banner"
import ContactCard from "./Contact/ContactCard"


const Home = () => {



return (
        <div>
        <Banner />
        <main className="container">
          <section className="row">
            <div className="col-md-8 rounded position-center">
              <div className="row ">
                <div className="col-md-12">
                  <h2>Personal Bio</h2>
                </div>
              </div>
              <div className="row ">
                <div className="col-md-12">
                  <p>
                    My name is Joshua Jainga! I am currently an operations manager and have been trying to find what I want to do with my career. Through my experience at work I have found skills that I know that will take me closer to my goal, but I have also spent a lot of time focused on projects that I know will not help me reach my end goal. I am currently learning skills that align more with what my passions and interests are in the hopes that I will be able to take the next step in my career.
                  </p>
                  <p>I am an inspiring Full Stack Developer developer leveraging economics and operations management background to help solve complex problems in order to improve user experience. Completing a full stack development program through the University of Washington with newly developed skills in HTML5, CSS, Javascript, jQuery, Node.js, Express.js, React.js, MySQL, MongoDB and self-taught in Python. Quick to learn, integrate and teach new knowledge to benefit the team I am supporting.I am excited to continue to grow my skills to build a better experience for everyone.</p>
                  <p>
                    In my free time you can find me gaming, hiking, taking photos and spending time with my girlfriend. I have recently started working on my car to become more knowledgeable in the engineering behind how my car actually works!
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