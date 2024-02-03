const Header = ({ isConnected = false }) => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img
              src={`${process.env.PUBLIC_URL}/images/logos/logo.png`}
              width="150"
              alt=""
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggler"
            aria-controls="navbarToggler"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarToggler">
            <ul
              className="navbar-nav ms-auto me-4 mb-2 mb-lg-0"
              style={{ columnGap: "1rem" }}
            >
              <li className="nav-item">
                <a className="nav-link fs-4 fw-bold" href="/">
                  Accueil
                </a>
              </li>
              <li className="nav-item fs-4 fw-bold">
                <a className="nav-link" href="##">
                  Annonces
                </a>
              </li>
              {isConnected && (
                <>
                  <li className="nav-item fs-4 fw-bold">
                    <a className="nav-link" href="##">
                      Messages
                    </a>
                  </li>
                  <li className="nav-item fs-4 fw-bold">
                    <a className="nav-link" href="##">
                      Notifications
                    </a>
                  </li>
                </>
              )}
              <li className="nav-item fs-4 fw-bold">
                <a className="nav-link" href="##">
                  Contact
                </a>
              </li>
            </ul>
            {isConnected ? (
              <a
                className="btn btn-outline-primary rounded-pill fs-4"
                href="##"
              >
                Se deconnecter
              </a>
            ) : (
              <a
                href="##"
                className="btn btn-primary rounded-pill fs-4"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#modalSignIn"
                onClick={(e) => e.preventDefault()}
              >
                Se connecter
              </a>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
