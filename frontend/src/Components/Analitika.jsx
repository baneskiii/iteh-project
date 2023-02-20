import React from "react";
import Plot from "./Plot";

function Analitika({ oprema }) {
  return (
    <div>
      {window.sessionStorage.getItem("auth_name") == "Admin" ? (
        <>
          <h1 className="display-4">Analitika</h1>
          <div className="korpa">
            <Plot oprema={oprema}></Plot>
          </div>
        </>
      ) : (
        <>
          <h1 style={{ color: "red" }}>Nemate pristup</h1>
        </>
      )}
    </div>
  );
}

export default Analitika;
