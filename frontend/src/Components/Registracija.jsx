import React from 'react';
import './LoginRegister.css';
import {useState} from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';


function Register() {
    const [userData,setUserData]=useState({
        email:"",
        name:"",
        phone:"",
        birthdate:"",
        password:""
    });
    function handleInput(e){ 
        let newUserData = userData; 
        newUserData[e.target.name]=e.target.value;
        console.log(newUserData);
        setUserData(newUserData); 
    }
    let navigate = useNavigate();
    function handleRegister(e){

            e.preventDefault();   
            axios
                .post("http://127.0.0.1:8000/api/register", userData )
                .then((res)=>{  
                    console.log(res.data);
               
                     navigate("/login");
                })
                .catch(function (error) {
                    if (error.response) {
                    
                      console.log(error.response.data);
                      console.log(error.response.status);
                      console.log(error.response.headers);
                    } else if (error.request) {
                     
                      console.log(error.request);
                    } else {
                      
                      console.log('Error', error.message);
                    }

                  });
    }
    return (
        <div className='register'>
            <div className="page-wrapper bg-gra-01 p-t-180 p-b-100 font-poppins">
                <div className="wrapper wrapper--w780">
                    <div className="card card-3">
                        <div className="card-heading"></div>
                            <div className="card-body">
                                <h2 className="title">Registruj se</h2>
                                <form onSubmit={handleRegister}>
                                    <div className="input-group">
                                        <input className="input--style-3" type="text" placeholder="Ime" name="ime" required onInput={handleInput}/>
                                    </div>
                                    <div className="input-group">
                                        <input className="input--style-3 js-datepicker" type="text" placeholder="Rođendan" name="Rođendan"required onInput={handleInput}/>
                                        <i className="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i>
                                    </div>

                                    <div className="input-group">
                                        <input className="input--style-3" type="email" placeholder="Email" name="Email" id="emailR"  required onInput={handleInput}/>
                                    </div>

                                    <div className="input-group">
                                        <input className="input--style-3" type="text" placeholder="Telefon" name="Telefon"required onInput={handleInput}/>
                                    </div>
                                    <div className="input-group">
                                        <input className="input--style-3" type="password" placeholder="Lozinka" name="Lozinka"required onInput={handleInput}/>
                                    </div>
                                    <div className="p-t-10">
                                        <button className="btn btn--pill btn--green" type="submit" id="register" name="register" >Potvrdi</button>
                                    </div>
                                    <br/><br/>
                                    <p><a href="/Login"  className='tekstForme'>Već postoji nalog</a></p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    );
}

export default Register;