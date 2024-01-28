import { Fragment, useEffect, useState } from "react";
import { dataMarque } from "../../data/back-office";
import { API_URL } from "../../context/UrlContext";
import CardMarque from "../../components/back-office/CardMarque";
import Pagination from "../../components/back-office/Pagination";

const EMPTY_MARQUE = {
  id: null,
  nom: "",
  file: null,
  nombreModele: 0,
};

const Marque = () => {
  const [marques, setMarques] = useState([]);
  const [filteredMarques, setFilteredMarques] = useState([]);
  const [resultMarques, setResultMarques] = useState([]);
  const [createdMarque, setCreatedMarque] = useState(EMPTY_MARQUE);
  const [updatedMarque, setUpdatedMarque] = useState(EMPTY_MARQUE);

  const [currentPage, setCurrentPage] = useState(1);
  const [showPerPage, setShowPerPage] = useState(8);
  const [totalPages, setTotalPages] = useState(null);

  const [loadingFetch, setLoadingFetch] = useState(true);
  const [loadingCreate, setLoadingCreate] = useState(false);
  const [loadingUpdate, setLoadingUpdate] = useState(false);
  const [loadingDelete, setLoadingDelete] = useState(false);

  const [filters, setFilters] = useState({
    motCle: "",
  });

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
    if (filteredMarques.length <= showPerPage) {
      setResultMarques(filteredMarques);
    }

    setTotalPages(Math.ceil(filteredMarques.length / showPerPage));
  }, [filteredMarques, currentPage, showPerPage]);

  useEffect(() => {
    const filteredMarques = marques.filter(
      (marque) =>
        marque.nombreModele.toString().includes(filters.motCle) ||
        marque.nom.toLowerCase().includes(filters.motCle.toLowerCase())
    );

    setFilteredMarques(filteredMarques);
  }, [filters, marques]);

  const fetchMarques = () => {
    fetch(`${API_URL}/marques`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("authUserAdmin"),
      },
    })
      .then((response) => {
        if (response.status === 200) {
          response.json().then((data) => {
            setMarques(data.data);
            setLoadingFetch(false);
          });
        }
      })
      .catch((err) => console.error(err));

    // setMarques(dataMarque);
    // setLoadingFetch(false);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleCreate = (e) => {
    e.preventDefault();
    setLoadingCreate(true);

    const formData = new FormData();
    formData.append("nom", createdMarque.nom);
    formData.append("file", createdMarque.file);

    fetch(`${API_URL}/marques`, {
      method: "POST",
      body: formData,
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("authUserAdmin"),
      },
    })
      .then((response) => {
        if (response.status === 200) {
          response.json().then((data) => {
            setMarques([...marques, data.data]);
            setLoadingCreate(false);
            setCreatedMarque(EMPTY_MARQUE);
            e.target.reset();
            document.querySelector("#modalCreate .btn-close").click();
          });
        }
      })
      .catch((err) => console.error(err));

    // setMarques([
    //   ...marques,
    //   { ...createdMarque, id: marques.length + 1, nombreModele: 0 },
    // ]);
    // setLoadingCreate(false);
    // setCreatedMarque(EMPTY_MARQUE);
    // document.querySelector("#modalCreate .btn-close").click();
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    setLoadingUpdate(true);

    const formData = new FormData();
    formData.append("nom", updatedMarque.nom);
    formData.append("file", updatedMarque.file);

    fetch(`${API_URL}/marques/${updatedMarque.id}`, {
      method: "PUT",
      body: formData,
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("authUserAdmin"),
      },
    })
      .then((response) => {
        if (response.status === 200) {
          response.json().then((data) => {
            setMarques(
              marques.map((marque) =>
                marque.id === data.data.id
                  ? { ...data.data, nombreModele: updatedMarque.nombreModele }
                  : marque
              )
            );
            setLoadingUpdate(false);
            document
              .querySelector(`#modalUpdate-${updatedMarque.id} .btn-close`)
              .click();
          });
        }
      })
      .catch((err) => console.error(err));

    // setMarques(
    //   marques.map((marque) =>
    //     marque.id === updatedMarque.id ? updatedMarque : marque
    //   )
    // );
    // setLoadingUpdate(false);
    // document
    //   .querySelector(`#modalUpdate-${updatedMarque.id} .btn-close`)
    //   .click();
  };

  const handleDelete = (id) => {
    setLoadingDelete(true);

    fetch(`${API_URL}/marques/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("authUserAdmin"),
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.status === 200) {
          response.json().then((data) => {
            setMarques(marques.filter((marque) => marque.id !== data.data.id));
            setLoadingDelete(false);
            document.querySelector(`#modalDelete-${id} .btn-close`).click();
          });
        }
      })
      .catch((err) => console.error(err));

    // setMarques(marques.filter((marque) => marque.id !== id));
    // setLoadingDelete(false);
    // document.querySelector(`#modalDelete-${id} .btn-close`).click();
  };

  return (
    <>
      <h3 className="mb-4 text-gray">Marques</h3>
      <div className="row">
        <div className="col-12">
          <div className="card w-100">
            <div className="card-body p-4">
              <h5 className="card-title fw-semibold mb-4">Liste des marques</h5>
              <div className="row mb-3 align-items-end">
                <form className="col-sm-5 col-12 mb-sm-0 mb-3">
                  <div className="">
                    <label htmlFor="inputMotCle" className="form-label">
                      Mot clé
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Entrer un mot clé"
                      name="motCle"
                      id="inputMotCle"
                      value={filters.motCle}
                      onChange={(e) =>
                        setFilters({
                          ...filters,
                          [e.target.name]: e.target.value,
                        })
                      }
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
                            <form
                              className="row"
                              onSubmit={(e) => handleCreate(e)}
                            >
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
                                    name="nom"
                                    value={createdMarque.nom}
                                    onChange={(e) =>
                                      setCreatedMarque({
                                        ...createdMarque,
                                        [e.target.name]: e.target.value,
                                      })
                                    }
                                    required
                                  />
                                </div>
                                <div className="mb-3">
                                  <label htmlFor="photo" className="form-label">
                                    Photo
                                  </label>
                                  <input
                                    type="file"
                                    className="form-control"
                                    id="photo"
                                    name="file"
                                    onChange={(e) =>
                                      setCreatedMarque({
                                        ...createdMarque,
                                        [e.target.name]: e.target.files[0],
                                      })
                                    }
                                    required
                                  />
                                </div>
                              </div>
                              <div className="col-12 mb-3">
                                <button
                                  type="submit"
                                  className="btn btn-primary w-100"
                                >
                                  {loadingCreate ? (
                                    <div
                                      className="spinner-border spinner-border-sm"
                                      role="status"
                                    >
                                      <span className="visually-hidden">
                                        Loading...
                                      </span>
                                    </div>
                                  ) : (
                                    "Valider"
                                  )}
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
                            <form
                              className="row"
                              onSubmit={(e) => handleUpdate(e)}
                            >
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
                                    name="nom"
                                    value={updatedMarque.nom}
                                    onChange={(e) =>
                                      setUpdatedMarque({
                                        ...updatedMarque,
                                        [e.target.name]: e.target.value,
                                      })
                                    }
                                    required
                                  />
                                </div>
                                <div className="mb-3">
                                  <label htmlFor="photo" className="form-label">
                                    Photo
                                  </label>
                                  <input
                                    type="file"
                                    className="form-control"
                                    id="photo"
                                    name="file"
                                    onChange={(e) =>
                                      setUpdatedMarque({
                                        ...updatedMarque,
                                        [e.target.name]: e.target.files[0],
                                      })
                                    }
                                  />
                                </div>
                              </div>
                              <div className="col-12 mb-3">
                                <button
                                  type="submit"
                                  className="btn btn-primary w-100"
                                >
                                  {loadingUpdate ? (
                                    <div
                                      className="spinner-border spinner-border-sm"
                                      role="status"
                                    >
                                      <span className="visually-hidden">
                                        Loading...
                                      </span>
                                    </div>
                                  ) : (
                                    "Valider"
                                  )}
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
                            {loadingDelete ? (
                              <div
                                className="spinner-border spinner-border-sm"
                                role="status"
                              >
                                <span className="visually-hidden">
                                  Loading...
                                </span>
                              </div>
                            ) : (
                              "Supprimer"
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Fragment>
              ))}
          </div>

          <h5
            className="text-center fw-semibold"
            style={{ color: "var(--bs-muted)" }}
          >
            {loadingFetch ? (
              <div className="spinner-border mt-5" role="status">
                <span
                  className="visually-hidden"
                  style={{
                    "--bs-spinner-width": "1.25rem",
                    "--bs-spinner-height": "1.25rem",
                  }}
                >
                  Loading...
                </span>
              </div>
            ) : (
              resultMarques.length === 0 && (
                <div className="mt-5">Aucune marque</div>
              )
            )}
          </h5>

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

export default Marque;
