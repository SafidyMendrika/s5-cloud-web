import { useEffect, useState } from "react";
import { dataProfil } from "../../data/front-office";
import { API_URL } from "../../context/UrlContext";
import { jwtDecode } from "jwt-decode";
import Skeleton from "react-loading-skeleton";
import { format } from "date-fns";

const Profil = () => {
  const [profil, setProfil] = useState(null);

  const authUserClientToken = localStorage.getItem("authUserClient");

  useEffect(() => {
    fetchProfil();
  }, []);

  const fetchProfil = () => {
    fetch(
      `${API_URL}/utilisateurs/${jwtDecode(authUserClientToken).idutilisateur}`,
      {
        method: "GET",
      }
    )
      .then((response) => {
        if (response.status === 200) {
          response.json().then((data) => {
            setProfil(data.data);
          });
        }
      })
      .catch((err) => console.error(err));

    // setProfil(dataProfil);
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
          {profil ? (
            <>
              <h3 className="mb-4">Informations personnelles</h3>
              <p className="mb-2 fs-4">
                <span className="fw-bold">Nom : </span> {profil.nom}
              </p>
              <p className="mb-2 fs-4">
                <span className="fw-bold">Date de naissance : </span>
                {format(profil.date, "dd/MM/yyyy")}
              </p>
              <p className="mb-2 fs-4">
                <span className="fw-bold">Genre : </span> {profil.genre}
              </p>
              <p className="mb-2 fs-4">
                <span className="fw-bold">Email : </span>
                {profil.email}
              </p>
              <p className="mb-2 fs-4">
                <span className="fw-bold">Telephone : </span>
                {profil.telephone}
              </p>
            </>
          ) : (
            <>
              <Skeleton height={20} className="mb-3 w-25" />
              <Skeleton height={20} className="mb-3 w-50" />
              <Skeleton height={20} className="mb-3 w-25" />
              <Skeleton height={20} className="mb-3 w-50" />
              <Skeleton height={20} className="mb-3 w-50" />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profil;
