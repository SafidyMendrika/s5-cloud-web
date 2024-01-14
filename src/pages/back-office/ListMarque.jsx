import { useEffect, useState } from "react";

const dataMarque = [
  {
    id_marque: 1,
    nom_marque: "Toyota",
  },
  {
    id_marque: 2,
    nom_marque: "BMW",
  },
  {
    id_marque: 3,
    nom_marque: "Mercedes-Benz",
  },
  {
    id_marque: 4,
    nom_marque: "Honda",
  },
  {
    id_marque: 5,
    nom_marque: "Ford",
  },
];

const ListMarque = () => {
  const [marques, setMarques] = useState([]);

  useEffect(() => {
    fetchMarques();
  }, [marques]);

  const fetchMarques = () => {
    // fetch(`${API_URL}/marques`)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setMarques(data);
    //   });
    setMarques(dataMarque);
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
          <div class="col-sm-6 col-xl-3">
            <div class="card overflow-hidden rounded-2">
              <div class="position-relative">
                <a href="{#}">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/products/s4.jpg`}
                    class="card-img-top rounded-0"
                    alt="..."
                  />
                </a>
                <a
                  href="{#}"
                  class="bg-primary rounded-circle p-2 text-white d-inline-flex position-absolute bottom-0 end-0 mb-n3 me-3"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  data-bs-title="Add To Cart"
                >
                  <i class="ti ti-basket fs-4"></i>
                </a>
              </div>
              <div class="card-body pt-3 p-4">
                <h6 class="fw-semibold fs-4">Boat Headphone</h6>
                <div class="d-flex align-items-center justify-content-between">
                  <h6 class="fw-semibold fs-4 mb-0">
                    $50
                    <span class="ms-2 fw-normal text-muted fs-3">
                      <del>$65</del>
                    </span>
                  </h6>
                  <ul class="list-unstyled d-flex align-items-center mb-0">
                    <li>
                      <a class="me-1" href="{#}">
                        <i class="ti ti-star text-warning"></i>
                      </a>
                    </li>
                    <li>
                      <a class="me-1" href="{#}">
                        <i class="ti ti-star text-warning"></i>
                      </a>
                    </li>
                    <li>
                      <a class="me-1" href="{#}">
                        <i class="ti ti-star text-warning"></i>
                      </a>
                    </li>
                    <li>
                      <a class="me-1" href="{#}">
                        <i class="ti ti-star text-warning"></i>
                      </a>
                    </li>
                    <li>
                      <a class="" href="{#}">
                        <i class="ti ti-star text-warning"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListMarque;
