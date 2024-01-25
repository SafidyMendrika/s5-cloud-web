import { Fragment, useEffect, useState } from "react";
import { dataCategorie } from "../../data/back-office";
import { API_URL } from "../../context/UrlContext";
import Pagination from "../../components/back-office/Pagination";

const EMPTY_CATEGORIE = {
  id: null,
  nom: "",
};

const Categorie = () => {
  const [categories, setCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [resultCategories, setResultCategories] = useState([]);
  const [createdCategorie, setCreatedCategorie] = useState(EMPTY_CATEGORIE);
  const [updatedCategorie, setUpdatedCategorie] = useState(EMPTY_CATEGORIE);

  const [currentPage, setCurrentPage] = useState(1);
  const [showPerPage, setShowPerPage] = useState(5);
  const [totalPages, setTotalPages] = useState(null);

  const [loadingFetch, setLoadingFetch] = useState(true);
  const [loadingCreate, setLoadingCreate] = useState(false);
  const [loadingUpdate, setLoadingUpdate] = useState(false);
  const [loadingDelete, setLoadingDelete] = useState(false);

  const [filters, setFilters] = useState({
    motCle: "",
  });

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    setFilteredCategories(categories);
  }, [categories]);

  useEffect(() => {
    setResultCategories(
      filteredCategories.slice(
        (currentPage - 1) * showPerPage,
        currentPage * showPerPage
      )
    );
    if (filteredCategories.length <= showPerPage) {
      setResultCategories(filteredCategories);
    }

    setTotalPages(Math.ceil(filteredCategories.length / showPerPage));
  }, [filteredCategories, currentPage, showPerPage]);

  useEffect(() => {
    const filteredCategories = categories.filter((categorie) =>
      categorie.nom.toLowerCase().includes(filters.motCle.toLowerCase())
    );

    setFilteredCategories(filteredCategories);
  }, [filters, categories]);

  const fetchCategories = () => {
    fetch(`${API_URL}/categories`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("authUserAdmin"),
      },
    })
      .then((response) => {
        if (response.status === 200) {
          response.json().then((data) => {
            setCategories(data.data);
            setLoadingFetch(false);
          });
        }
      })
      .catch((err) => console.error(err));

    // setCategories(dataCategorie);
    // setLoadingFetch(false);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleCreate = (e) => {
    e.preventDefault();
    setLoadingCreate(true);

    fetch(`${API_URL}/categories`, {
      method: "POST",
      body: JSON.stringify({
        nom: createdCategorie.nom,
      }),
      headers: {
        Authorization: "Bearer " + localStorage.getItem("authUserAdmin"),
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.status === 200) {
          response.json().then((data) => {
            setCategories([...categories, data.data]);
            setLoadingCreate(false);
            setCreatedCategorie(EMPTY_CATEGORIE);
            document.querySelector("#modalCreate .btn-close").click();
          });
        }
      })
      .catch((err) => console.error(err));

    // setCategories([
    //   ...categories,
    //   { ...createdCategorie, id: categories.length + 1 },
    // ]);
    // setLoadingCreate(false);
    // setCreatedCategorie(EMPTY_CATEGORIE);
    // document.querySelector("#modalCreate .btn-close").click();
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    setLoadingUpdate(true);

    fetch(`${API_URL}/categories/${updatedCategorie.id}`, {
      method: "PUT",
      body: JSON.stringify({
        nom: updatedCategorie.nom,
      }),
      headers: {
        Authorization: "Bearer " + localStorage.getItem("authUserAdmin"),
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.status === 200) {
          response.json().then((data) => {
            setCategories(
              categories.map((categorie) =>
                categorie.id === data.data.id ? data.data : categorie
              )
            );
            setLoadingUpdate(false);
            document
              .querySelector(`#modalUpdate-${updatedCategorie.id} .btn-close`)
              .click();
          });
        }
      })
      .catch((err) => console.error(err));

    // setCategories(
    //   categories.map((categorie) =>
    //     categorie.id === updatedCategorie.id ? updatedCategorie : categorie
    //   )
    // );
    // setLoadingUpdate(false);
    // document
    //   .querySelector(`#modalUpdate-${updatedCategorie.id} .btn-close`)
    //   .click();
  };

  const handleDelete = (id) => {
    setLoadingDelete(true);

    fetch(`${API_URL}/categories/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("authUserAdmin"),
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.status === 200) {
          response.json().then((data) => {
            setCategories(
              categories.filter((categorie) => categorie.id !== data.data.id)
            );
            setLoadingDelete(false);
            document.querySelector(`#modalDelete-${id} .btn-close`).click();
          });
        }
      })
      .catch((err) => console.error(err));

    // setCategories(categories.filter((categorie) => categorie.id !== id));
    // setLoadingDelete(false);
    // document.querySelector(`#modalDelete-${id} .btn-close`).click();
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
                      name="motCle"
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
                                    placeholder="Nom de la categorie"
                                    value={createdCategorie.nom}
                                    onChange={(e) =>
                                      setCreatedCategorie({
                                        ...createdCategorie,
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
                      <th className="border-bottom-0">Nom de la categorie</th>
                      <th
                        className="border-bottom-0"
                        style={{ width: "400px" }}
                      >
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {resultCategories &&
                      resultCategories.map((categorie) => (
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
                                onClick={() => setUpdatedCategorie(categorie)}
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
                <h5
                  className="text-center fw-semibold mt-5"
                  style={{ color: "var(--bs-muted)" }}
                >
                  {loadingFetch ? (
                    <div className="spinner-border" role="status">
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
                    resultCategories.length === 0 && "Aucune categorie"
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

      {resultCategories &&
        resultCategories.map((categorie) => (
          <Fragment key={categorie.id}>
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
                    {updatedCategorie && (
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
                              placeholder="Nom de la categorie"
                              value={updatedCategorie.nom}
                              onChange={(e) =>
                                setUpdatedCategorie({
                                  ...updatedCategorie,
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
              id={`modalDelete-${categorie.id}`}
              aria-labelledby={`modalDeleteLabel-${categorie.id}}`}
              aria-hidden="true"
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

export default Categorie;
