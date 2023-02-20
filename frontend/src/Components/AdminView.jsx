import React from "react";
import { BsFillTrashFill, BsPencilFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function AdminView({ oprema, deleteOprema, setID }) {
  let navigate = useNavigate();
  function editOprema(id, kategorijaID) {
    setID(id, kategorijaID);
    navigate("/admin/promeni");
  }
  return (
    <div>
      {window.sessionStorage.getItem("auth_name") == "Admin" ? (
        <>
          <h1 className="display-4">Admin prikaz</h1>
          <div className="korpa">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>NAZIV</th>
                  <th>PROIZVODJAC</th>
                  <th>CENA</th>
                  <th>OBRISI</th>
                  <th>IZMENI</th>
                </tr>
              </thead>
              <tbody>
                {oprema.map((o) => (
                  <tr key={o.id}>
                    <td>{o.id}</td>
                    <td>{o.naziv}</td>
                    <td>{o.proizvodjac}</td>
                    <td>{o.cena}</td>
                    <td>
                      <button
                        className="btn"
                        onClick={() => deleteOprema(o.id)}
                      >
                        <BsFillTrashFill></BsFillTrashFill>
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn"
                        onClick={() => editOprema(o.id, o.kategorija.id)}
                      >
                        <BsPencilFill></BsPencilFill>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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

export default AdminView;
