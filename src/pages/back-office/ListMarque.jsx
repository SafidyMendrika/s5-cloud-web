import { useEffect, useState } from "react";
import { API_URL } from "../../context/UrlContext";

var dataMarque = [
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
  const [filteredMarques, setFilteredMarques] = useState([]);

  useEffect(() => {
    fetchMarques();
    setFilteredMarques(marques);
  }, [marques]);

  const fetchMarques = () => {
    // fetch(`${API_URL}/marques`, {
    //   method: "GET",
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setMarques(data);
    //   });
    setMarques(dataMarque);
  };

  const handleSearch = ({ target: { value } }) => {
    if (value === "") {
      setFilteredMarques(marques);
    } else {
      const result = marques.filter((marque) =>
        marque.nom_marque.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredMarques(result);
    }
  };

  const handleDelete = (id) => {
    // fetch(`${API_URL}/marques/${id}`, {
    //   method: "DELETE",
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     fetchMarques();
    //   });
    dataMarque = dataMarque.filter((marque) => marque.id_marque !== id);
    fetchMarques();
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
                      onChange={handleSearch}
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
            {filteredMarques &&
              filteredMarques.map((marque) => (
                <div
                  className="col-sm-6 col-lg-4 col-xl-3"
                  key={marque.id_marque}
                >
                  <div className="card overflow-hidden rounded-2">
                    <div className="position-relative d-flex justify-content-center align-items-center bg-light">
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
                        <button className="btn btn-outline-primary d-flex align-items-center">
                          <i className="ti ti-pencil me-2"></i> Modifier
                        </button>
                        <button
                          className="btn btn-outline-danger d-flex align-items-center"
                          onClick={() => handleDelete(marque.id_marque)}
                        >
                          <i className="ti ti-trash me-2"></i> Supprimer
                        </button>
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
