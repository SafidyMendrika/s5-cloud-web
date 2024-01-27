const CardAnnonce = ({ annonce }) => {
  return (
    <>
      <div className="col-sm-6 col-xl-4">
        <div className="card overflow-hidden rounded-2">
          <div className="position-relative d-flex justify-content-center align-items-center bg-light">
            <div
              className="d-flex justify-content-center align-items-center overflow-hidden"
              style={{ height: "200px" }}
            >
              <img
                src={annonce.pathImage}
                className="card-img-top rounded-0"
                alt="..."
              />
            </div>
            <a
              href="{#}"
              className="bg-dark rounded p-2 py-1 text-white d-inline-flex position-absolute bottom-0 end-0 mb-n3 me-4 fw-bold"
            >
              {annonce.prix.toLocaleString("en-US")} Ar
            </a>
          </div>
          <div className="card-body pt-3 p-4">
            <h6 className="fw-semibold fs-4">Par {annonce.utilisateur.nom}</h6>
            <div className="d-flex align-items-center justify-content-between mb-3 flex-wrap">
              <h6 className="fs-4 mb-2" style={{ color: "grey" }}>
                {annonce.dateAnnonce}
              </h6>
              {annonce.etat === 0 ? (
                <span className="badge bg-danger rounded-3 fw-semibold mb-2">
                  En attente
                </span>
              ) : annonce.etat === 10 ? (
                <span className="badge bg-success rounded-3 fw-semibold mb-2">
                  Validé
                </span>
              ) : (
                <span className="badge bg-secondary rounded-3 fw-semibold mb-2">
                  Vendu
                </span>
              )}
            </div>
            <h6 className="text-info mb-3 fw-semi-bold">
              {annonce.modele.nom}
            </h6>
            <button
              className="btn btn-outline-primary d-flex justify-content-center align-items-center w-100"
              data-bs-toggle="modal"
              data-bs-target={`#modalDetail-${annonce.id}`}
              onClick={(e) => e.preventDefault()}
            >
              <i className="ti ti-info-circle me-2"></i> Detail
            </button>
          </div>
        </div>
      </div>

      <div className="modal fade" id={`modalDetail-${annonce.id}`}>
        <div className="modal-dialog modal-xl">
          <div className="modal-content overflow-hidden">
            <div className="modal-body p-0">
              <div className="row">
                <div className="col-lg-5 col-12 mb-lg-0 mb-3 p-0 bg-light">
                  <img
                    src={annonce.pathImage}
                    className="w-100 h-100"
                    style={{ objectFit: "contain" }}
                    alt="..."
                  />
                </div>
                <div className="col-lg-7 col-12 p-7 pt-lg-7 pt-0">
                  <h1 className="fw-bold">
                    Annonce de {annonce.utilisateur.nom}
                  </h1>
                  <h4
                    className="mb-4 fw-semi-bold d-flex align-items-center"
                    style={{ color: "var(--bs-muted)" }}
                  >
                    <span>{annonce.modele.nom}</span>
                    <span
                      style={{
                        borderRadius: "50%",
                        width: "10px",
                        height: "10px",
                        display: "inline-block",
                        background: "var(--bs-muted)",
                      }}
                      className="mx-3"
                    ></span>
                    <span className="fs-6">
                      {annonce.prix.toLocaleString("en-US")} Ar
                    </span>
                  </h4>
                  <div className="row mb-3">
                    <div className="col-lg-6">
                      <p className="fs-4 mb-0">
                        <span className="fw-bold text-decoration-underline text-dark">
                          Date d'annonce
                        </span>
                        &nbsp; : {annonce.dateAnnonce}
                      </p>
                      {annonce.dateValidation && (
                        <p className="fs-4 mb-0">
                          <span className="fw-bold text-decoration-underline text-dark">
                            Date de validation
                          </span>
                          &nbsp; : {annonce.dateValidation}
                        </p>
                      )}

                      <p className="fs-4 mt-3 mb-0">
                        <span className="fw-bold text-decoration-underline text-dark">
                          Etat
                        </span>{" "}
                        &nbsp; : &nbsp;
                        {annonce.etat === 0 ? (
                          <>En attente</>
                        ) : annonce.etat === 10 ? (
                          <>Validé</>
                        ) : (
                          <>Vendu</>
                        )}
                      </p>

                      <p className="fs-4">
                        <span className="fw-bold text-decoration-underline text-dark">
                          Description
                        </span>{" "}
                        &nbsp; : &nbsp; <br /> {annonce.description}
                      </p>
                    </div>
                    <div className="col-lg-6">
                      <h5 className="text-decoration-underline">
                        A propos de voiture
                      </h5>
                      <p className="fs-4 mb-0">
                        <span className="fw-bold">Marque : </span>
                        {annonce.modele.marque.nom}
                      </p>
                      <p className="fs-4 mb-0">
                        <span className="fw-bold">Categorie : </span>
                        {annonce.modele.categorie.nom}
                      </p>
                      <p className="fs-4 mb-0">
                        <span className="fw-bold">Modele : </span>
                        {annonce.modele.nom}
                      </p>
                      <p className="fs-4 mb-0">
                        <span className="fw-bold">Moteur : </span>
                        Moteur 2 temps
                      </p>
                      <p className="fs-4 mb-0">
                        <span className="fw-bold">Vitesse : </span>
                        Automatique
                      </p>
                      <p className="fs-4 mb-0">
                        <span className="fw-bold">Energie : </span>
                        Essence
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="d-flex">
                      {annonce.etat === 0 && (
                        <button
                          className="btn btn-success d-flex justify-content-center align-items-center me-2"
                          onClick={(e) => e.preventDefault()}
                        >
                          {" "}
                          Valider
                        </button>
                      )}
                      <button
                        className="btn btn-danger d-flex justify-content-center align-items-center"
                        onClick={(e) => e.preventDefault()}
                      >
                        Supprimer
                      </button>
                    </div>
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

export default CardAnnonce;
