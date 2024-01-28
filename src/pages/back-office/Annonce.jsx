import { useEffect, useState } from "react";
import { dataAnnonce } from "../../data/back-office";
import { API_URL } from "../../context/UrlContext";
import CardAnnonce from "../../components/back-office/CardAnnonce";
import Pagination from "../../components/back-office/Pagination";

const Annonce = () => {
  const [annonces, setAnnonces] = useState([]);
  const [resultAnnonces, setResultAnnonces] = useState([]);
  const [filteredAnnonces, setFilteredAnnonces] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [showPerPage, setShowPerPage] = useState(6);
  const [totalPages, setTotalPages] = useState(null);

  const [loadingFetch, setLoadingFetch] = useState(true);
  const [loadingValidate, setLoadingValidate] = useState(false);
  const [loadingDelete, setLoadingDelete] = useState(false);

  const [filters, setFilters] = useState({
    motCle: "",
    etat: "100", // Tous
  });

  useEffect(() => {
    fetchAnnonces();
  }, []);

  useEffect(() => {
    setFilteredAnnonces(annonces);
  }, [annonces]);

  useEffect(() => {
    setResultAnnonces(
      filteredAnnonces.slice(
        (currentPage - 1) * showPerPage,
        currentPage * showPerPage
      )
    );
    if (filteredAnnonces.length <= showPerPage) {
      setResultAnnonces(filteredAnnonces);
    }

    setTotalPages(Math.ceil(filteredAnnonces.length / showPerPage));
  }, [filteredAnnonces, currentPage, showPerPage]);

  useEffect(() => {
    const filteredAnnonces = annonces.filter((annonce) => {
      const isMatchingMotCle =
        annonce.utilisateur.nom
          .toLowerCase()
          .includes(filters.motCle.toLowerCase()) ||
        annonce.modele.nom
          .toLowerCase()
          .includes(filters.motCle.toLowerCase()) ||
        annonce.modele.marque.nom
          .toLowerCase()
          .includes(filters.motCle.toLowerCase()) ||
        annonce.modele.categorie.nom
          .toLowerCase()
          .includes(filters.motCle.toLowerCase());

      const isMatchingEtat =
        filters.etat === "100" || annonce.etat === parseInt(filters.etat);

      return isMatchingMotCle && isMatchingEtat;
    });

    setFilteredAnnonces(filteredAnnonces);
  }, [filters, annonces]);

  const fetchAnnonces = () => {
    fetch(`${API_URL}/annonces`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("authUserAdmin"),
      },
    })
      .then((response) => {
        if (response.status === 200) {
          response.json().then((data) => {
            setAnnonces(data.data);
            setLoadingFetch(false);
          });
        }
      })
      .catch((err) => console.error(err));

    // setAnnonces(dataAnnonce);
    // setLoadingFetch(false);
  };

  const handleValidate = (id) => {
    setLoadingValidate(true);

    fetch(`${API_URL}/annonces/${id}/confirmer`, {
      method: "PUT",
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("authUserAdmin"),
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.status === 200) {
          response.json().then((data) => {
            setAnnonces(
              annonces.map((annonce) =>
                annonce.id === data.data.id ? data.data : annonce
              )
            );
            setLoadingValidate(false);
            document.querySelector(`#modalDetail-${id} .btn-close`).click();
          });
        }
      })
      .catch((err) => console.error(err));

    // setAnnonces(
    //   annonces.map((annonce) =>
    //     annonce.id === id ? { ...annonce, etat: 10 } : annonce
    //   )
    // );
    // setLoadingValidate(false);
    // document.querySelector(`#modalDetail-${id} .btn-close`).click();
  };

  const handleDelete = (id) => {
    setLoadingDelete(true);

    fetch(`${API_URL}/annonces/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("authUserAdmin"),
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.status === 200) {
          response.json().then((data) => {
            setAnnonces(
              annonces.filter((annonce) => annonce.id !== data.data.id)
            );
            setLoadingDelete(false);
            document.querySelector(`#modalDetail-${id} .btn-close`).click();
          });
        }
      })
      .catch((err) => console.error(err));

    // setAnnonces(annonces.filter((annonce) => annonce.id !== id));
    // setLoadingDelete(false);
    // document.querySelector(`#modalDetail-${id} .btn-close`).click();
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <h3 className="mb-4 text-gray">Annonces</h3>
      <div className="row">
        <div className="col-12">
          <div className="card w-100">
            <div className="card-body p-4">
              <h5 className="card-title fw-semibold mb-4">
                Liste des annonces
              </h5>
              <div className="row mb-3 align-items-end">
                <form className="col-md-7 col-12 mb-md-0 mb-3">
                  <div className="row">
                    <div className="col-md-6 pe-md-0 mb-md-0 mb-3">
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
                    <div className="col-md-6 mb-md-0 mb-3">
                      <label htmlFor="selectEtat" className="form-label">
                        Trier par etat
                      </label>
                      <select
                        className="form-select"
                        name="etat"
                        value={filters.etat}
                        onChange={(e) =>
                          setFilters({
                            ...filters,
                            [e.target.name]: e.target.value,
                          })
                        }
                        id="selectEtat"
                      >
                        <option value="100">Tous</option>
                        <option value="0">En attente</option>
                        <option value="10">Validé</option>
                        <option value="20">Vendu</option>
                      </select>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="row">
            {resultAnnonces &&
              resultAnnonces.map((annonce) => (
                <CardAnnonce
                  key={annonce.id}
                  annonce={annonce}
                  handleValidate={handleValidate}
                  loadingValidate={loadingValidate}
                  handleDelete={handleDelete}
                  loadingDelete={loadingDelete}
                />
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
              resultAnnonces.length === 0 && (
                <div className="mt-5">Aucune annonce</div>
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

export default Annonce;
