import React from "react";
import Plot from "./Plot";

function Analitika({ oprema }) {
  return (
    <div>
      <h1 className="display-4">Analitika</h1>
      <div className="korpa">
        <Plot oprema={oprema}></Plot>
      </div>
    </div>
  );
}

export default Analitika;
