import { MDBDataTableV5 } from "mdbreact";
import { useState } from "react";

import React from "react";

function Inbox({ poruke }) {
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
      <MDBDataTableV5
        hover
        entriesOptions={[5, 20, 25]}
        entries={5}
        pagesAmount={4}
        data={dataTable}
      />
    </div>
  );
}

export default Inbox;
