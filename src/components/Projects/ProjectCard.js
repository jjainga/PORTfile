import React from "react"
import LanguageList from "./languageList"

//import images
import CodingProblem from "../../Images/Coding_Problems.PNG"
import EmployeeDirectory from "../../Images/Employee_Directory_App.PNG"
import EmployeeManagementSystem from "../../Images/Employee_Management_System.PNG"
import Notes from "../../Images/Notes.PNG"
import PasswordGenerator from "../../Images/Password_Generator.PNG"
import PersonalPortfolio from "../../Images/Personal_Portfolio.PNG"
import Pupster from "../../Images/Pupster.PNG"
import TestYourKnowledge from "../../Images/Test_Your_Knowledge.PNG"
import ToDoApp from "../../Images/To-Do-App.PNG"
import WeatherApp from "../../Images/Weather-App.PNG"




const ProjectCard = (props) => {

    const ImageArr = [
        {
            name:"Coding-Problems",
            img: CodingProblem
        },
        {
            name:"EmployeeDirectoryApp",
            img: EmployeeDirectory
        },
        {
            name:"Employee-management-system",
            img: EmployeeManagementSystem
        },
        {
            name:"Notes",
            img: Notes
        },
        {
            name:"Password-Generator",
            img: PasswordGenerator
        },
        {
            name:"Personal-Portfolio",
            img: PersonalPortfolio
        },{
            name:"Weather-App-Five-Day-Forecast",
            img: WeatherApp
        },
        {
            name:"Puppies",
            img: Pupster
        },
        {
            name:"Test-Your-Knowledge",
            img: TestYourKnowledge
        },
        {
            name:"To-Do-App",
            img: ToDoApp
        }
    ]
    
    return (
    props.props.map(projectObj => 
                <div className="card col-3 ProjectCard text-center m-1 p-1" key={projectObj.id}>
                    <img className="card-img-top" src={ImageArr.map((image) => 
                        projectObj.name === image.name ? 
                        image.img :
                        "https://i1.wp.com/gchs.org/wp-content/uploads/Image-Coming-Soon-Placeholder.png?resize=350%2C240&ssl=1"
                        )} 
                         alt={projectObj.name} />
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