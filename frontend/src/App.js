import './App.css';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import Pocetna from './Components/Pocetna';
import Login  from './Components/Login';
import Registracija from './Components/Registracija'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';



function App() {
  const[token,setToken] = useState();
  const [cartNum, setCartNum] = useState(0); 
  const [cartProducts, setCartProducts] = useState([]);
  const [sum, setSumPrice] = useState(0); 
  const [oprema, setOprema] = useState([ ]); 

  function addToken(auth_token){
    setToken(auth_token);
}
function refreshCart() {
  let u_korpi = oprema.filter((o) => o.amount > 0);
  setCartProducts(u_korpi);
  var suma=0;
  cartProducts.forEach((o)=>{
    suma+=o.price*o.amount;
  })
  setSumPrice(suma);
}
function jeUKorpi(id){
  var postoji=0;
  cartProducts.forEach((o) => {
    if (o.id === id) {

      postoji=1;
    }
  });

  return postoji;
}
function addProduct( id) {

  setCartNum(cartNum + 1);

  oprema.forEach((o) => {
    if (o.id === id) {
      o.amount++;
      setSumPrice(sum+o.price);
    }
  });
  refreshCart();

}

function removeProduct( id) {

  if(jeUKorpi(id)===1){

    setCartNum(cartNum - 1);
    oprema.forEach((o) => {
      if (o.id === id) {
        if(o.amount === 0){
          return;
        }else{
          o.amount--; 
        }
      }
    });
    refreshCart();
  }
}
  return (
  
    <div  >
     <BrowserRouter className="App">
    <NavBar> token = {token}</NavBar>
    <Routes>
            <Route path="/" element={ <Pocetna></Pocetna>}></Route>
            <Route path="/Login" element={ <Login  addToken={addToken}  ></Login>}></Route>
            <Route path="/Registracija" element={ <Registracija ></Registracija>}></Route>
        </Routes>
    <Footer></Footer>
    </BrowserRouter>
</div>

  );
}

export default App;
