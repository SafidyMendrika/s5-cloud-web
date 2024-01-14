import { useEffect, useState } from "react";
import { API_URL } from "../../context/UrlContext";

var dataModele = [
  {
    id_modele: 1,
    nom_modele: "Toyota Corolla",
    marque: {
      id_marque: 1,
      nom_marque: "Toyota",
    },
  },
  {
    id_modele: 2,
    nom_modele: "BMW Serie 3",
    marque: {
      id_marque: 2,
      nom_marque: "BMW",
    },
  },
  {
    id_modele: 3,
    nom_modele: "Mercedes Classe C",
    marque: {
      id_marque: 3,
      nom_marque: "Mercedes-Benz",
    },
  },
  {
    id_modele: 4,
    nom_modele: "Honda Civic",
    marque: {
      id_marque: 4,
      nom_marque: "Honda",
    },
  },
  {
    id_modele: 5,
    nom_modele: "Ford Focus",
    marque: {
      id_marque: 5,
      nom_marque: "Ford",
    },
  },
];

const dataMarque = [
  {
    id_marque: 1,
    nom_marque: "Toyota",
  },
  {
    id_marque: 2,
    nom_marque: "BMW",
  },
  {
    id_marque: 3,
    nom_marque: "Mercedes-Benz",
  },
  {
    id_marque: 4,
    nom_marque: "Honda",
  },
  {
    id_marque: 5,
    nom_marque: "Ford",
  },
];

const ListModele = () => {
  const [modeles, setModeles] = useState([]);
  const [marques, setMarques] = useState([]);
  const [filteredModeles, setFilteredModeles] = useState([]);

  useEffect(() => {
    fetchModeles();
    setFilteredModeles(modeles);

    fetchMarques();
  }, [modeles]);

  const fetchModeles = () => {
    // fetch(`${API_URL}/modeles`, {
    //   method: "GET",
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setModeles(data);
    //   });
    setModeles(dataModele);
  };

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
      setFilteredModeles(modeles);
    } else {
      const result = modeles.filter((modele) =>
        modele.nom_modele.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredModeles(result);
    }
  };

  const handleDelete = (id) => {
    // fetch(`${API_URL}/modeles/${id}`, {
    //   method: "DELETE",
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     fetchModeles();
    //   });
    dataModele = dataModele.filter((modele) => modele.id_modele !== id);
    fetchModeles();
  };

  return (
    <>
      <h3 className="mb-4 text-gray">Modeles</h3>
      <div className="row">
        <div className="col-12">
          <div className="card w-100">
            <div className="card-body p-4">
              <h5 className="card-title fw-semibold mb-4">Liste des modeles</h5>
              <div className="row mb-4">
                <form className="col-sm-7 col-12 mb-sm-0 mb-3">
                  <div className="row">
                    <div className="col-6 pe-0">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Entrer un mot clé"
                        onChange={handleSearch}
                      />
                    </div>
                    <div className="col-6">
                      <select className="form-select">
                        <option value="0">Trier par marque</option>
                        {marques &&
                          marques.map((marque) => (
                            <option value={marque.id_marque}>
                              {marque.nom_marque}
                            </option>
                          ))}
                      </select>
                    </div>
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
              <div className="table-responsive">
                <table className="table text-nowrap mb-0 align-middle">
                  <thead className="text-dark fs-4 table-light">
                    <tr>
                      <th className="border-bottom-0">ID</th>
                      <th className="border-bottom-0">Nom</th>
                      <th className="border-bottom-0">Marque</th>
                      <th
                        className="border-bottom-0"
                        style={{ width: "400px" }}
                      >
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredModeles &&
                      filteredModeles.map((modele) => (
                        <tr key={modele.id_modele}>
                          <td className="">{modele.id_modele}</td>
                          <td className="text-dark fw-semibold">
                            {modele.nom_modele}
                          </td>
                          <td className="text-dark fw-semibold">
                            {modele.marque.nom_marque}
                          </td>
                          <td className="">
                            <div className="d-flex align-items-center">
                              <button className="btn btn-outline-info d-flex align-items-center">
                                <i className="ti ti-pencil me-2"></i> Modifier
                              </button>
                              <button
                                className="btn btn-outline-danger d-flex align-items-center ms-2"
                                onClick={() => handleDelete(modele.id_modele)}
                              >
                                <i className="ti ti-trash me-2"></i> Supprimer
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListModele;
