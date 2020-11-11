import React from "react";
import Iframe from "react-iframe"
import PDF from "./Joshua_Jainga_Resume.pdf"

const Resume = () => {
    return(
        <div className="col-8 d-inline-block">
            <h1 className="text-left">Resume</h1>
            <Iframe src={PDF} width="1000px" height="1000px" />
        </div>
    )
}

export default Resume