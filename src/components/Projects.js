import React, {useState, useEffect} from "react";
import API from "../Utilities/API";
import Banner from "./Banner/Banner";
import ProjectCard from "./Projects/ProjectCard";

const Projects = () => {

    const [ProjectState, setProjectState] = useState({
        projects: [],
        sortProjects: [],
    })

    useEffect(() => {
        githubSearch();
      },[] )

      async function githubSearch() {
        let {data} = await API.search()
        setProjectState({projects: data, sortProjects: data})
        const languages = data.map(userObj => API.searchLanguages(userObj.languages_url))

        const langPromises = await Promise.all(languages)
        const langArray = langPromises.map(lang => lang.data)
        
        const langArrayProm = await Promise.all(langArray)
        const merged = []
        for( let i = 0; i < data.length; i++) {
          merged.push({
            ...data[i],
            ProjLanguages: {...langArrayProm[i]}
          }
          )
        }
        setProjectState({projects: merged, sortProjects: merged})
      }

      return (
          <div>
              <Banner />
              <section className="row mx-auto text-center" style={{width: 1400}}>
                <ProjectCard props={ProjectState.projects} />
              </section>
          </div>
      )
}

export default Projects;