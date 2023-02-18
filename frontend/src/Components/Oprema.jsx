import React, { useState } from 'react'
import OpremaKartica from './OpremaKartica'

function Oprema({oprema,onAdd,onRemove }) {
  const [sort, setSort] = useState(true);
  function sortAsc(){

    setSort(true);
  }
  function sortDesc(){

    setSort(false);
  }
  return (
    <div>
        <button className="sortbtn btn" onClick={sortAsc}>Sortiraj rastuće</button>
        <button className="sortbtn btn" onClick={sortDesc}>Sortiraj opadajuće</button>
        <div className='svaOprema'>

            {sort===true?
              <>
                {oprema
                     .sort((a, b) => a.price < b.price ? -1 : 1)
                    .map((t)=>(<OpremaKartica key={t.id} product={t}  onAdd={onAdd} onRemove={onRemove} ></OpremaKartica>))}
              </>
              :
              <>
                {oprema
                     .sort((a, b) => a.price > b.price ? -1 : 1)
                    .map((t)=>(<OpremaKartica key={t.id} product={t}  onAdd={onAdd} onRemove={onRemove}></OpremaKartica>))}
              </>
            }





        </div>
    </div>
  )
}

export default Oprema;