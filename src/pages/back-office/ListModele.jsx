import { Fragment, useEffect, useState } from "react";
import { dataModele, dataMarque, dataCategorie } from "../../data/back-office";
import { API_URL } from "../../context/UrlContext";
import Pagination from "../../components/back-office/Pagination";

const EMPTY_MODELE = {
  id: null,
  nom: "",
  marque: { id: null, nom: "" },
  categorie: { id: null, nom: "" },
};

const ListModele = () => {
  const [modeles, setModeles] = useState([]);
  const [marques, setMarques] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredModeles, setFilteredModeles] = useState([]);
  const [resultModeles, setResultModeles] = useState([]);
  const [createdModele, setCreatedModele] = useState(EMPTY_MODELE);
  const [updatedModele, setUpdatedModele] = useState(EMPTY_MODELE);

  const [currentPage, setCurrentPage] = useState(1);
  const [showPerPage, setShowPerPage] = useState(4);
  const [totalPages, setTotalPages] = useState(null);

  useEffect(() => {
    fetchModeles();
    fetchMarques();
    fetchCategories();
  }, []);

  useEffect(() => {
    setFilteredModeles(modeles);
  }, [modeles]);

  useEffect(() => {
    setResultModeles(
      filteredModeles.slice(
        (currentPage - 1) * showPerPage,
        currentPage * showPerPage
      )
    );
    setTotalPages(Math.ceil(filteredModeles.length / showPerPage));
  }, [filteredModeles, currentPage, showPerPage]);

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

  const fetchCategories = () => {
    // fetch(`${API_URL}/categories`, {
    //   method: "GET",
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setCategories(data);
    //   });
    setCategories(dataCategorie);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearch = ({ target: { value } }) => {
    if (value === "") {
      setFilteredModeles(modeles);
    } else {
      setFilteredModeles(
        modeles.filter((modele) =>
          modele.nom.toLowerCase().includes(value.toLowerCase())
        )
      );
    }
  };

  const handleCreate = () => {
    // fetch(`${API_URL}/modeles`, {
    //   method: "POST",
    //   body: JSON.stringify({
    //     nom: createdModele.nom,
    //     idmarque: createdModele.marque.id,
    //     idcategorie: createdModele.categorie.id,
    //   }),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setModeles([...modeles, data.data]);
    //   });
    if (
      createdModele.nom === "" ||
      createdModele.marque.id === null ||
      createdModele.categorie.id === null
    )
      return;
    setCreatedModele(EMPTY_MODELE);
    setModeles([...modeles, { ...createdModele, id: modeles.length + 1 }]);
    document.querySelector("#modalCreate .btn-close").click();
  };

  const handleUpdate = () => {
    // fetch(`${API_URL}/modeles/${updatedModele.id}`, {
    //   method: "PUT",
    //   body: JSON.stringify({
    //     nom: updatedModele.nom,
    //     idmarque: updatedModele.marque.id,
    //     idcategorie: updatedModele.categorie.id,
    //   }),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setModeles(
    //       modeles.map((modele) =>
    //         modele.id === data.data.id ? data.data : modele
    //       )
    //     );
    //   });
    if (
      updatedModele.nom === "" ||
      updatedModele.marque.id === null ||
      updatedModele.categorie.id === null
    )
      return;
    setModeles(
      modeles.map((modele) =>
        modele.id === updatedModele.id ? updatedModele : modele
      )
    );
    document
      .querySelector(`#modalUpdate-${updatedModele.id} .btn-close`)
      .click();
  };

  const handleDelete = (id) => {
    // fetch(`${API_URL}/modeles/${id}`, {
    //   method: "DELETE",
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setModeles(modeles.filter((modele) => modele.id !== data.data.id));
    //   });
    setModeles(modeles.filter((modele) => modele.id !== id));
    document.querySelector(`#modalDelete-${id} .btn-close`).click();
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
                <form className="col-sm-8 col-12 mb-sm-0 mb-3">
                  <div className="row">
                    <div className="col-4 pe-0">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Entrer un mot clé"
                        onChange={handleSearch}
                      />
                    </div>
                    <div className="col-4 pe-0">
                      <select className="form-select">
                        <option value="0">Trier par marque</option>
                        {marques &&
                          marques.map((marque) => (
                            <option value={marque.id} key={marque.id}>
                              {marque.nom}
                            </option>
                          ))}
                      </select>
                    </div>
                    <div className="col-4">
                      <select className="form-select">
                        <option value="0">Trier par categorie</option>
                        {categories &&
                          categories.map((categorie) => (
                            <option value={categorie.id} key={categorie.id}>
                              {categorie.nom}
                            </option>
                          ))}
                      </select>
                    </div>
                  </div>
                </form>
                <div className="col-2">
                  <div className="d-flex align-items-center">
                    <button
                      className="btn btn-outline-secondary d-flex align-items-center"
                      data-bs-toggle="modal"
                      data-bs-target="#modalCreate"
                    >
                      <i className="ti ti-plus me-2"></i> Nouveau
                    </button>

                    <div
                      className="modal fade"
                      id="modalCreate"
                      aria-labelledby="modalCreateLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h1
                              className="modal-title fs-6"
                              id="modalCreateLabel"
                            >
                              Ajouter un modele
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
                                    placeholder="Nom du modele"
                                    value={createdModele.nom}
                                    onChange={(e) =>
                                      setCreatedModele({
                                        ...createdModele,
                                        nom: e.target.value,
                                      })
                                    }
                                  />
                                </div>
                                <div className="mb-3">
                                  <label
                                    htmlFor="marque"
                                    className="form-label"
                                  >
                                    Marque
                                  </label>
                                  <select
                                    className="form-select"
                                    name="marque"
                                    id="marque"
                                    value={createdModele.marque.id || ""}
                                    onChange={(e) =>
                                      setCreatedModele({
                                        ...createdModele,
                                        marque: {
                                          id: e.target.value,
                                          nom: marques.find(
                                            (marque) =>
                                              marque.id ===
                                              parseInt(e.target.value)
                                          ).nom,
                                        },
                                      })
                                    }
                                  >
                                    <option value="">Choisir une marque</option>
                                    {marques &&
                                      marques.map((marque) => (
                                        <option
                                          value={marque.id}
                                          key={marque.id}
                                        >
                                          {marque.nom}
                                        </option>
                                      ))}
                                  </select>
                                </div>
                                <div className="mb-3">
                                  <label
                                    htmlFor="categorie"
                                    className="form-label"
                                  >
                                    Categorie
                                  </label>
                                  <select
                                    className="form-select"
                                    name="categorie"
                                    id="categorie"
                                    value={createdModele.categorie.id || ""}
                                    onChange={(e) =>
                                      setCreatedModele({
                                        ...createdModele,
                                        categorie: {
                                          id: e.target.value,
                                          nom: categories.find(
                                            (categorie) =>
                                              categorie.id ===
                                              parseInt(e.target.value)
                                          ).nom,
                                        },
                                      })
                                    }
                                  >
                                    <option value="">
                                      Choisir une categorie
                                    </option>
                                    {categories &&
                                      categories.map((categorie) => (
                                        <option
                                          value={categorie.id}
                                          key={categorie.id}
                                        >
                                          {categorie.nom}
                                        </option>
                                      ))}
                                  </select>
                                </div>
                              </div>
                              <div className="col-12 mb-3">
                                <button
                                  type="button"
                                  className="btn btn-primary w-100"
                                  onClick={handleCreate}
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
              <div className="table-responsive mb-4">
                <table className="table text-nowrap mb-0 align-middle">
                  <thead className="text-dark fs-4 table-light">
                    <tr>
                      <th className="border-bottom-0">ID</th>
                      <th className="border-bottom-0">Nom du modele</th>
                      <th className="border-bottom-0">Marque</th>
                      <th className="border-bottom-0">Categorie</th>
                      <th
                        className="border-bottom-0"
                        style={{ width: "350px" }}
                      >
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {resultModeles &&
                      resultModeles.map((modele) => (
                        <tr key={modele.id}>
                          <td className="">{modele.id}</td>
                          <td className="text-dark fw-semibold">
                            {modele.nom}
                          </td>
                          <td className="text-dark fw-semibold">
                            {modele.marque.nom}
                          </td>
                          <td className="text-dark fw-semibold">
                            {modele.categorie.nom}
                          </td>
                          <td className="">
                            <div className="d-flex align-items-center">
                              <button
                                className="btn btn-outline-info d-flex align-items-center"
                                data-bs-toggle="modal"
                                data-bs-target={`#modalUpdate-${modele.id}`}
                                onClick={() => {
                                  setUpdatedModele(modele);
                                }}
                              >
                                <i className="ti ti-pencil me-2"></i> Modifier
                              </button>
                              <button
                                className="btn btn-outline-danger d-flex align-items-center ms-2"
                                data-bs-toggle="modal"
                                data-bs-target={`#modalDelete-${modele.id}`}
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
              {totalPages > 1 && (
                <div className="row">
                  <div className="col-12">
                    <div className="d-flex justify-content-center">
                      <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {resultModeles &&
        resultModeles.map((modele) => (
          <Fragment key={modele.id}>
            <div className="modal fade" id={`modalUpdate-${modele.id}`}>
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1
                      className="modal-title fs-6"
                      id={`modalUpdateLabel-${modele.id}`}
                    >
                      Modifier un modele
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    {updatedModele && (
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
                              placeholder="Nom du modele"
                              value={updatedModele.nom}
                              onChange={(e) => {
                                setUpdatedModele({
                                  ...updatedModele,
                                  nom: e.target.value,
                                });
                              }}
                            />
                          </div>
                          <div className="mb-3">
                            <label htmlFor="marque" className="form-label">
                              Marque
                            </label>
                            <select
                              className="form-select"
                              name="marque"
                              id="marque"
                              value={updatedModele.marque.id || ""}
                              onChange={(e) =>
                                setUpdatedModele({
                                  ...updatedModele,
                                  marque: {
                                    id: e.target.value,
                                    nom: marques.find(
                                      (marque) =>
                                        marque.id === parseInt(e.target.value)
                                    ).nom,
                                  },
                                })
                              }
                            >
                              <option value="">Choisir une marque</option>
                              {marques &&
                                marques.map((marque) => (
                                  <option value={marque.id} key={marque.id}>
                                    {marque.nom}
                                  </option>
                                ))}
                            </select>
                          </div>
                          <div className="mb-3">
                            <label htmlFor="categorie" className="form-label">
                              Categorie
                            </label>
                            <select
                              className="form-select"
                              name="categorie"
                              id="categorie"
                              value={updatedModele.categorie.id || ""}
                              onChange={(e) =>
                                setUpdatedModele({
                                  ...updatedModele,
                                  categorie: {
                                    id: e.target.value,
                                    nom: categories.find(
                                      (categorie) =>
                                        categorie.id ===
                                        parseInt(e.target.value)
                                    ).nom,
                                  },
                                })
                              }
                            >
                              <option value="">Choisir une categorie</option>
                              {categories &&
                                categories.map((categorie) => (
                                  <option
                                    value={categorie.id}
                                    key={categorie.id}
                                  >
                                    {categorie.nom}
                                  </option>
                                ))}
                            </select>
                          </div>
                        </div>
                        <div className="col-12 mb-3">
                          <button
                            type="button"
                            className="btn btn-primary w-100"
                            onClick={handleUpdate}
                          >
                            Valider
                          </button>
                        </div>
                      </form>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div
              className="modal fade"
              id={`modalDelete-${modele.id}`}
              aria-labelledby={`modalDeleteLabel-${modele.id}`}
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1
                      className="modal-title fs-6"
                      id={`modalDeleteLabel-${modele.id}`}
                    >
                      Supprimer un modele
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
                      Voulez-vous vraiment supprimer ce modele ?
                    </p>
                    <h5 className="fw-semibold text-primary mb-0">
                      {modele.nom}
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
                      onClick={() => handleDelete(modele.id)}
                    >
                      Supprimer
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Fragment>
        ))}
    </>
  );
};

export default ListModele;
