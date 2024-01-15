import { useEffect, useState } from "react";
import CardAnnonce from "../../components/back-office/CardAnnonce";

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
    prix: 10000000,
    dateAnnonce: "2021-09-01",
    status: 0,
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
    prix: 15000000,
    dateAnnonce: "2021-09-02",
    status: 10,
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
    prix: 250000000,
    dateAnnonce: "2021-09-03",
    status: 20,
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
    prix: 200000000,
    dateAnnonce: "2021-09-04",
    status: 0,
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
    prix: 100000000,
    dateAnnonce: "2021-09-05",
    status: 10,
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
                <form className="col-sm-7 col-12 mb-sm-0 mb-3">
                  <div className="row">
                    <div className="col-6 pe-0">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Entrer un mot clé"
                      />
                    </div>
                    <div className="col-6">
                      <select className="form-select">
                        <option value="">Trier par status</option>
                        <option value="0">En attente</option>
                        <option value="10">Validé</option>
                        <option value="20">Vendu</option>
                      </select>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="row">
            {filteredAnnonces &&
              filteredAnnonces.map((annonce) => (
                <CardAnnonce annonce={annonce} key={annonce.id} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Annonce;
