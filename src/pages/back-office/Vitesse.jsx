import { Fragment, useEffect, useState } from "react";
import { dataVitesse } from "../../data/back-office";
import { API_URL } from "../../context/UrlContext";
import Pagination from "../../components/back-office/Pagination";

const EMPTY_VITESSE = {
  id: null,
  nom: "",
};

const Vitesse = () => {
  const [vitesses, setVitesses] = useState([]);
  const [filteredVitesses, setFilteredVitesses] = useState([]);
  const [resultVitesses, setResultVitesses] = useState([]);
  const [createdVitesse, setCreatedVitesse] = useState(EMPTY_VITESSE);
  const [updatedVitesse, setUpdatedVitesse] = useState(EMPTY_VITESSE);

  const [currentPage, setCurrentPage] = useState(1);
  const [showPerPage, setShowPerPage] = useState(4);
  const [totalPages, setTotalPages] = useState(null);

  const [loadingFetch, setLoadingFetch] = useState(true);
  const [loadingCreate, setLoadingCreate] = useState(false);
  const [loadingUpdate, setLoadingUpdate] = useState(false);
  const [loadingDelete, setLoadingDelete] = useState(false);

  const [filters, setFilters] = useState({
    motCle: "",
  });

  useEffect(() => {
    fetchVitesses();
  }, []);

  useEffect(() => {
    setFilteredVitesses(vitesses);
  }, [vitesses]);

  useEffect(() => {
    setResultVitesses(
      filteredVitesses.slice(
        (currentPage - 1) * showPerPage,
        currentPage * showPerPage
      )
    );
    if (filteredVitesses.length <= showPerPage) {
      setFilteredVitesses(filteredVitesses);
    }

    setTotalPages(Math.ceil(filteredVitesses.length / showPerPage));
  }, [filteredVitesses, currentPage, showPerPage]);

  useEffect(() => {
    const filteredVitesses = vitesses.filter(
      (vitesse) =>
        vitesse.id.toString().includes(filters.motCle) ||
        vitesse.nom.toLowerCase().includes(filters.motCle.toLowerCase())
    );

    setFilteredVitesses(filteredVitesses);
  }, [filters, vitesses]);

  const fetchVitesses = () => {
    fetch(`${API_URL}/vitesses`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("authUserAdmin"),
      },
    })
      .then((response) => {
        if (response.status === 200) {
          response.json().then((data) => {
            setVitesses(data.data);
            setLoadingFetch(false);
          });
        }
      })
      .catch((err) => console.error(err));

    // setVitesses(dataVitesse);
    // setLoadingFetch(false);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleCreate = (e) => {
    e.preventDefault();
    setLoadingCreate(true);

    fetch(`${API_URL}/vitesses`, {
      method: "POST",
      body: JSON.stringify({
        nom: createdVitesse.nom,
      }),
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("authUserAdmin"),
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.status === 200) {
          response.json().then((data) => {
            setVitesses([...vitesses, data.data]);
            setLoadingCreate(false);
            setCreatedVitesse(EMPTY_VITESSE);
            document.querySelector("#modalCreate .btn-close").click();
          });
        }
      })
      .catch((err) => console.error(err));

    // setVitesses([...vitesses, { ...createdVitesse, id: vitesses.length + 1 }]);
    // setLoadingCreate(false);
    // setCreatedVitesse(EMPTY_VITESSE);
    // document.querySelector("#modalCreate .btn-close").click();
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    setLoadingUpdate(true);

    fetch(`${API_URL}/vitesses/${updatedVitesse.id}`, {
      method: "PUT",
      body: JSON.stringify({
        nom: updatedVitesse.nom,
      }),
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("authUserAdmin"),
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.status === 200) {
          response.json().then((data) => {
            setVitesses(
              vitesses.map((vitesse) =>
                vitesse.id === data.data.id ? data.data : vitesse
              )
            );
            setLoadingUpdate(false);
            document
              .querySelector(`#modalUpdate-${updatedVitesse.id} .btn-close`)
              .click();
          });
        }
      })
      .catch((err) => console.error(err));

    // setVitesses(
    //   vitesses.map((vitesse) =>
    //     vitesse.id === updatedVitesse.id ? updatedVitesse : vitesse
    //   )
    // );
    // setLoadingUpdate(false);
    // document
    //   .querySelector(`#modalUpdate-${updatedVitesse.id} .btn-close`)
    //   .click();
  };

  const handleDelete = (id) => {
    setLoadingDelete(true);

    fetch(`${API_URL}/vitesses/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("authUserAdmin"),
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.status === 200) {
          response.json().then((data) => {
            setVitesses(
              vitesses.filter((vitesse) => vitesse.id !== data.data.id)
            );
            setLoadingDelete(false);
            document.querySelector(`#modalDelete-${id} .btn-close`).click();
          });
        }
      })
      .catch((err) => console.error(err));

    // setVitesses(vitesses.filter((vitesse) => vitesse.id !== id));
    // setLoadingDelete(false);
    // document.querySelector(`#modalDelete-${id} .btn-close`).click();
  };

  return (
    <>
      <h3 className="mb-4 text-gray">Vitesses</h3>
      <div className="row">
        <div className="col-12">
          <div className="card w-100">
            <div className="card-body p-4">
              <h5 className="card-title fw-semibold mb-4">
                Liste des vitesses
              </h5>
              <div className="row mb-4 align-items-end">
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
                      value={filters.motCle}
                      onChange={(e) =>
                        setFilters({
                          ...filters,
                          [e.target.name]: e.target.value,
                        })
                      }
                      id="inputMotCle"
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
                              Ajouter une vitesse
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
                                    placeholder="Nom de la vitesse"
                                    value={createdVitesse.nom}
                                    onChange={(e) =>
                                      setCreatedVitesse({
                                        ...createdVitesse,
                                        nom: e.target.value,
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
              <div className="table-responsive mb-4">
                <table className="table text-nowrap mb-0 align-middle">
                  <thead className="text-dark fs-4 table-light">
                    <tr>
                      <th className="border-bottom-0">ID</th>
                      <th className="border-bottom-0">Nom de la vitesse</th>
                      <th
                        className="border-bottom-0"
                        style={{ width: "400px" }}
                      >
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {resultVitesses &&
                      resultVitesses.map((vitesse) => (
                        <tr key={vitesse.id}>
                          <td className="">{vitesse.id}</td>
                          <td className="text-dark fw-semibold">
                            {vitesse.nom}
                          </td>
                          <td className="">
                            <div className="d-flex align-items-center">
                              <button
                                className="btn btn-outline-info d-flex align-items-center"
                                data-bs-toggle="modal"
                                data-bs-target={`#modalUpdate-${vitesse.id}`}
                                onClick={() => setUpdatedVitesse(vitesse)}
                              >
                                <i className="ti ti-pencil me-2"></i> Modifier
                              </button>
                              <button
                                className="btn btn-outline-danger d-flex align-items-center ms-2"
                                data-bs-toggle="modal"
                                data-bs-target={`#modalDelete-${vitesse.id}`}
                              >
                                <i className="ti ti-trash me-2"></i> Supprimer
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
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
                    resultVitesses.length === 0 && (
                      <div className="mt-5">Aucune vitesse</div>
                    )
                  )}
                </h5>
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

      {resultVitesses &&
        resultVitesses.map((vitesse) => (
          <Fragment key={vitesse.id}>
            <div className="modal fade" id={`modalUpdate-${vitesse.id}`}>
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1
                      className="modal-title fs-6"
                      id={`modalUpdateLabel-${vitesse.id}`}
                    >
                      Modifier une vitesse
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    {updatedVitesse && (
                      <form className="row" onSubmit={(e) => handleUpdate(e)}>
                        <div className="col-12">
                          <div className="mb-3">
                            <label htmlFor="nom" className="form-label">
                              Nom
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="nom"
                              placeholder="Nom de la vitesse"
                              value={updatedVitesse.nom}
                              onChange={(e) =>
                                setUpdatedVitesse({
                                  ...updatedVitesse,
                                  nom: e.target.value,
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
              id={`modalDelete-${vitesse.id}`}
              aria-labelledby={`modalDeleteLabel-${vitesse.id}}`}
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1
                      className="modal-title fs-6"
                      id={`modalDeleteLabel-${vitesse.id}}`}
                    >
                      Supprimer une vitesse
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
                      Voulez-vous vraiment supprimer cette vitesse ?
                    </p>
                    <h5 className="fw-semibold text-primary mb-0">
                      {vitesse.nom}
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
                      onClick={() => handleDelete(vitesse.id)}
                    >
                      {loadingDelete ? (
                        <div
                          className="spinner-border spinner-border-sm"
                          role="status"
                        >
                          <span className="visually-hidden">Loading...</span>
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
    </>
  );
};

export default Vitesse;
