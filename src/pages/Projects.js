import { useState, useEffect } from "react";

export default function Projects(props) {
  // create state to hold projects
  const [projects, setProjects] = useState(null);

  //create function to make api call
  const getProjectsData = async () => {
    //make api call and get response
    const response = await fetch(props.URL + "projects");
    // turn response into javascript object
    const data = await response.json();
    // set the projects state to the data
    setProjects(data);
  };

  // make an initial call for the data inside a useEffect, so it only happens once on component load
  useEffect(() => {getProjectsData()}, []);
console.log(projects)
  // define a function that will return the JSX needed once we get the data
  const loaded = () => {
    return (
      <div className="project--grid">
        {projects.map((project) => (
          <div>
            <img
              className="project--image"
              src={project.thumb}
              alt={project.name}
            />
          </div>
        ))}
      </div>
    );
  };

  return projects ? loaded() : <h1>Loading...</h1>;
}


        {/* <h1 key={project.key}>{project.name}</h1> */}
        {/* <a href={project.git}>
          <button>Github</button>
        </a>
        <a href={project.live}>
          <button>live site</button>
        </a> */}
