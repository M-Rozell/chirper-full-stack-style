import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import ChirpCard from "./components/ChirpCard.jsx";
import "babel-polyfill";


const App = () => {

  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [chirps, setChirps] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/chirps')
      .then(res => res.json())
      .then(chirps => setChirps(chirps))
      .catch(err => console.log(err))
  }, [])

  const handleNameChange = (e) => setName(e.target.value);
  const handleContentChange = (e) => setContent(e.target.value);
  const handleChirpSubmit = async () => {

    const userData = {
      userid: 1,
      name: name,
      content: content,
      location: "home"
    }

    try {
      const add = await fetch('http://localhost:3000/api/chirps', {
        method: "POST",
        headers: { "Content-Type": 'application/JSON' },
        body: JSON.stringify(userData)
      })
    }
    catch (error) { if (err) throw err; }
  }


  const handleBtnDelete = (id) => {
    fetch('http://localhost:3000/api/chirps/' + id, { method: "DELETE" })
      .then(() => location.reload())
  }

  return (
    <>
      <div className="container text-body text-center">
        <div className="row">
          <div className="col-12 p-0">
            <nav>
              <img
                className="banner"
                src="./assets/banner.jpg"
                alt="logo for awesome site yay"
              />
              <h1>Ghibli Chirpr</h1>
            </nav>
          </div>
        </div>
        <div className="row">
          <form onSubmit={handleChirpSubmit} action="">
            <div className="form-group mb-2">
              <input
                type="text"
                className="form-control mb-1"
                placeholder="Username"
                aria-label="Username"
                value={name}
                onChange={handleNameChange}
              />
              <textarea
                className="form-control mb-2"
                aria-label="With textarea"
                placeholder="(500 characters max)"
                value={content}
                onChange={handleContentChange}
                cols="30"
                rows="10"
              ></textarea>
              <button className="btn btn-dark" type="submit">
                Chirp It!
              </button>
            </div>
          </form>
          <div className=" chirps mb-4">
            {chirps.map((chirp) => (
              <ChirpCard
                key={chirp.id}
                name={chirp.name}
                content={chirp.content}
                location={chirp.location}
                created={chirp._created}
                handleDelete={() => handleBtnDelete(chirp.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
