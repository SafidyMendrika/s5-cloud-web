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

    setTotalPages(Math.ceil(filteredVitesses.length / showPerPage));
  }, [filteredVitesses, currentPage, showPerPage]);

  const fetchVitesses = () => {
    // fetch(`${API_URL}/vitesses`, {
    //   method: "GET",
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setVitesses(data.data);
    //   });
    setVitesses(dataVitesse);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearch = ({ target: { value } }) => {
    if (value === "") {
      setFilteredVitesses(vitesses);
    } else {
      setFilteredVitesses(
        vitesses.filter((vitesse) =>
          vitesse.nom.toLowerCase().includes(value.toLowerCase())
        )
      );
    }
  };

  const handleCreate = () => {
    // fetch(`${API_URL}/vitesses`, {
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
    //     setVitesses([...vitesses, data.data]);
    //   });
    if (createdVitesse.nom === "") return;
    setCreatedVitesse(EMPTY_VITESSE);
    setVitesses([...vitesses, { ...createdVitesse, id: vitesses.length + 1 }]);
    document.querySelector("#modalCreate .btn-close").click();
  };

  const handleUpdate = () => {
    // fetch(`${API_URL}/vitesses/${updatedVitesse.id}`, {
    //   method: "PUT",
    //   body: JSON.stringify({
    //     nom: updatedVitesse.nom,
    //   }),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setVitesses(
    //       vitesses.map((vitesse) =>
    //         vitesse.id === data.data.id ? data.data : vitesse
    //       )
    //     );
    //   });
    setVitesses(
      vitesses.map((vitesse) =>
        vitesse.id === updatedVitesse.id ? updatedVitesse : vitesse
      )
    );
    document
      .querySelector(`#modalUpdate-${updatedVitesse.id} .btn-close`)
      .click();
  };

  const handleDelete = (id) => {
    // fetch(`${API_URL}/vitesses/${id}`, {
    //   method: "DELETE",
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setVitesses(
    //       vitesses.filter((vitesse) => vitesse.id !== data.data.id)
    //     );
    //   });
    setVitesses(vitesses.filter((vitesse) => vitesse.id !== id));
    document.querySelector(`#modalDelete-${id} .btn-close`).click();
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
                                    placeholder="Nom de la vitesse"
                                    value={createdVitesse.nom}
                                    onChange={(e) =>
                                      setCreatedVitesse({
                                        ...createdVitesse,
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
                              placeholder="Nom de la vitesse"
                              value={updatedVitesse.nom}
                              onChange={(e) =>
                                setUpdatedVitesse({
                                  ...updatedVitesse,
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

export default Vitesse;
