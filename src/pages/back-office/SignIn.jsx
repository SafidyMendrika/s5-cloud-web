import { useEffect, useState } from "react";
import { API_URL } from "../../context/UrlContext";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    mdp: "",
  });
  const [message, setMessage] = useState("");
  const [isOnload, setIsOnload] = useState(false);

  useEffect(() => {
    localStorage.clear();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsOnload(true);

    fetch(`${API_URL}/utilisateurs/login`, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.status === 200) {
          response.json().then((data) => {
            if (data.code === 200) {
              localStorage.setItem("authUserAdmin", data.data.token);
              window.location.href = "/back-office/statistiques";
            } else if (data.code === 100) {
              setMessage(data.message);
            }
          });
        }
        setIsOnload(false);
      })
      .catch((err) => {
        console.log(err);
        setIsOnload(false);
      });
  };

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
                    <form onSubmit={(e) => handleSubmit(e)}>
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="example@example.com"
                          value={formData.email}
                          onChange={(e) => {
                            setFormData({ ...formData, email: e.target.value });
                          }}
                          id="email"
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="motdepasse" className="form-label">
                          Mot de passe
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          placeholder="********"
                          value={formData.mdp}
                          onChange={(e) => {
                            setFormData({ ...formData, mdp: e.target.value });
                          }}
                          id="motdepasse"
                        />
                      </div>
                      <p className="text-danger">{message}</p>
                      <button
                        type="submit"
                        className="btn btn-primary w-100 py-8 fs-4 mb-4 rounded-2"
                      >
                        {isOnload ? (
                          <div
                            className="spinner-border spinner-border-sm text-light"
                            style={{
                              "--bs-spinner-width": "1.25rem",
                              "--bs-spinner-height": "1.25rem",
                            }}
                            role="status"
                          >
                            <span className="visually-hidden">Loading...</span>
                          </div>
                        ) : (
                          <> Se connecter </>
                        )}
                      </button>
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
