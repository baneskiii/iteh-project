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

  function addToken(auth_token){
    setToken(auth_token);
}
  return (
  
    <div  >
     <BrowserRouter className="App">
    <NavBar></NavBar>
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
