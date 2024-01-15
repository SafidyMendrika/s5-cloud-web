import { useEffect, useState } from "react";

var dataAnnonce = [
  {
    id: 1,
    utilisateur: {
      id: 1,
      nom: "John",
    },
    voiture: {
      id: 1,
      modele: {
        id: 1,
        nom: "Toyota Corolla",
        marque: {
          id: 1,
          nom: "Toyota",
        },
      },
    },
    dateAnnonce: "2021-09-01",
    status: "En attente",
    path_image: "/images/annonces/annonce1.png",
  },
  {
    id: 2,
    utilisateur: {
      id: 2,
      nom: "Jane",
    },
    voiture: {
      id: 2,
      modele: {
        id: 2,
        nom: "BMW Serie 3",
        marque: {
          id: 2,
          nom: "BMW",
        },
      },
    },
    dateAnnonce: "2021-09-02",
    status: "En attente",
    path_image: "/images/annonces/annonce2.png",
  },
  {
    id: 3,
    utilisateur: {
      id: 3,
      nom: "Jack",
    },
    voiture: {
      id: 3,
      modele: {
        id: 3,
        nom: "Mercedes Classe C",
        marque: {
          id: 3,
          nom: "Mercedes-Benz",
        },
      },
    },
    dateAnnonce: "2021-09-03",
    status: "En attente",
    path_image: "/images/annonces/annonce3.png",
  },
  {
    id: 4,
    utilisateur: {
      id: 4,
      nom: "Jill",
    },
    voiture: {
      id: 4,
      modele: {
        id: 4,
        nom: "Honda Civic",
        marque: {
          id: 4,
          nom: "Honda",
        },
      },
    },
    dateAnnonce: "2021-09-04",
    status: "En attente",
    path_image: "/images/annonces/annonce4.png",
  },
  {
    id: 5,
    utilisateur: {
      id: 5,
      nom: "James",
    },
    voiture: {
      id: 5,
      modele: {
        id: 5,
        nom: "Ford Focus",
        marque: {
          id: 5,
          nom: "Ford",
        },
      },
    },
    dateAnnonce: "2021-09-05",
    status: "En attente",
    path_image: "/images/annonces/annonce5.png",
  },
];

const Annonce = () => {
  const [annonces, setAnnonces] = useState([]);
  const [filteredAnnonces, setFilteredAnnonces] = useState([]);

  useEffect(() => {
    fetchAnnonces();
  }, []);

  useEffect(() => {
    setFilteredAnnonces(annonces);
  }, [annonces]);

  const fetchAnnonces = () => {
    // fetch(`${API_URL}/annonces`, {
    //   method: "GET",
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setAnnonces(data);
    //   });
    setAnnonces(dataAnnonce);
  };

  return (
    <>
      <h3 className="mb-4 text-gray">Annonces</h3>
      <div className="row">
        <div className="col-12">
          <div className="card w-100">
            <div className="card-body p-4">
              <h5 className="card-title fw-semibold mb-4">
                Liste des annonces
              </h5>
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
            {filteredAnnonces &&
              filteredAnnonces.map((annonce) => (
                <div className="col-sm-6 col-lg-4 col-xl-3" key={annonce.id}>
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
                    </div>
                    <div className="card-body pt-3 p-4">
                      <h6 className="fw-semibold fs-4">
                        Par {annonce.utilisateur.nom}
                      </h6>
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <h6 className="fs-4 mb-0" style={{ color: "grey" }}>
                          {annonce.dateAnnonce}
                        </h6>
                      </div>
                      <div className="d-flex justify-content-between flex-column">
                        <h6 className="text-info mb-3 fw-semi-bold">
                          {annonce.voiture.modele.nom}
                        </h6>

                        <button className="btn btn-outline-primary d-flex justify-content-center align-items-center">
                          <i className="ti ti-info-circle me-2"></i> Detail
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

export default Annonce;
