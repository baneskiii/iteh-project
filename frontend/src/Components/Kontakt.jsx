import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Kontakt() {
  const [messageData, setMessageData] = useState({
    ime: "",
    email: "",
    poruka: "",
  });

  function handleInput(e) {
    let newMessageData = messageData;
    newMessageData[e.target.name] = e.target.value;
    setMessageData(newMessageData);
    console.log(newMessageData);
  }
  let navigate = useNavigate();
  function handleSend(e) {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:8000/api/kontakt", messageData)
      .then((res) => {
        console.log(res);
        if (res.data.success === true) {
          alert("Poruka poslata!");
          navigate("/");
        } else {
          alert("Poruka nije poslata");
        }
      })
      .catch((error) => console.error(error.response.data));
  }
  return (
    <div id="kontakt">
      <div id="container1">
        <div id="contact-box">
          <div id="left"></div>
          <div id="right">
            <form onSubmit={handleSend}>
              <h2>Kontaktirajte nas</h2>
              <input
                type="text"
                className="field"
                placeholder="Vaše ime"
                name="ime"
                onInput={handleInput}
              />
              <input
                type="email"
                className="field"
                placeholder="Vaš e-mail"
                name="email"
                onInput={handleInput}
              />
              <textarea
                className="field area"
                placeholder="Poruka"
                name="poruka"
                onInput={handleInput}
              ></textarea>
              <button type="submit" className="btn btn-secondary">
                Posalji
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Kontakt;
