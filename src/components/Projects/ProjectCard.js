import React from "react"
import LanguageList from "./languageList"




const ProjectCard = (props) => {

    
    return (
    props.props.map(projectObj => 
                <div className="card col-3 ProjectCard text-center m-1 p-1" key={projectObj.id}>
                    <img className="card-img-top" src="https://i1.wp.com/gchs.org/wp-content/uploads/Image-Coming-Soon-Placeholder.png?resize=350%2C240&ssl=1" alt={projectObj.name} />
                <div className="card-body">
                    <h5 className="card-title">Repo Name: {projectObj.name}</h5>
                    <p className="card-text">Description: {projectObj.description}</p>
                    <LanguageList props={projectObj.ProjLanguages}/>
                    <a href={projectObj.homepage || projectObj.html_url} className="btn btn-primary">Check it out!</a>
                    <a href={projectObj.html_url} className="btn btn-primary">Github Repo!</a>
                </div>
                </div>
    ))
}
export default ProjectCard;