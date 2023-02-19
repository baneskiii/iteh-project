import { Link } from "react-router-dom";
function NavBar({ token, logout }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Vision Locker
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Početna{" "}
            </Link>
          </li>
          {token == null ? (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/Login">
                  Uloguj se{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Register">
                  Registruj se{" "}
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/Oprema">
                  Ponuda{" "}
                </Link>
                <Link className="nav-link" to="/Korpa">
                  Korpa{" "}
                </Link>
              </li>

              <li className="nav-item active">
                <Link className="nav-link" to="/" onClick={logout}>
                  Odjavi se{" "}
                </Link>
              </li>
            </>
          )}

          <li className="nav-item active">
            <Link className="nav-link" to="/kontakt">
              Kontakt{" "}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
