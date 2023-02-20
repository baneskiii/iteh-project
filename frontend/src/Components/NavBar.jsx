import { Link } from "react-router-dom";
function NavBar({ token, logout }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
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
          {token != null ? (
            <>
              {window.sessionStorage.getItem("auth_name") == "Admin" ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/admin">
                      Admin
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/admin/inbox">
                      Inbox
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/admin/analitika">
                      Analitika
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/oprema">
                      Ponuda
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/korpa">
                      Korpa
                    </Link>
                  </li>
                  <li className="nav-item active">
                    <Link className="nav-link" to="/kontakt">
                      Kontakt
                    </Link>
                  </li>
                </>
              )}

              <li className="nav-item active">
                <Link className="nav-link" to="/" onClick={logout}>
                  Odjavi se
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Uloguj se
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  Registruj se
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
