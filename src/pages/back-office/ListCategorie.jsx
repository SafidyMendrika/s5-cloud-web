import { useEffect, useState } from "react";
import { API_URL } from "../../context/UrlContext";

var dataCategorie = [
  {
    id: 1,
    nom: "Compacte",
  },
  {
    id: 2,
    nom: "Berline",
  },
  {
    id: 3,
    nom: "SUV",
  },
  {
    id: 4,
    nom: "Coupé",
  },
  {
    id: 5,
    nom: "Monospace",
  },
];

const ListCategorie = () => {
  const [categories, setCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    setFilteredCategories(categories);
  }, [categories]);

  const fetchCategories = () => {
    // fetch(`${API_URL}/categories`, {
    //   method: "GET",
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data.data);
    //     setCategories(data.data);
    //   });
    setCategories(dataCategorie);
  };

  const handleSearch = ({ target: { value } }) => {
    if (value === "") {
      setFilteredCategories(categories);
    } else {
      const result = categories.filter((categorie) =>
        categorie.nom.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredCategories(result);
    }
  };

  const handleDelete = (id) => {
    // fetch(`${API_URL}/categories/${id}`, {
    //   method: "DELETE",
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setCategories(data.data);
    //   });
    dataCategorie = dataCategorie.filter((categorie) => categorie.id !== id);
    fetchCategories();
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
                    {filteredCategories &&
                      filteredCategories.map((categorie) => (
                        <tr key={categorie.id}>
                          <td className="">{categorie.id}</td>
                          <td className="text-dark fw-semibold">
                            {categorie.nom}
                          </td>
                          <td className="">
                            <div className="d-flex align-items-center">
                              <button className="btn btn-outline-info d-flex align-items-center">
                                <i className="ti ti-pencil me-2"></i> Modifier
                              </button>
                              <button
                                className="btn btn-outline-danger d-flex align-items-center ms-2"
                                onClick={() => handleDelete(categorie.id)}
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListCategorie;
