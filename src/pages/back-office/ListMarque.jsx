import { useEffect, useState } from "react";
import { API_URL } from "../../context/UrlContext";
import CardMarque from "../../components/back-office/CardMarque";

var dataMarque = [
  {
    id: 1,
    nom: "Toyota",
    path_image: "/images/marques/toyota.png",
    nombre_modeles: 23,
  },
  {
    id: 2,
    nom: "BMW",
    path_image: "/images/marques/bmw.png",
    nombre_modeles: 12,
  },
  {
    id: 3,
    nom: "Mercedes-Benz",
    path_image: "/images/marques/mercedes-benz.png",
    nombre_modeles: 31,
  },
  {
    id: 4,
    nom: "Honda",
    path_image: "/images/marques/honda.png",
    nombre_modeles: 4,
  },
  {
    id: 5,
    nom: "Ford",
    path_image: "/images/marques/ford.png",
    nombre_modeles: 10,
  },
];

const ListMarque = () => {
  const [marques, setMarques] = useState([]);
  const [filteredMarques, setFilteredMarques] = useState([]);

  useEffect(() => {
    fetchMarques();
    setFilteredMarques(marques);
  }, [marques]);

  const fetchMarques = () => {
    // fetch(`${API_URL}/marques`, {
    //   method: "GET",
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setMarques(data);
    //   });
    setMarques(dataMarque);
  };

  const handleSearch = ({ target: { value } }) => {
    if (value === "") {
      setFilteredMarques(marques);
    } else {
      const result = marques.filter((marque) =>
        marque.nom.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredMarques(result);
    }
  };

  const handleDelete = (id) => {
    // fetch(`${API_URL}/marques/${id}`, {
    //   method: "DELETE",
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     fetchMarques();
    //   });
    dataMarque = dataMarque.filter((marque) => marque.id !== id);
    fetchMarques();
  };

  return (
    <>
      <h3 className="mb-4 text-gray">Marques</h3>
      <div className="row">
        <div className="col-12">
          <div className="card w-100">
            <div className="card-body p-4">
              <h5 className="card-title fw-semibold mb-4">Liste des marques</h5>
              <div className="row mb-3">
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
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="row">
            {filteredMarques &&
              filteredMarques.map((marque) => (
                <CardMarque
                  marque={marque}
                  handleDelete={handleDelete}
                  key={marque.id}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ListMarque;
