import { Fragment, useEffect, useState } from "react";
import { dataEnergie } from "../../data/back-office";
import { API_URL } from "../../context/UrlContext";
import Pagination from "../../components/back-office/Pagination";

const EMPTY_ENERGIE = {
  id: null,
  nom: "",
};

const Energie = () => {
  const [energies, setEnergies] = useState([]);
  const [filteredEnergies, setFilteredEnergies] = useState([]);
  const [resultEnergies, setResultEnergies] = useState([]);
  const [createdEnergie, setCreatedEnergie] = useState(EMPTY_ENERGIE);
  const [updatedEnergie, setUpdatedEnergie] = useState(EMPTY_ENERGIE);

  const [currentPage, setCurrentPage] = useState(1);
  const [showPerPage, setShowPerPage] = useState(4);
  const [totalPages, setTotalPages] = useState(null);

  useEffect(() => {
    fetchEnergies();
  }, []);

  useEffect(() => {
    setFilteredEnergies(energies);
  }, [energies]);

  useEffect(() => {
    setResultEnergies(
      filteredEnergies.slice(
        (currentPage - 1) * showPerPage,
        currentPage * showPerPage
      )
    );

    setTotalPages(Math.ceil(filteredEnergies.length / showPerPage));
  }, [filteredEnergies, currentPage, showPerPage]);

  const fetchEnergies = () => {
    // fetch(`${API_URL}/energies`, {
    //   method: "GET",
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setEnergies(data.data);
    //   });
    setEnergies(dataEnergie);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearch = ({ target: { value } }) => {
    if (value === "") {
      setFilteredEnergies(energies);
    } else {
      setFilteredEnergies(
        energies.filter((energie) =>
          energie.nom.toLowerCase().includes(value.toLowerCase())
        )
      );
    }
  };

  const handleCreate = () => {
    // fetch(`${API_URL}/energies`, {
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
    //     setEnergies([...energies, data.data]);
    //   });
    if (createdEnergie.nom === "") return;
    setCreatedEnergie(EMPTY_ENERGIE);
    setEnergies([...energies, { ...createdEnergie, id: energies.length + 1 }]);
    document.querySelector("#modalCreate .btn-close").click();
  };

  const handleUpdate = () => {
    // fetch(`${API_URL}/energies/${updatedEnergie.id}`, {
    //   method: "PUT",
    //   body: JSON.stringify({
    //     nom: updatedEnergie.nom,
    //   }),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setEnergies(
    //       energies.map((energie) =>
    //         energie.id === data.data.id ? data.data : energie
    //       )
    //     );
    //   });
    setEnergies(
      energies.map((energie) =>
        energie.id === updatedEnergie.id ? updatedEnergie : energie
      )
    );
    document
      .querySelector(`#modalUpdate-${updatedEnergie.id} .btn-close`)
      .click();
  };

  const handleDelete = (id) => {
    // fetch(`${API_URL}/energies/${id}`, {
    //   method: "DELETE",
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setEnergies(
    //       energies.filter((energie) => energie.id !== data.data.id)
    //     );
    //   });
    setEnergies(energies.filter((energie) => energie.id !== id));
    document.querySelector(`#modalDelete-${id} .btn-close`).click();
  };

  return (
    <>
      <h3 className="mb-4 text-gray">Energies</h3>
      <div className="row">
        <div className="col-12">
          <div className="card w-100">
            <div className="card-body p-4">
              <h5 className="card-title fw-semibold mb-4">
                Liste des energies
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
                              Ajouter une energie
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
                                    placeholder="Nom de l'energie"
                                    value={createdEnergie.nom}
                                    onChange={(e) =>
                                      setCreatedEnergie({
                                        ...createdEnergie,
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
                      <th className="border-bottom-0">Nom de l'energie</th>
                      <th
                        className="border-bottom-0"
                        style={{ width: "400px" }}
                      >
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {resultEnergies &&
                      resultEnergies.map((energie) => (
                        <tr key={energie.id}>
                          <td className="">{energie.id}</td>
                          <td className="text-dark fw-semibold">
                            {energie.nom}
                          </td>
                          <td className="">
                            <div className="d-flex align-items-center">
                              <button
                                className="btn btn-outline-info d-flex align-items-center"
                                data-bs-toggle="modal"
                                data-bs-target={`#modalUpdate-${energie.id}`}
                                onClick={() => setUpdatedEnergie(energie)}
                              >
                                <i className="ti ti-pencil me-2"></i> Modifier
                              </button>
                              <button
                                className="btn btn-outline-danger d-flex align-items-center ms-2"
                                data-bs-toggle="modal"
                                data-bs-target={`#modalDelete-${energie.id}`}
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

      {resultEnergies &&
        resultEnergies.map((energie) => (
          <Fragment key={energie.id}>
            <div className="modal fade" id={`modalUpdate-${energie.id}`}>
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1
                      className="modal-title fs-6"
                      id={`modalUpdateLabel-${energie.id}`}
                    >
                      Modifier une energie
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    {updatedEnergie && (
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
                              placeholder="Nom de l'energie"
                              value={updatedEnergie.nom}
                              onChange={(e) =>
                                setUpdatedEnergie({
                                  ...updatedEnergie,
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
              id={`modalDelete-${energie.id}`}
              aria-labelledby={`modalDeleteLabel-${energie.id}}`}
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1
                      className="modal-title fs-6"
                      id={`modalDeleteLabel-${energie.id}}`}
                    >
                      Supprimer une energie
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
                      Voulez-vous vraiment supprimer cette energie ?
                    </p>
                    <h5 className="fw-semibold text-primary mb-0">
                      {energie.nom}
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
                      onClick={() => handleDelete(energie.id)}
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

export default Energie;
