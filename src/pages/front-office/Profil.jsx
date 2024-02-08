import { useEffect, useState } from "react";

const Profil = () => {
  const [profil, setProfil] = useState(null);

  useEffect(() => {
    fetchProfil();
  }, []);

  const fetchProfil = () => {
    setProfil(null);
  };

  return (
    <div className="container py-5" style={{ minHeight: "90vh" }}>
      <h1 className="mb-5 text-center">Mon profil</h1>
      <div className="row align-items-center">
        <div className="col-12 col-md-6 mb-md-0 mb-5">
          <div className="d-flex justify-content-center">
            <img
              src={`${process.env.PUBLIC_URL}/images/svg/Profile Interface-cuate.svg`}
              width={300}
              alt=""
            />
          </div>
        </div>
        <div className="col-12 col-md-6">
          <h3 className="mb-4">Informations personnelles</h3>
          <p className="mb-2 fs-4">
            <span className="fw-bold">Nom : </span> John Doe
          </p>
          <p className="mb-2 fs-4">
            <span className="fw-bold">Prenom : </span> Doe
          </p>
          <p className="mb-2 fs-4">
            <span className="fw-bold">Date de naissance : </span>
            12 Decembre 2004
          </p>
          <p className="mb-2 fs-4">
            <span className="fw-bold">Genre : </span> Homme
          </p>
          <p className="mb-2 fs-4">
            <span className="fw-bold">Email : </span>
            toky@gmail.com
          </p>
          <p className="mb-2 fs-4">
            <span className="fw-bold">Telephone : </span>
            +261 34 05 960 00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profil;
