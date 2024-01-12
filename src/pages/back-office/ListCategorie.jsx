import { useEffect, useState } from "react";
import { API_URL } from "../../context/UrlContext";

const data = [
  {
    id_categorie: 1,
    nom_categorie: "Compacte",
  },
  {
    id_categorie: 2,
    nom_categorie: "Berline",
  },
  {
    id_categorie: 3,
    nom_categorie: "SUV",
  },
  {
    id_categorie: 4,
    nom_categorie: "Coupé",
  },
  {
    id_categorie: 5,
    nom_categorie: "Monospace",
  },
];

const ListCategorie = () => {
  const [categories, setCategories] = useState([]);
  const [filterCategories, setFilterCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
    setFilterCategories(categories);
  }, [categories]);

  const fetchCategories = () => {
    // fetch(`${API_URL}/categories`)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setCategories(data);
    //   });
    setCategories(data);
  };

  const handleSearch = ({ target: { value } }) => {
    if (value === "") {
      setFilterCategories(categories);
    } else {
      const result = categories.filter((categorie) =>
        categorie.nom_categorie.toLowerCase().includes(value.toLowerCase())
      );
      setFilterCategories(result);
    }
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
                <form className="col-sm-6 col-12 mb-sm-0 mb-3">
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
                    <a
                      href="{#}"
                      className="btn btn-outline-secondary d-flex align-items-center"
                    >
                      <i className="ti ti-plus me-2"></i> Nouveau
                    </a>
                  </div>
                </div>
              </div>
              <div className="table-responsive">
                <table className="table text-nowrap mb-0 align-middle">
                  <thead className="text-dark fs-4 table-light">
                    <tr>
                      <th className="border-bottom-0">ID</th>
                      <th className="border-bottom-0">Nom</th>
                      <th
                        className="border-bottom-0"
                        style={{ width: "400px" }}
                      >
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filterCategories &&
                      filterCategories.map((categorie) => (
                        <tr key={categorie.id_categorie}>
                          <td className="">{categorie.id_categorie}</td>
                          <td className="text-dark fw-semibold">
                            {categorie.nom_categorie}
                          </td>
                          <td className="">
                            <div className="d-flex align-items-center">
                              <a
                                href="{#}"
                                className="btn btn-outline-info d-flex align-items-center"
                              >
                                <i className="ti ti-pencil me-2"></i> Modifier
                              </a>
                              <a
                                href="{#}"
                                className="btn btn-outline-danger d-flex align-items-center ms-2"
                              >
                                <i className="ti ti-trash me-2"></i> Supprimer
                              </a>
                            </div>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListCategorie;
