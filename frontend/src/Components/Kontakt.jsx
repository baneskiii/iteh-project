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
    <div>
      <div id="kontakt">
        <br />
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
                  Pošalji
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.3685367413696!2d20.407632415844947!3d44.81405618460795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a657d5dcc2a5d%3A0x9e7fd0802bac8bf7!2z0JHRg9C70LXQstCw0YAg0YPQvNC10YLQvdC-0YHRgtC4IDc1LCDQkdC10L7Qs9GA0LDQtA!5e0!3m2!1ssr!2srs!4v1676913420748!5m2!1ssr!2srs"
              width="550"
              height="300"
              style={{ border: "0", margin: 30 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="col-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.962450232436!2d20.451766915844672!3d44.80195388540668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a70069677deeb%3A0xa60fce981380ba12!2z0JLQuNGI0LXQs9GA0LDQtNGB0LrQsCA3LCDQkdC10L7Qs9GA0LDQtCAxMTA0MA!5e0!3m2!1ssr!2srs!4v1676915564335!5m2!1ssr!2srs"
              width="550"
              height="300"
              style={{ border: "0", margin: 30 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="col-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.9188617098644!2d20.39270191584471!3d44.80284218534802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a6f9c1afa26e7%3A0xafd597ddb7c8eeab!2z0IjRg9GA0LjRmNCwINCT0LDQs9Cw0YDQuNC90LAgNzksINCR0LXQvtCz0YDQsNC0!5e0!3m2!1ssr!2srs!4v1676915667208!5m2!1ssr!2srs"
              width="550"
              height="300"
              style={{ border: "0", margin: 30 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Kontakt;
