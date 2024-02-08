import { useEffect, useState } from "react";
import { dataCategorie, dataMarque } from "../../data/front-office";
import { API_URL } from "../../context/UrlContext";

const FiltreAnnonce = () => {
  const [categories, setCategories] = useState(null);
  const [marques, setMarques] = useState(null);

  const [sliceCategorie, setSliceCategorie] = useState(4);
  const [sliceMarque, setSliceMarque] = useState(4);

  const fetchCategories = () => {
    fetch(`${API_URL}/categories`, {
      method: "GET",
    })
      .then((response) => {
        if (response.status === 200) {
          response.json().then((data) => {
            if (!categories) {
              setCategories(data.data);
            }
          });
        }
      })
      .catch((err) => console.error(err));

    // if (!categories) {
    //   setCategories(dataCategorie);
    // }
  };

  const fetchMarques = () => {
    fetch(`${API_URL}/marques`, {
      method: "GET",
    })
      .then((response) => {
        if (response.status === 200) {
          response.json().then((data) => {
            if (!marques) {
              setMarques(data.data);
            }
          });
        }
      })
      .catch((err) => console.error(err));

    // if (!marques) {
    //   setMarques(dataMarque);
    // }
  };

  return (
    <div className="w-100">
      <div className="accordion accordion-flush" id="accordionPanelsStayOpen">
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingDate">
            <button
              className="accordion-button collapsed ps-5 fs-4 fw-bolder border-top border-bottom border-end"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseDate"
              aria-expanded="false"
              aria-controls="flush-collapseDate"
            >
              Date de publication
            </button>
          </h2>
          <div
            id="flush-collapseDate"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingDate"
          >
            <div className="accordion-body ps-5 fs-5">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  value=""
                  name="date"
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Aujourd'hui
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  value=""
                  name="date"
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Cette semaine
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  value=""
                  name="date"
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Ce mois
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingPrix">
            <button
              className="accordion-button collapsed ps-5 fs-4 fw-bolder border-bottom border-end"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapsePrix"
              aria-expanded="false"
              aria-controls="flush-collapsePrix"
            >
              Rechercher par prix
            </button>
          </h2>
          <div
            id="flush-collapsePrix"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingPrix"
          >
            <div className="accordion-body ps-5 fs-5">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Moins de 50M Ar
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  50M Ar - 100M Ar
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Plus de 100M Ar
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingCategorie">
            <button
              className="accordion-button collapsed ps-5 fs-4 fw-bolder border-bottom border-end"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseCategorie"
              aria-expanded="false"
              aria-controls="flush-collapseCategorie"
              onClick={() => fetchCategories()}
            >
              Catégories
            </button>
          </h2>
          <div
            id="flush-collapseCategorie"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingCategorie"
          >
            <div className="accordion-body ps-5 fs-5">
              {categories ? (
                <>
                  <div className="mb-2">
                    {categories.slice(0, sliceCategorie).map((categorie) => (
                      <div className="form-check" key={categorie.id}>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault"
                        >
                          {categorie.nom}
                        </label>
                      </div>
                    ))}
                  </div>
                  {categories.length > 4 && (
                    <a href="##" className="text-decoration-none text-dark">
                      {sliceCategorie === 4 ? (
                        <span
                          onClick={() => setSliceCategorie(categories.length)}
                        >
                          <i className="ti ti-plus fs-4"></i> Plus
                        </span>
                      ) : (
                        <span onClick={() => setSliceCategorie(4)}>
                          <i className="ti ti-minus fs-4"></i> Moins{" "}
                        </span>
                      )}
                    </a>
                  )}
                </>
              ) : (
                <div className="spinner-border spinner-border-sm" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingMarque">
            <button
              className="accordion-button collapsed ps-5 fs-4 fw-bolder border-bottom border-end"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseMarque"
              aria-expanded="false"
              aria-controls="flush-collapseMarque"
              onClick={() => fetchMarques()}
            >
              Marques
            </button>
          </h2>
          <div
            id="flush-collapseMarque"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingMarque"
          >
            <div className="accordion-body ps-5 fs-5">
              {marques ? (
                <>
                  <div className="mb-2">
                    {marques.slice(0, sliceMarque).map((marque) => (
                      <div className="form-check" key={marque.id}>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault"
                        >
                          {marque.nom}
                        </label>
                      </div>
                    ))}
                  </div>
                  {marques.length > 4 && (
                    <a href="##" className="text-decoration-none text-dark">
                      {sliceMarque === 4 ? (
                        <span onClick={() => setSliceMarque(marques.length)}>
                          <i className="ti ti-plus fs-4"></i> Plus
                        </span>
                      ) : (
                        <span onClick={() => setSliceMarque(4)}>
                          <i className="ti ti-minus fs-4"></i> Moins{" "}
                        </span>
                      )}
                    </a>
                  )}
                </>
              ) : (
                <div className="spinner-border spinner-border-sm" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiltreAnnonce;
