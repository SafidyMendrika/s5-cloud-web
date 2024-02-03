import { useState } from "react";
import { API_URL } from "../../context/UrlContext";

const ModalSignIn = () => {
  const [formData, setFormData] = useState({
    email: "root@email.com",
    mdp: "root",
  });
  const [message, setMessage] = useState("");
  const [isOnload, setIsOnload] = useState(false);

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
              localStorage.setItem("authUserClient", data.data.token);
              window.location.reload();
            } else if (data.code === 100) {
              setMessage(data.message);
            }
          });
        }
        setIsOnload(false);
      })
      .catch((err) => {
        console.error(err);
        setIsOnload(false);
      });
  };

  return (
    <div className="modal fade" id="modalSignIn">
      <div className="modal-dialog modal-md">
        <div className="modal-content bg-light">
          <div className="modal-body py-3 px-4">
            <button
              type="button"
              className="btn-close d-none"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            <a
              href="##"
              className="text-nowrap logo-img text-center d-block py-3 w-100"
            >
              <img
                src={`${process.env.PUBLIC_URL}/images/logos/logo.png`}
                width="180"
                alt=""
              />
            </a>
            <p className="text-center">
              Connectez-vous pour accéder à votre compte
            </p>
            <form
              className="needs-validation"
              onSubmit={(e) => handleSubmit(e)}
            >
              <div className="mb-3">
                <label htmlFor="inputEmail" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="example@example.com"
                  id="inputEmail"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                  }}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="inputMdp" className="form-label">
                  Mot de passe
                </label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="********"
                  id="inputMdp"
                  value={formData.mdp}
                  onChange={(e) => {
                    setFormData({ ...formData, mdp: e.target.value });
                  }}
                  required
                />
              </div>
              <p className="text-danger">{message}</p>
              <button
                type="submit"
                className="btn btn-primary w-100 py-8 fs-4 mb-3 rounded-2"
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
                  "Se connecter"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalSignIn;
