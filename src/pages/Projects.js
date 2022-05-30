import { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import React from "react";
// import { Button } from "react-bootstrap";

export default function Projects(props) {
  // state for modal open/close
  const [modalIsOpen, setModalIsOpen] = useState(false)
  // create state to hold projects
  const [projects, setProjects] = useState(null);
  const customStyles = {
    content: {
      top: '35%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      width: '80%',
      transform: 'translate(-40%, -10%)',
    }
  }


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
      <>
        <div className="project--grid">
          {projects.map(project => (
            <div className="project" key={project.key}>
              <img
                className="project--image"
                src={project.thumb}
                alt={project.name}
                onClick={() => {
                  setProjects(projects.project);
                  setModalIsOpen(true);
                }}
              />
            </div>
          ))}
        </div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          style={customStyles}
        >
            <button className="close" onClick={() => setModalIsOpen(false)}>X</button>
            <div className="projectModal--text">
              <img
                className="projectModal--image"
                src={projects.image}
                alt={projects.name}
              />
              <p>{projects.description}</p>
            </div>
        </Modal>
      </>
    );
  };

  return projects ? loaded() : <h1>Loading...</h1>;
}


