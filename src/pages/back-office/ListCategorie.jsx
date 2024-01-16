import { Fragment, useEffect, useState } from "react";
import { dataCategorie } from "../../data/back-office";
import { API_URL } from "../../context/UrlContext";
import Pagination from "../../components/back-office/Pagination";

const EMPTY_CATEGORIE = {
  id: null,
  nom: "",
};

const ListCategorie = () => {
  const [categories, setCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [resultCategories, setResultCategories] = useState([]);
  const [createdCategorie, setCreatedCategorie] = useState(EMPTY_CATEGORIE);
  const [updatedCategorie, setUpdatedCategorie] = useState(EMPTY_CATEGORIE);

  const [currentPage, setCurrentPage] = useState(1);
  const [showPerPage, setShowPerPage] = useState(4);
  const [totalPages, setTotalPages] = useState(null);

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

    setTotalPages(Math.ceil(filteredCategories.length / showPerPage));
  }, [filteredCategories, currentPage, showPerPage]);

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

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearch = ({ target: { value } }) => {
    if (value === "") {
      setFilteredCategories(categories);
    } else {
      setFilteredCategories(
        categories.filter((categorie) =>
          categorie.nom.toLowerCase().includes(value.toLowerCase())
        )
      );
    }
  };

  const handleCreate = () => {
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
    //     setCategories([...categories, data.data]);
    //   });
    if (createdCategorie.nom === "") return;
    setCreatedCategorie(EMPTY_CATEGORIE);
    setCategories([
      ...categories,
      { ...createdCategorie, id: categories.length + 1 },
    ]);
    document.querySelector("#modalCreate .btn-close").click();
  };

  const handleUpdate = () => {
    // fetch(`${API_URL}/categories/${updatedCategorie.id}`, {
    //   method: "PUT",
    //   body: JSON.stringify({
    //     nom: updatedCategorie.nom,
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
    setCategories(
      categories.map((categorie) =>
        categorie.id === updatedCategorie.id ? updatedCategorie : categorie
      )
    );
    document
      .querySelector(`#modalUpdate-${updatedCategorie.id} .btn-close`)
      .click();
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
                                    value={createdCategorie.nom}
                                    onChange={(e) =>
                                      setCreatedCategorie({
                                        ...createdCategorie,
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
                              value={updatedCategorie.nom}
                              onChange={(e) =>
                                setUpdatedCategorie({
                                  ...updatedCategorie,
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

export default ListCategorie;
