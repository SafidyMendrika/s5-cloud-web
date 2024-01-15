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
                src={`${process.env.PUBLIC_URL + annonce.path_image}`}
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
              {annonce.status === 0 ? (
                <span className="badge bg-danger rounded-3 fw-semibold mb-2">
                  En attente
                </span>
              ) : annonce.status === 10 ? (
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
              {annonce.voiture.modele.nom}
            </h6>
            <button className="btn btn-outline-primary d-flex justify-content-center align-items-center w-100">
              <i className="ti ti-info-circle me-2"></i> Detail
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardAnnonce;
