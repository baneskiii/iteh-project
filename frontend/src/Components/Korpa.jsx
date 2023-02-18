import React, { useState } from 'react'
import OpremaKartica from './OpremaKartica'

function Korpa({oprema,onAdd,onRemove }) {

  return (
    <div> 
        <div className='svaOprema'>

            <table>
                <thead>
                    <tr><th>ID</th><th>NAZIV</th><th>CENA</th><th>KOLICINA</th></tr>
                </thead>
                <tbody>
                        {oprema.map((o)=>(<tr><td>{o.id}</td><td>{o.naziv}</td><td>{o.cena}</td><td>{o.kolicina}</td></tr>))}
                </tbody>
            </table>




        </div>
    </div>
  )
}

export default Korpa;