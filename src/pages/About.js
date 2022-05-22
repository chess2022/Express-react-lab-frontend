import { useState, useEffect } from "react";


export default function About(props) {
  // Create state to hold about data
  const [about, setAbout] = useState(null);

  // Create api call function
  const getAboutData = async () => {
    const response = await fetch(props.URL + "about");
    const data = await response.json();
    setAbout(data);
  };

  // make an initial call for the data inside a useEffect
  useEffect(() => {getAboutData()}, []);

  const loaded = () => (
    <div>
      <img src={about.headshot} />
      <h2>{about.name}</h2>
      <h3>{about.email}</h3>
      <p>{about.bio}</p>
    </div>
  );

  // if data arrives, return the result, if not an <h1> that says loading
  return about ? loaded() : <h1>Loading...</h1>;
}
