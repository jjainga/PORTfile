import React from "react";
import Headshot from "../../Images/HeadShot.jpg";

const ContactCard = () => {


  return(  <figure className="card rounded col-4 text-center d-inline-block shadow-lg p-3 mb-5" style={{width: 400}}>
                <img className="card-img-top rounded" src={Headshot} alt="Me" />
                <div className="card-body">
                  <h5 className="card-title text-center">Contact Info</h5>
                  <a className="m-2 p-2" href="Mailto:jjainga@gmail.com" title="jjainga@gmail.com"><img src="https://img.icons8.com/fluent/48/000000/email-open.png" /></a>
                  <a className="m-2 p-2" href="tel:253-347-8441" title="253-347-8441"><img src="https://img.icons8.com/offices/30/000000/phone.png"/></a>
                  <a className="m-2 p-2" href="https://www.linkedin.com/in/joshuajainga/" title="https://www.linkedin.com/in/joshuajainga/" target="_blank"><img src="https://img.icons8.com/fluent/48/000000/linkedin.png" /></a>
                  <br />
                  <br />                  
                  <a className="m-2 p-2" href="https://stackoverflow.com/users/story/14178425" title="https://stackoverflow.com/users/story/14178425" target="_blank"><img src="https://img.icons8.com/color/48/000000/stackoverflow.png" /></a>
                  <a className="m-2 p-2" href="https://github.com/jjainga" title="https://github.com/jjainga" target="_blank"><img src="https://img.icons8.com/fluent/48/000000/github.png"/></a>
                  </div>
              </figure>
  )

}

export default ContactCard;