import React, { useState } from 'react'
import {BsPlusLg, BsDashLg} from "react-icons/bs"

function Korpa({oprema,onAdd,onRemove }) {

  return (
    <div> 
        <div className='korpa'>

            <table>
                <thead>
                <tr><th>ID</th><th>NAZIV</th><th>CENA</th><th>KOLICINA</th><th>DODAJ</th><th>IZBACI</th></tr>
                </thead>
                <tbody>
                        {oprema.map((o)=>(<tr><td>{o.id}</td><td>{o.naziv}</td><td>{o.cena}</td><td>{o.kolicina}</td><td><button className="btn" onClick={() => onAdd(o.id)}><BsPlusLg/></button></td><td><button className="btn" onClick={() => onRemove(o.id)}><BsDashLg/></button></td></tr>))}
                </tbody>
            </table>




        </div>
    </div>
  )
}

export default Korpa;