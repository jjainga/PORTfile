import React from "react";
import Banner from "./Banner/Banner";
import ContactCard from "./Contact/ContactCard";
import Resume from "./Resume/Resume";

const Contact = () => {

return (
<div classNameName="container m-auto" >
    <Banner />
    <div className="row text-center m-auto">
    <ContactCard />
    <Resume />
    </div>
</div>

)

}

export default Contact;