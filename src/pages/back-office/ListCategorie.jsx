import { useEffect, useState } from "react";
import { API_URL } from "../../context/UrlContext";

var dataCategorie = [
  {
    id: 1,
    nom: "Compacte",
  },
  {
    id: 2,
    nom: "Berline",
  },
  {
    id: 3,
    nom: "SUV",
  },
  {
    id: 4,
    nom: "Coupé",
  },
  {
    id: 5,
    nom: "Monospace",
  },
];

const ListCategorie = () => {
  const [categories, setCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);

  const [nom, setNom] = useState("");
  const [updatedNom, setUpdatedNom] = useState("");

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    setFilteredCategories(categories);
  }, [categories]);

  const fetchCategories = () => {
    // fetch(`${API_URL}/categories`, {
    //   method: "GET",
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setCategories(data.data);
    //   });
    setCategories(dataCategorie);
  };

  const handleSearch = ({ target: { value } }) => {
    if (value === "") {
      setFilteredCategories(categories);
    } else {
      const result = categories.filter((categorie) =>
        categorie.nom.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredCategories(result);
    }
  };

  const handleAdd = () => {
    // fetch(`${API_URL}/categories`, {
    //   method: "POST",
    //   body: JSON.stringify({
    //     nom: nom,
    //   }),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     Array.prototype.push.apply(categories, [data.data]);
    //   });

    setNom("");
    Array.prototype.push.apply(categories, [
      {
        id: dataCategorie.length + 1,
        nom: nom,
      },
    ]);
    document.querySelector("#modalAdd .btn-close").click();
  };

  const handleUpdate = (id) => {
    // fetch(`${API_URL}/categories/${id}`, {
    //   method: "PUT",
    //   body: JSON.stringify({
    //     nom: updatedNom,
    //   }),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setCategories(
    //       categories.map((categorie) =>
    //         categorie.id === data.data.id ? data.data : categorie
    //       )
    //     );
    //   });

    setUpdatedNom("");
    setCategories(
      dataCategorie.map((categorie) =>
        categorie.id === id ? { id: id, nom: updatedNom } : categorie
      )
    );
    document.querySelector(`#modalUpdate-${id} .btn-close`).click();
  };

  const handleDelete = (id) => {
    // fetch(`${API_URL}/categories/${id}`, {
    //   method: "DELETE",
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setCategories(
    //       categories.filter((categorie) => categorie.id !== data.data.id)
    //     );
    //   });

    setCategories(categories.filter((categorie) => categorie.id !== id));
    document.querySelector(`#modalDelete-${id} .btn-close`).click();
  };

  return (
    <>
      <h3 className="mb-4 text-gray">Categories</h3>
      <div className="row">
        <div className="col-12">
          <div className="card w-100">
            <div className="card-body p-4">
              <h5 className="card-title fw-semibold mb-4">
                Liste des categories
              </h5>
              <div className="row mb-4">
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
                    <button
                      className="btn btn-outline-secondary d-flex align-items-center"
                      data-bs-toggle="modal"
                      data-bs-target="#modalAdd"
                    >
                      <i className="ti ti-plus me-2"></i> Nouveau
                    </button>

                    <div
                      className="modal fade"
                      id="modalAdd"
                      aria-labelledby="modalAddLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h1 className="modal-title fs-6" id="modalAddLabel">
                              Ajouter une categorie
                            </h1>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div className="modal-body">
                            <form className="row">
                              <div className="col-12">
                                <div className="mb-3">
                                  <label htmlFor="nom" className="form-label">
                                    Nom
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="nom"
                                    placeholder="Nom de la categorie"
                                    value={nom}
                                    onChange={(e) => setNom(e.target.value)}
                                  />
                                </div>
                              </div>
                              <div className="col-12 mb-3">
                                <button
                                  type="button"
                                  className="btn btn-primary w-100"
                                  onClick={handleAdd}
                                >
                                  Valider
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="table-responsive">
                <table className="table text-nowrap mb-0 align-middle">
                  <thead className="text-dark fs-4 table-light">
                    <tr>
                      <th className="border-bottom-0">ID</th>
                      <th className="border-bottom-0">Nom</th>
                      <th
                        className="border-bottom-0"
                        style={{ width: "400px" }}
                      >
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredCategories &&
                      filteredCategories.map((categorie) => (
                        <tr key={categorie.id}>
                          <td className="">{categorie.id}</td>
                          <td className="text-dark fw-semibold">
                            {categorie.nom}
                          </td>
                          <td className="">
                            <div className="d-flex align-items-center">
                              <button
                                className="btn btn-outline-info d-flex align-items-center"
                                data-bs-toggle="modal"
                                data-bs-target={`#modalUpdate-${categorie.id}`}
                                onClick={() => setUpdatedNom(categorie.nom)}
                              >
                                <i className="ti ti-pencil me-2"></i> Modifier
                              </button>
                              <button
                                className="btn btn-outline-danger d-flex align-items-center ms-2"
                                data-bs-toggle="modal"
                                data-bs-target={`#modalDelete-${categorie.id}`}
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

      {filteredCategories &&
        filteredCategories.map((categorie) => (
          <div key={categorie.id}>
            <div
              className="modal fade"
              id={`modalDelete-${categorie.id}`}
              aria-labelledby={`modalDeleteLabel-${categorie.id}}`}
              aria-hidden="true"
              key={categorie.id}
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1
                      className="modal-title fs-6"
                      id={`modalDeleteLabel-${categorie.id}}`}
                    >
                      Supprimer une categorie
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body text-center">
                    <p className="fs-5">
                      Voulez-vous vraiment supprimer cette categorie ?
                    </p>
                    <h5 className="fw-semibold text-primary mb-0">
                      {categorie.nom}
                    </h5>
                  </div>
                  <div className="modal-footer justify-content-center">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Annuler
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => handleDelete(categorie.id)}
                    >
                      Supprimer
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="modal fade" id={`modalUpdate-${categorie.id}`}>
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1
                      className="modal-title fs-6"
                      id={`modalUpdateLabel-${categorie.id}`}
                    >
                      Modifier une categorie
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <form className="row">
                      <div className="col-12">
                        <div className="mb-3">
                          <label htmlFor="nom" className="form-label">
                            Nom
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="nom"
                            placeholder="Nom de la categorie"
                            value={updatedNom}
                            onChange={(e) => setUpdatedNom(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-12 mb-3">
                        <button
                          type="button"
                          className="btn btn-primary w-100"
                          onClick={() => handleUpdate(categorie.id)}
                        >
                          Valider
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default ListCategorie;
