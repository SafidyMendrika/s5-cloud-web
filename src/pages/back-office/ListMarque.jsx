import { Fragment, useEffect, useState } from "react";
import { dataMarque } from "../../data/back-office";
import { API_URL } from "../../context/UrlContext";
import CardMarque from "../../components/back-office/CardMarque";
import Pagination from "../../components/back-office/Pagination";

const EMPTY_MARQUE = {
  id: null,
  nom: "",
};

const ListMarque = () => {
  const [marques, setMarques] = useState([]);
  const [filteredMarques, setFilteredMarques] = useState([]);
  const [resultMarques, setResultMarques] = useState([]);
  const [createdMarque, setCreatedMarque] = useState(EMPTY_MARQUE);
  const [updatedMarque, setUpdatedMarque] = useState(EMPTY_MARQUE);

  const [currentPage, setCurrentPage] = useState(1);
  const [showPerPage, setShowPerPage] = useState(4);
  const [totalPages, setTotalPages] = useState(null);

  useEffect(() => {
    fetchMarques();
  }, []);

  useEffect(() => {
    setFilteredMarques(marques);
  }, [marques]);

  useEffect(() => {
    setResultMarques(
      filteredMarques.slice(
        (currentPage - 1) * showPerPage,
        currentPage * showPerPage
      )
    );
    setTotalPages(Math.ceil(filteredMarques.length / showPerPage));
  }, [filteredMarques, currentPage, showPerPage]);

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

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearch = ({ target: { value } }) => {
    if (value === "") {
      setFilteredMarques(marques);
    } else {
      const result = marques.filter((marque) =>
        marque.nom.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredMarques(result);
    }
  };

  const handleCreate = () => {
    // fetch(`${API_URL}/marques`, {
    //   method: "POST",
    //   body: JSON.stringify({
    //     nom: createdMarque.nom,
    //   }),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setMarques([...marques, data.data]);
    //   });
    if (createdMarque.nom === "") return;
    setCreatedMarque(EMPTY_MARQUE);
    setMarques([
      ...marques,
      { ...createdMarque, id: marques.length + 1, nombreModele: 0 },
    ]);
    document.querySelector("#modalCreate .btn-close").click();
  };

  const handleUpdate = () => {
    // fetch(`${API_URL}/marques/${updatedMarque.id}`, {
    //   method: "PUT",
    //   body: JSON.stringify({
    //     nom: updatedMarque.nom,
    //   }),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setMarques(
    //       marques.map((marque) =>
    //         marque.id === data.data.id ? data.data : marque
    //       )
    //     );
    //   });
    setMarques(
      marques.map((marque) =>
        marque.id === updatedMarque.id ? updatedMarque : marque
      )
    );
    document
      .querySelector(`#modalUpdate-${updatedMarque.id} .btn-close`)
      .click();
  };

  const handleDelete = (id) => {
    // fetch(`${API_URL}/marques/${id}`, {
    //   method: "DELETE",
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setMarques(marques.filter((marque) => marque.id !== data.data.id));
    //   });
    setMarques(marques.filter((marque) => marque.id !== id));
    document.querySelector(`#modalDelete-${id} .btn-close`).click();
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
                              Ajouter une marque
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
                                    placeholder="Nom de la marque"
                                    value={createdMarque.nom}
                                    onChange={(e) =>
                                      setCreatedMarque({
                                        ...createdMarque,
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
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="row mb-4">
            {resultMarques &&
              resultMarques.map((marque) => (
                <Fragment key={marque.id}>
                  <CardMarque
                    marque={marque}
                    setUpdatedMarque={setUpdatedMarque}
                  />

                  <div className="modal fade" id={`modalUpdate-${marque.id}`}>
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h1
                            className="modal-title fs-6"
                            id={`modalUpdateLabel-${marque.id}`}
                          >
                            Modifier une marque
                          </h1>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          {updatedMarque && (
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
                                    placeholder="Nom de la marque"
                                    value={updatedMarque.nom}
                                    onChange={(e) =>
                                      setUpdatedMarque({
                                        ...updatedMarque,
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
                    id={`modalDelete-${marque.id}`}
                    aria-labelledby={`modalDeleteLabel-${marque.id}}`}
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h1
                            className="modal-title fs-6"
                            id={`modalDeleteLabel-${marque.id}}`}
                          >
                            Supprimer une marque
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
                            Voulez-vous vraiment supprimer cette marque
                          </p>
                          <h5 className="fw-semibold text-primary mb-0">
                            {marque.nom}
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
                            onClick={() => handleDelete(marque.id)}
                          >
                            Supprimer
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Fragment>
              ))}
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
    </>
  );
};

export default ListMarque;
