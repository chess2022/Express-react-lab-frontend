import { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import React from "react";
import { Button } from "react-bootstrap";

export default function Projects(props) {
  // create state to hold projects
  const [projects, setProjects] = useState(false);


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
  // console.log(projects)
  // define a function that will return the JSX needed once we get the data
  const loaded = () => {
    return (
      <div className="project--grid">
        {projects.map((project) => (
          <div>
            <Button variant="primary" onClick={() => setProjects(true)}>
              <img
                className="project--image"
                src={project.thumb}
                alt={project.name}
              />
            </Button>
          </div>
        ))}
        <Modal
          projects={projects}
          onHide={() => setProjects(false)}
          dialogClassName="modal-90w"
          centered
        >
          <Modal.Body>
            {projects.map((project) => (
              <div className="projectModal--text">
                <img
                  className="projectModal--image"
                  src={project.image}
                  alt={project.name}
                />
                <p>{project.description}</p>
              </div>
            ))}
          </Modal.Body>
        </Modal>
      </div>
    );
  };

  return projects ? loaded() : <h1>Loading...</h1>;
}


