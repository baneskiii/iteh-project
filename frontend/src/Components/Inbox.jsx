import React from "react";
import { MDBDataTableV5 } from "mdbreact";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Inbox({ poruke }) {
  var navigate = useNavigate();
  console.log(poruke);
  const [dataTable, setDataTable] = useState({
    columns: [
      {
        label: "Ime",
        field: "ime",
        width: 150,
        attributes: {
          "aria-controls": "DataTable",
          "aria-label": "Name",
        },
      },
      {
        label: "Email",
        field: "email",
        width: 200,
      },
      {
        label: "Poruka",
        field: "poruka",
        width: 270,
      },
    ],
    rows: poruke.map((p) => {
      return {
        ime: p.ime,
        email: p.email,
        poruka: p.poruka,
      };
    }),
  });
  return (
    <div className="tabelaPoruka">
      {window.sessionStorage.getItem("auth_name") == "Admin" ? (
        <>
          <MDBDataTableV5
            hover
            entriesOptions={[5, 20, 25]}
            entries={5}
            pagesAmount={4}
            data={dataTable}
          />
        </>
      ) : (
        <>
          <h1 style={{ color: "red" }}>Nemate pristup</h1>
        </>
      )}
    </div>
  );
}

export default Inbox;
