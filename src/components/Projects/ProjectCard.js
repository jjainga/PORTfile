import React from "react"
import LanguageList from "./languageList"

//import images
import CodingProblem from "./Coding_Problems.PNG"
import EmployeeDirectory from "./Employee_Directory_App.PNG"
import EmployeeManagementSystem from "./Employee_Management_System.PNG"
import Notes from "./Notes.PNG"
import PasswordGenerator from "./Password_Generator.PNG"
import PersonalPortfolio from "./Personal_Portfolio.PNG"
import Pupster from "./Pupster.PNG"
import TestYourKnowledge from "./Test_Your_Knowledge.PNG"
import ToDoApp from "./To-Do-App.PNG"
import WeatherApp from "./Weather-App.PNG"




const ProjectCard = (props) => {

    function thumbnail(value) {
       switch(value) {
            case "Coding-Problems":
               return CodingProblem
                
            case "EmployeeDirectoryApp":
                return EmployeeDirectory
                
            case "Employee-management-system":
                return EmployeeManagementSystem
                
            case "Notes":
                return Notes
                
            case "Password-Generator":
                return PasswordGenerator
                
            case "Personal-Portfolio":
                return PersonalPortfolio
                
            case "Weather-App-Five-Day-Forecast":
                return WeatherApp
                
            case "Puppies":
                return Pupster
                
            case "To-Do-App":
                return ToDoApp
                
            default:
                return "https://i1.wp.com/gchs.org/wp-content/uploads/Image-Coming-Soon-Placeholder.png?resize=350%2C240&ssl=1"
       }}
                   
    return (
    props.props.map(projectObj => 
                <div className="card col-3 ProjectCard text-center m-1 p-1" key={projectObj.id}>
                    {console.log(projectObj.name)}
                    <img className="card-img-top border" src={thumbnail(projectObj.name)} alt={projectObj.name} />
                <div className="card-body">
                    <h5 className="card-title">{projectObj.name}</h5>
                    <a href={projectObj.homepage || projectObj.html_url} className="btn btn-primary mr-1">Check it out!</a>
                    <a href={projectObj.html_url} className="btn btn-primary ml-1">Github Repo!</a>
                    <p className="card-text">Description: {projectObj.description}</p>
                    <LanguageList props={projectObj.ProjLanguages}/>
                </div>
                </div>
    ))
}
export default ProjectCard;