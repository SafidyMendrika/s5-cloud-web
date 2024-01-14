import { useEffect, useState } from "react";

const dataMarque = [
  {
    id_marque: 1,
    nom_marque: "Toyota",
    path_image: "/images/marques/toyota.png",
    nombre_modeles: 23,
  },
  {
    id_marque: 2,
    nom_marque: "BMW",
    path_image: "/images/marques/bmw.png",
    nombre_modeles: 12,
  },
  {
    id_marque: 3,
    nom_marque: "Mercedes-Benz",
    path_image: "/images/marques/mercedes-benz.png",
    nombre_modeles: 31,
  },
  {
    id_marque: 4,
    nom_marque: "Honda",
    path_image: "/images/marques/honda.png",
    nombre_modeles: 4,
  },
  {
    id_marque: 5,
    nom_marque: "Ford",
    path_image: "/images/marques/ford.png",
    nombre_modeles: 10,
  },
];

const ListMarque = () => {
  const [marques, setMarques] = useState([]);

  useEffect(() => {
    fetchMarques();
  }, [marques]);

  const fetchMarques = () => {
    // fetch(`${API_URL}/marques`)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setMarques(data);
    //   });
    setMarques(dataMarque);
  };

  return (
    <>
      <h3 className="mb-4 text-gray">Marques</h3>
      <div className="row">
        <div className="col-12">
          <div className="card w-100">
            <div className="card-body p-4">
              <h5 className="card-title fw-semibold mb-4">Liste des marques</h5>
              <div className="row mb-3">
                <form className="col-sm-5 col-12 mb-sm-0 mb-3">
                  <div className="">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Entrer un mot clé"
                    />
                  </div>
                </form>
                <div className="col-2">
                  <div className="d-flex align-items-center">
                    <a
                      href="{#}"
                      className="btn btn-outline-secondary d-flex align-items-center"
                    >
                      <i className="ti ti-plus me-2"></i> Nouveau
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="row">
            {marques &&
              marques.map((marque) => (
                <div className="col-sm-6 col-lg-4 col-xl-3">
                  <div className="card overflow-hidden rounded-2">
                    <div
                      className="d-flex justify-content-center align-items-center bg-light"
                      style={{ cursor: "pointer" }}
                    >
                      <div
                        className="d-flex justify-content-center align-items-center overflow-hidden"
                        style={{ width: "220px", height: "200px" }}
                      >
                        <img
                          src={`${process.env.PUBLIC_URL + marque.path_image}`}
                          className="card-img-top rounded-0"
                          alt="..."
                        />
                      </div>
                    </div>
                    <div className="card-body pt-3 p-4">
                      <h6 className="fw-semibold fs-4">{marque.nom_marque}</h6>
                      <div className="d-flex align-items-center justify-content-between mb-4">
                        <h6 className="fs-4 mb-0" style={{ color: "grey" }}>
                          {marque.nombre_modeles} modeles
                        </h6>
                      </div>
                      <div
                        className="d-flex justify-content-center align-items-center"
                        style={{ gap: "5px" }}
                      >
                        <a
                          href="{#}"
                          className="btn btn-outline-primary d-flex align-items-center"
                        >
                          <i className="ti ti-pencil me-2"></i> Modifier
                        </a>
                        <a
                          href="{#}"
                          className="btn btn-outline-danger d-flex align-items-center"
                        >
                          <i className="ti ti-trash me-2"></i> Supprimer
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ListMarque;
