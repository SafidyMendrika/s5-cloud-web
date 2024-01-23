const SignIn = () => {
  return (
    <>
      <div
        className="page-wrapper"
        id="main-wrapper"
        data-layout="vertical"
        data-navbarbg="skin6"
        data-sidebartype="full"
        data-sidebar-position="fixed"
        data-header-position="fixed"
      >
        <div className="position-relative overflow-hidden radial-gradient min-vh-100 d-flex align-items-center justify-content-center">
          <div className="d-flex align-items-center justify-content-center w-100">
            <div className="row justify-content-center w-100">
              <div className="col-md-8 col-lg-6 col-xxl-3">
                <div className="card mb-0">
                  <div className="card-body">
                    <a
                      href="./index.html"
                      className="text-nowrap logo-img text-center d-block py-3 w-100"
                    >
                      <img
                        src={`${process.env.PUBLIC_URL}/images/logos/logo.png`}
                        width="180"
                        alt=""
                      />
                    </a>
                    <p className="text-center">
                      Connectez-vous pour continuer à Gascar Admin.
                    </p>
                    <form>
                      <div className="mb-3">
                        <label for="email" className="form-label">
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="example@example.com"
                          id="email"
                        />
                      </div>
                      <div className="mb-4">
                        <label for="motdepasse" className="form-label">
                          Mot de passe
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          placeholder="********"
                          id="motdepasse"
                        />
                      </div>
                      <a
                        href="/back-office"
                        className="btn btn-primary w-100 py-8 fs-4 mb-4 rounded-2"
                      >
                        Se connecter
                      </a>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
