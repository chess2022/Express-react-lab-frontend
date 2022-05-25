import { toBePartiallyChecked } from "@testing-library/jest-dom/dist/matchers";
import { Link } from "react-router-dom";

export default function Header(props) {
  //inline style for the nav tag
  const navStyle = {
    display: "flex",
    justifyContent: "center",
    background: "black",
    padding: "8px",
    margin: "auto",
    fontFamily: ""
  };

  return (
    <header>
      <nav style={navStyle}>
        <Link to="/" className="home-link">HOME</Link>
        <Link to="/about" className="about-link">ABOUT</Link>
        <Link to="/projects">PROJECTS</Link>
      </nav>
    </header>
  )
}
