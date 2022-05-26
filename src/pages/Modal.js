import Modal from "react-bootstrap/Modal";

function ProjectModal() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)}>
        Custom Width Modal
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Body>
          <div className="projectModal--text">
            <img
              className="projectModal--image"
              src={project.image}
              alt={project.name}
            />
            <p>
              {project.description}
            </p>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

render(<ProjectModal />);
