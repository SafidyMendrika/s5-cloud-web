const CardMarque = ({ marque, handleDelete }) => {
  return (
    <>
      <div className="col-sm-6 col-lg-4 col-xl-3" key={marque.id}>
        <div className="card overflow-hidden rounded-2">
          <div className="position-relative d-flex justify-content-center align-items-center bg-light">
            <div
              className="d-flex justify-content-center align-items-center overflow-hidden"
              style={{ height: "200px" }}
            >
              <img
                src={`${process.env.PUBLIC_URL + marque.path_image}`}
                className="card-img-top rounded-0"
                alt="..."
              />
            </div>
            <a
              href="{#}"
              className="bg-dark rounded-circle p-2 text-white d-inline-flex position-absolute bottom-0 end-0 mb-n3 me-3"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              data-bs-title="Info"
            >
              <i className="ti ti-eye fs-4"></i>
            </a>
          </div>
          <div className="card-body pt-3 p-4">
            <h6 className="fw-semibold fs-4">{marque.nom}</h6>
            <div className="d-flex align-items-center justify-content-between mb-4">
              <h6 className="fs-4 mb-0" style={{ color: "grey" }}>
                {marque.nombre_modeles} modeles
              </h6>
            </div>
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ gap: "5px" }}
            >
              <button className="btn btn-outline-primary d-flex align-items-center">
                <i className="ti ti-pencil me-2"></i> Modifier
              </button>
              <button
                className="btn btn-outline-danger d-flex align-items-center"
                onClick={() => handleDelete(marque.id)}
              >
                <i className="ti ti-trash me-2"></i> Supprimer
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardMarque;