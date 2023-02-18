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
               
                     navigate("/Login");
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
        <div id='kontakt' >
            <div id='container1'>
                <div id='contact-box'>
                    <div id="left">

                    </div>
                    <div id="right">
                                <h2 className="title">Registruj se</h2>
                                <form onSubmit={handleRegister}>
                                    <div className="input-group">
                                        <input className="input--style-3" type="text" placeholder="Name" name="name" required onInput={handleInput}/>
                                    </div>
                                    <div className="input-group">
                                        <input className="input--style-3 js-datepicker" type="text" placeholder="Birthdate" name="birthdate"required onInput={handleInput}/>
                                        <i className="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i>
                                    </div>

                                    <div className="input-group">
                                        <input className="input--style-3" type="email" placeholder="Email" name="email" id="emailR"  required onInput={handleInput}/>
                                    </div>

                                    <div className="input-group">
                                        <input className="input--style-3" type="text" placeholder="Phone" name="phone"required onInput={handleInput}/>
                                    </div>
                                    <div className="input-group">
                                        <input className="input--style-3" type="password" placeholder="Password" name="password"required onInput={handleInput}/>
                                    </div>
                                    <div className="p-t-10">
                                        <button className="btn btn--pill btn--green" type="submit" id="register" name="register" > Potvrdi </button>
                                    </div>
                                    <br/><br/>
                                    <p><a href="/Login"  className='tekstForme'>Već postoji nalog</a></p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

    );
}

export default Register;