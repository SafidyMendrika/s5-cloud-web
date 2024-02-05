import { format } from "date-fns";

const CardAnnonce = ({ annonce, nombreFavoris = 0, hasDetail = true }) => {
  const handleFavoris = (e) => {
    e.target.classList.toggle("active");
  };

  return (
    <>
      <div className="col-sm-6 col-xl-4">
        <div className="card overflow-hidden rounded-2">
          <div className="position-relative d-flex justify-content-center align-items-center bg-light">
            <div
              className="d-flex justify-content-center align-items-center overflow-hidden w-100"
              style={{ height: "200px" }}
            >
              <img
                src={annonce.photoAnnonces[0].path}
                className="card-img-top rounded-0 h-100 w-100"
                style={{ objectFit: "cover" }}
                alt="..."
              />
            </div>
            <a
              href="##"
              className="bg-dark rounded p-2 py-1 text-white d-inline-flex position-absolute bottom-0 end-0 mb-n3 me-4 fw-bold"
            >
              {annonce.prix.toLocaleString("en-US")} Ar
            </a>
          </div>
          <div className="card-body pt-3 p-4">
            <h6 className="fw-semibold fs-4">Par {annonce.utilisateur.nom}</h6>
            <div className="d-flex align-items-center justify-content-between mb-3 flex-wrap">
              <h6 className="fs-4 mb-2" style={{ color: "grey" }}>
                {format(annonce.dateAnnonce, "dd/MM/yyyy")} -{" "}
                {format(annonce.dateAnnonce, "HH:mm")}
              </h6>
              <span
                className="badge rounded-3 fw-semibold mb-2"
                style={{ background: "var(--bs-teal)" }}
              >
                {nombreFavoris} &nbsp; &#10084;
              </span>
            </div>
            <h6 className="text-info mb-3 fw-semi-bold">
              {annonce.modele.nom}
            </h6>
            {hasDetail && (
              <button
                className="btn btn-outline-primary d-flex justify-content-center align-items-center w-100"
                data-bs-toggle="modal"
                data-bs-target={`#modalDetail-${annonce.id}`}
                onClick={(e) => e.preventDefault()}
              >
                <i className="ti ti-info-circle me-2"></i> Detail
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="modal fade" id={`modalDetail-${annonce.id}`}>
        <div className="modal-dialog modal-xl">
          <div className="modal-content overflow-hidden">
            <div className="modal-body p-0">
              <button
                type="button"
                className="btn-close d-none"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
              <div className="row">
                <div className="col-lg-6 col-12 mb-lg-0 mb-3 p-0 bg-light">
                  <div
                    id={`carousel-${annonce.id}`}
                    className="carousel slide"
                    style={{ height: "450px" }}
                  >
                    <div className="carousel-inner h-100">
                      {annonce.photoAnnonces.map((photo, index) => (
                        <div
                          className={`carousel-item h-100 ${
                            index === 0 ? "active" : ""
                          }`}
                          key={index}
                        >
                          <img
                            src={photo.path}
                            className="d-block w-100 h-100"
                            style={{ objectFit: "cover" }}
                            alt="..."
                          />
                        </div>
                      ))}
                    </div>
                    <button
                      className="carousel-control-prev"
                      type="button"
                      data-bs-target={`#carousel-${annonce.id}`}
                      data-bs-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                      className="carousel-control-next"
                      type="button"
                      data-bs-target={`#carousel-${annonce.id}`}
                      data-bs-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>

                <div className="col-lg-6 col-12 p-7 pt-lg-7 pt-0">
                  <div className="d-flex align-items-center justify-content-between">
                    <h1 className="fw-bold">
                      Annonce de {annonce.utilisateur.nom}
                    </h1>
                    {localStorage.getItem("authUserClient") && (
                      <h2 className="icon-favoris" onClick={handleFavoris}>
                        <i className="ti ti-123 ti-heart me-3"></i>
                      </h2>
                    )}
                  </div>
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
                        &nbsp; : <br />{" "}
                        {format(annonce.dateAnnonce, "dd/MM/yyyy")} -{" "}
                        {format(annonce.dateAnnonce, "HH:mm")}
                      </p>

                      <p className="fs-4 mt-3 mb-0">
                        <span className="fw-bold text-decoration-underline text-dark">
                          Nombre de favoris
                        </span>{" "}
                        &nbsp; : &nbsp;
                        {nombreFavoris}
                      </p>

                      <p className="fs-4">
                        <span className="fw-bold text-decoration-underline text-dark">
                          Description
                        </span>{" "}
                        &nbsp; : <br /> {annonce.description}
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
                        {annonce.moteur.nom}
                      </p>
                      <p className="fs-4 mb-0">
                        <span className="fw-bold">Vitesse : </span>
                        {annonce.vitesse.nom}
                      </p>
                      <p className="fs-4 mb-0">
                        <span className="fw-bold">Energie : </span>
                        {annonce.energie.nom}
                      </p>
                    </div>
                    <div className="d-flex mt-4">
                      <button className="btn btn-outline-primary d-flex justify-content-center align-items-center">
                        {false ? (
                          <div
                            className="spinner-border spinner-border-sm"
                            role="status"
                          >
                            <span className="visually-hidden">Loading...</span>
                          </div>
                        ) : (
                          "Interessé"
                        )}
                      </button>
                      <button className="btn btn-outline-dark d-flex justify-content-center align-items-center ms-2">
                        {false ? (
                          <div
                            className="spinner-border spinner-border-sm"
                            role="status"
                          >
                            <span className="visually-hidden">Loading...</span>
                          </div>
                        ) : (
                          "Contacter"
                        )}
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
