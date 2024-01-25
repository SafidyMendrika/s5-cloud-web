import { Fragment, useEffect, useState } from "react";
import { dataMoteur } from "../../data/back-office";
import { API_URL } from "../../context/UrlContext";
import Pagination from "../../components/back-office/Pagination";

const EMPTY_MOTEUR = {
  id: null,
  nom: "",
};

const Moteur = () => {
  const [moteurs, setMoteurs] = useState([]);
  const [filteredMoteurs, setFilteredMoteurs] = useState([]);
  const [resultMoteurs, setResultMoteurs] = useState([]);
  const [createdMoteur, setCreatedMoteur] = useState(EMPTY_MOTEUR);
  const [updatedMoteur, setUpdatedMoteur] = useState(EMPTY_MOTEUR);

  const [currentPage, setCurrentPage] = useState(1);
  const [showPerPage, setShowPerPage] = useState(4);
  const [totalPages, setTotalPages] = useState(null);

  useEffect(() => {
    fetchMoteurs();
  }, []);

  useEffect(() => {
    setFilteredMoteurs(moteurs);
  }, [moteurs]);

  useEffect(() => {
    setResultMoteurs(
      filteredMoteurs.slice(
        (currentPage - 1) * showPerPage,
        currentPage * showPerPage
      )
    );

    setTotalPages(Math.ceil(filteredMoteurs.length / showPerPage));
  }, [filteredMoteurs, currentPage, showPerPage]);

  const fetchMoteurs = () => {
    // fetch(`${API_URL}/moteurs`, {
    //   method: "GET",
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setMoteurs(data.data);
    //   });
    setMoteurs(dataMoteur);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearch = ({ target: { value } }) => {
    if (value === "") {
      setFilteredMoteurs(moteurs);
    } else {
      setFilteredMoteurs(
        moteurs.filter((moteur) =>
          moteur.nom.toLowerCase().includes(value.toLowerCase())
        )
      );
    }
  };

  const handleCreate = () => {
    // fetch(`${API_URL}/moteurs`, {
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
    //     setMoteurs([...moteurs, data.data]);
    //   });
    if (createdMoteur.nom === "") return;
    setCreatedMoteur(EMPTY_MOTEUR);
    setMoteurs([...moteurs, { ...createdMoteur, id: moteurs.length + 1 }]);
    document.querySelector("#modalCreate .btn-close").click();
  };

  const handleUpdate = () => {
    // fetch(`${API_URL}/moteurs/${updatedMoteur.id}`, {
    //   method: "PUT",
    //   body: JSON.stringify({
    //     nom: updatedMoteur.nom,
    //   }),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setMoteurs(
    //       moteurs.map((moteur) =>
    //         moteur.id === data.data.id ? data.data : moteur
    //       )
    //     );
    //   });
    setMoteurs(
      moteurs.map((moteur) =>
        moteur.id === updatedMoteur.id ? updatedMoteur : moteur
      )
    );
    document
      .querySelector(`#modalUpdate-${updatedMoteur.id} .btn-close`)
      .click();
  };

  const handleDelete = (id) => {
    // fetch(`${API_URL}/moteurs/${id}`, {
    //   method: "DELETE",
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setMoteurs(
    //       moteurs.filter((moteur) => moteur.id !== data.data.id)
    //     );
    //   });
    setMoteurs(moteurs.filter((moteur) => moteur.id !== id));
    document.querySelector(`#modalDelete-${id} .btn-close`).click();
  };

  return (
    <>
      <h3 className="mb-4 text-gray">Moteurs</h3>
      <div className="row">
        <div className="col-12">
          <div className="card w-100">
            <div className="card-body p-4">
              <h5 className="card-title fw-semibold mb-4">Liste des moteurs</h5>
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
                              Ajouter un moteur
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
                                    placeholder="Nom du moteur"
                                    value={createdMoteur.nom}
                                    onChange={(e) =>
                                      setCreatedMoteur({
                                        ...createdMoteur,
                                        nom: e.target.value,
                                      })
                                    }
                                  />
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
                      <th className="border-bottom-0">Nom du moteur</th>
                      <th
                        className="border-bottom-0"
                        style={{ width: "400px" }}
                      >
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {resultMoteurs &&
                      resultMoteurs.map((moteur) => (
                        <tr key={moteur.id}>
                          <td className="">{moteur.id}</td>
                          <td className="text-dark fw-semibold">
                            {moteur.nom}
                          </td>
                          <td className="">
                            <div className="d-flex align-items-center">
                              <button
                                className="btn btn-outline-info d-flex align-items-center"
                                data-bs-toggle="modal"
                                data-bs-target={`#modalUpdate-${moteur.id}`}
                                onClick={() => setUpdatedMoteur(moteur)}
                              >
                                <i className="ti ti-pencil me-2"></i> Modifier
                              </button>
                              <button
                                className="btn btn-outline-danger d-flex align-items-center ms-2"
                                data-bs-toggle="modal"
                                data-bs-target={`#modalDelete-${moteur.id}`}
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

      {resultMoteurs &&
        resultMoteurs.map((moteur) => (
          <Fragment key={moteur.id}>
            <div className="modal fade" id={`modalUpdate-${moteur.id}`}>
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1
                      className="modal-title fs-6"
                      id={`modalUpdateLabel-${moteur.id}`}
                    >
                      Modifier un moteur
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    {updatedMoteur && (
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
                              placeholder="Nom du moteur"
                              value={updatedMoteur.nom}
                              onChange={(e) =>
                                setUpdatedMoteur({
                                  ...updatedMoteur,
                                  nom: e.target.value,
                                })
                              }
                            />
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
              id={`modalDelete-${moteur.id}`}
              aria-labelledby={`modalDeleteLabel-${moteur.id}}`}
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1
                      className="modal-title fs-6"
                      id={`modalDeleteLabel-${moteur.id}}`}
                    >
                      Supprimer un moteur
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
                      Voulez-vous vraiment supprimer ce moteur ?
                    </p>
                    <h5 className="fw-semibold text-primary mb-0">
                      {moteur.nom}
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
                      onClick={() => handleDelete(moteur.id)}
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

export default Moteur;
