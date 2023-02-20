import "./App.css";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import Pocetna from "./Components/Pocetna";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Korpa from "./Components/Korpa";
import Kontakt from "./Components/Kontakt";
import Inbox from "./Components/Inbox";
import AdminView from "./Components/AdminView";
import Promena from "./Components/Promena";
import Analitika from "./Components/Analitika";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Oprema from "./Components/Oprema";
import "./Components/LoginRegister.css";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

function App() {
  const [token, setToken] = useState();
  const [cartNum, setCartNum] = useState(0);
  const [cartProducts, setCartProducts] = useState([]);
  const [sum, setSumPrice] = useState(0);
  const [oprema, setOprema] = useState([]);
  const [poruke, setPoruke] = useState([]);
  const [ID, setID] = useState(0);
  const [kategorijaID, setKategorijaID] = useState(0);
  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axiosInstance.get(
          "http://127.0.0.1:8000/api/proizvod",
          {
            headers: {
              token: "Bearer " + window.sessionStorage.getItem("auth_token"),
            },
          }
        );
        setOprema(res.data.data);
        console.log(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [axiosInstance]);
  useEffect(() => {
    const getRandomLists2 = async () => {
      try {
        const res = await axiosInstance.get(
          "http://127.0.0.1:8000/api/poruke",
          {
            headers: {
              token: "Bearer " + window.sessionStorage.getItem("auth_token"),
            },
          }
        );
        setPoruke(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists2();
  }, [axiosInstance]);
  function handleLogout() {
    window.sessionStorage.setItem("auth_token", null);
    window.sessionStorage.setItem("auth_name", null);
    window.location("/");
  }
  function addToken(auth_token) {
    setToken(auth_token);
  }
  function refreshCart() {
    let u_korpi = oprema.filter((o) => o.kolicina > 0);
    setCartProducts(u_korpi);
    var suma = 0;
    if (u_korpi.length === 1) {
      suma = u_korpi[0].cena * u_korpi[0].kolicina;
    } else {
      for (var x = 0; x < u_korpi.length; x++) {
        suma += u_korpi[x].cena * u_korpi[x].kolicina;
      }
      /*cartProducts.forEach((o) => {
        suma += o.cena * o.kolicina;
      });*/
    }

    console.log(suma);
    setSumPrice(suma);
  }
  function jeUKorpi(id) {
    var postoji = 0;
    cartProducts.forEach((o) => {
      if (o.id === id) {
        postoji = 1;
      }
    });

    return postoji;
  }
  function addProduct(id) {
    console.log(id);
    setCartNum(cartNum + 1);

    oprema.forEach((o) => {
      if (o.id === id) {
        o.kolicina++;

        console.log(sum);
      }
    });
    refreshCart();
  }

  function removeProduct(id) {
    if (jeUKorpi(id) === 1) {
      setCartNum(cartNum - 1);
      oprema.forEach((o) => {
        if (o.id === id) {
          if (o.kolicina === 0) {
            return;
          } else {
            o.kolicina--;
          }
        }
      });
      refreshCart();
    }
  }

  function deleteOprema(id) {
    axios
      .delete("http://127.0.0.1:8000/api/proizvod/" + id, {
        headers: {
          Authorization: `Bearer ${window.sessionStorage.getItem(
            "auth_token"
          )}`,
        },
      })
      .then((res) => {
        const token = window.sessionStorage.getItem("auth_token");
        window.location.reload();
        window.sessionStorage.setItem("auth_token", token);
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

  function IDIzmena(id, kategorijaID) {
    setID(id);
    setKategorijaID(kategorijaID);
  }

  return (
    <div>
      <BrowserRouter className="App">
        <NavBar token={token} logout={handleLogout}></NavBar>
        <Routes>
          <Route path="/" element={<Pocetna></Pocetna>}></Route>
          <Route
            path="/login"
            element={<Login addToken={addToken}></Login>}
          ></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route
            path="/oprema"
            element={
              <Oprema
                oprema={oprema}
                onAdd={addProduct}
                onRemove={removeProduct}
              ></Oprema>
            }
          ></Route>
          <Route
            path="/korpa"
            element={
              <Korpa
                oprema={cartProducts}
                onAdd={addProduct}
                onRemove={removeProduct}
                sum={sum}
              ></Korpa>
            }
          ></Route>
          <Route path="/kontakt" element={<Kontakt></Kontakt>}></Route>
          <Route
            path="/admin/inbox"
            element={<Inbox poruke={poruke}></Inbox>}
          ></Route>
          <Route
            path="/admin"
            element={
              <AdminView
                oprema={oprema}
                deleteOprema={deleteOprema}
                setID={IDIzmena}
              ></AdminView>
            }
          ></Route>
          <Route
            path="/admin/promeni"
            element={<Promena id={ID} kategorijaID={kategorijaID}></Promena>}
          ></Route>
          <Route
            path="/admin/analitika"
            element={<Analitika oprema={oprema}></Analitika>}
          ></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
