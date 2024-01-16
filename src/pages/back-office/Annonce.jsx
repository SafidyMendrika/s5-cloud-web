import { useEffect, useState } from "react";
import { dataAnnonce } from "../../data/back-office";
import CardAnnonce from "../../components/back-office/CardAnnonce";
import Pagination from "../../components/back-office/Pagination";

const Annonce = () => {
  const [annonces, setAnnonces] = useState([]);
  const [resultAnnonces, setResultAnnonces] = useState([]);
  const [filteredAnnonces, setFilteredAnnonces] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [showPerPage, setShowPerPage] = useState(4);
  const [totalPages, setTotalPages] = useState(null);

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
    setTotalPages(Math.ceil(filteredAnnonces.length / showPerPage));
  }, [filteredAnnonces, currentPage, showPerPage]);

  const fetchAnnonces = () => {
    // fetch(`${API_URL}/annonces`, {
    //   method: "GET",
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setAnnonces(data);
    //   });
    setAnnonces(dataAnnonce);
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
              <div className="row mb-3">
                <form className="col-sm-7 col-12 mb-sm-0 mb-3">
                  <div className="row">
                    <div className="col-6 pe-0">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Entrer un mot clé"
                      />
                    </div>
                    <div className="col-6">
                      <select className="form-select">
                        <option value="">Trier par status</option>
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
                <CardAnnonce annonce={annonce} key={annonce.id} />
              ))}
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
    </>
  );
};

export default Annonce;
