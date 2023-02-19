import "./App.css";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import Pocetna from "./Components/Pocetna";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Korpa from "./Components/Korpa";
import Kontakt from "./Components/Kontakt";
import Inbox from "./Components/Inbox";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
  function addToken(auth_token) {
    setToken(auth_token);
  }
  function refreshCart() {
    let u_korpi = oprema.filter((o) => o.kolicina > 0);
    setCartProducts(u_korpi);
    var suma = 0;
    cartProducts.forEach((o) => {
      suma += o.cena * o.kolicina;
    });
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
  return (
    <div>
      <BrowserRouter className="App">
        <NavBar> token = {token}</NavBar>
        <Routes>
          <Route path="/" element={<Pocetna></Pocetna>}></Route>
          <Route
            path="/Login"
            element={<Login addToken={addToken}></Login>}
          ></Route>
          <Route path="/Register" element={<Register></Register>}></Route>
          <Route
            path="/Oprema"
            element={
              <Oprema
                oprema={oprema}
                onAdd={addProduct}
                onRemove={removeProduct}
              ></Oprema>
            }
          ></Route>
          <Route
            path="/Korpa"
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
            path="/inbox"
            element={<Inbox poruke={poruke}></Inbox>}
          ></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
