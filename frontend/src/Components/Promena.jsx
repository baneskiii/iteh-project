import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

function Promena({ id, kategorijaID }) {
  const [opremaData, setOpremaData] = useState({
    naziv: "",
    proizvodjac: "",
    cena: "",
    kolicina: 0,
    image: "",
    kategorija: kategorijaID,
    id: id,
  });

  useEffect(() => {
    const getRandomLists2 = async () => {
      try {
        const res = await axiosInstance.get(
          "http://127.0.0.1:8000/api/proizvod/" + id,
          {
            headers: {
              token: "Bearer " + window.sessionStorage.getItem("auth_token"),
            },
          }
        );
        console.log(res.data.data);
        setOpremaData(res.data.data);
      } catch (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log("Error", error.message);
        }
      }
    };
    getRandomLists2();
  }, [axiosInstance]);
  function handleInput(e) {
    let newOpremaData = opremaData;

    newOpremaData[e.target.name] = e.target.value;

    setOpremaData(newOpremaData);
    console.log(newOpremaData);
  }
  let navigate = useNavigate();
  function promeni(e) {
    e.preventDefault();
    axios
      .put("http://127.0.0.1:8000/api/proizvod/" + id, opremaData, {
        headers: {
          Authorization: `Bearer ${window.sessionStorage.getItem(
            "auth_token"
          )}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        alert("Uspesna izmena");
        window.location.reload();
      })
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data);

          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log("Error", error.message);
        }
      });
  }
  return (
    <div id="kontakt">
      {window.sessionStorage.getItem("auth_name") == "Admin" ? (
        <>
          <div id="container1">
            <div id="contact-box">
              <div id="left"></div>
              <div id="right">
                <h2>Izmeni</h2>
                <form onSubmit={promeni}>
                  <div className="input-group">
                    <input
                      className="input--style-3"
                      type="text"
                      placeholder="Naziv"
                      name="naziv"
                      onInput={handleInput}
                      defaultValue={opremaData.naziv}
                    />
                  </div>

                  <div className="input-group">
                    <input
                      className="input--style-3"
                      type="text"
                      placeholder="Proizvodjac"
                      name="proizvodjac"
                      onInput={handleInput}
                      defaultValue={opremaData.proizvodjac}
                    />
                  </div>
                  <div className="input-group">
                    <input
                      className="input--style-3"
                      type="text"
                      placeholder="Cena"
                      name="cena"
                      onInput={handleInput}
                      defaultValue={opremaData.cena}
                    />
                  </div>
                  <div className="input-group">
                    <input
                      className="input--style-3"
                      type="text"
                      placeholder="Slika (URL)"
                      name="image"
                      onInput={handleInput}
                      defaultValue={opremaData.image}
                    />
                  </div>

                  <div>
                    <select
                      className="input--style-3"
                      name="kategorija"
                      id="kategorija"
                      defaultValue={opremaData.kategorija.id}
                      onInput={handleInput}
                    >
                      <option className="input--style-3" value="1" id={1}>
                        Patike
                      </option>
                      <option className="input--style-3" value="2" id={2}>
                        Dukserica
                      </option>
                      <option className="input--style-3" value="3" id={3}>
                        Jakna
                      </option>

                      <option className="input--style-3" value="4" id={4}>
                        Lopta
                      </option>

                      <option className="input--style-3" value="5" id={5}>
                        Majica
                      </option>

                      <option className="input--style-3" value="6" id={6}>
                        Trenerka
                      </option>
                    </select>
                  </div>
                  <div className="p-t-10">
                    <button
                      className="btn btn--pill btn--green"
                      type="submit"
                      id="login"
                      name="login"
                    >
                      Potvrdi
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <h1 style={{ color: "red" }}>Nemate pristup</h1>
        </>
      )}
    </div>
  );
}

export default Promena;
