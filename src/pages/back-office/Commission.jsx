import { useEffect, useState } from "react";
import { API_URL } from "../../context/UrlContext";
import { dataCommisson } from "../../data/back-office";

const Commission = () => {
  const [commission, setCommission] = useState(null);

  useEffect(() => {
    fetchCommission();
  });

  const fetchCommission = () => {
    // fetch(`${API_URL}/commissions`, {
    //   method: "GET",
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setCommission(data.data);
    //   });
    setCommission(dataCommisson);
  };

  return (
    <>
      <h3 className="mb-4 text-gray">Commissions</h3>
      <div className="row">
        <div className="col-md-5">
          <div className="row">
            <div className="card">
              <div className="card-body">
                <div className="row alig n-items-start">
                  <div className="col-8">
                    <h5 className="card-title mb-9 fw-semibold">
                      Commission actuelle
                    </h5>
                    <h4
                      className="fw-semibold"
                      style={{ color: "var(--bs-muted)" }}
                    >
                      {commission && commission.commissionActuelle}%
                    </h4>
                  </div>
                  <div className="col-4">
                    <div className="d-flex justify-content-end">
                      <div className="text-white bg-secondary rounded-circle p-6 d-flex align-items-center justify-content-center">
                        <i className="ti ti-currency-dollar fs-6"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-body p-4">
                <h5 className="card-title fw-semibold mb-4">
                  Modifier la commission
                </h5>
                <form className="row">
                  <div className="col-12 mb-3">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Entrer la nouvelle commission"
                    />
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary w-100 py-8 fs-4 rounded-2">
                      Modifier
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-7">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title mb-9 fw-semibold">
                5 dernières modifications
              </h5>
              <div className="table-responsive">
                <table className="table text-nowrap align-middle">
                  <thead className="text-dark fs-4 table-light">
                    <tr>
                      <th className="border-bottom-0">Date</th>
                      <th className="border-bottom-0">Commission</th>
                    </tr>
                  </thead>
                  <tbody>
                    {commission &&
                      commission.historique.map((item, index) => (
                        <tr key={index}>
                          <td>{item.date}</td>
                          <td className="text-dark fw-semibold">
                            {item.commission}%
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

export default Commission;
