import { useEffect, useState } from "react";
import { API_URL } from "../../context/UrlContext";
import { dataCommissions } from "../../data/back-office";
import { format } from "date-fns";

const Commission = () => {
  const [commissions, setCommissions] = useState([]);
  const [resultCommissions, setResultCommissions] = useState([]);
  const [commissionActuelle, setCommissionActuelle] = useState(null);

  const [formData, setFormData] = useState({
    commission: "",
  });

  const [loadingFetch, setLoadingFetch] = useState(true);
  const [loadingUpdate, setLoadingUpdate] = useState(false);

  useEffect(() => {
    fetchCommission();
  }, []);

  useEffect(() => {
    const resultCommissions = commissions
      .sort((a, b) => new Date(b.dateInsertion) - new Date(a.dateInsertion))
      .map((commission, index, array) => {
        const date = new Date(commission.dateInsertion);
        const previousCommission = array[index + 1];

        let variation = 0;
        if (previousCommission) {
          if (commission.commission > previousCommission.commission) {
            variation = 1;
          } else if (commission.commission < previousCommission.commission) {
            variation = -1;
          } else {
            variation = 0;
          }
        }

        return {
          ...commission,
          date: format(date, "dd/MM/yyyy"),
          heure: format(date, "HH:mm"),
          variation,
        };
      });

    setResultCommissions(resultCommissions.slice(0, 5));

    setCommissionActuelle(
      resultCommissions[0] ? resultCommissions[0].commission : null
    );
  }, [commissions]);

  const fetchCommission = () => {
    fetch(`${API_URL}/commissions/history`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("authUserAdmin"),
      },
    })
      .then((response) => {
        if (response.status === 200) {
          response.json().then((data) => {
            setCommissions(data.data);
            setLoadingFetch(false);
          });
        }
      })
      .catch((err) => console.error(err));

    // setCommissions(dataCommissions);
    // setLoadingFetch(false);
  };

  const handleUpdateCommission = (e) => {
    e.preventDefault();
    setLoadingUpdate(true);

    fetch(`${API_URL}/commissions`, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("authUserAdmin"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.status === 200) {
          response.json().then((data) => {
            setCommissions([...commissions, data.data]);
            setLoadingUpdate(false);
            setFormData({ commission: "" });
          });
        }
      })
      .catch((err) => console.error(err));

    // setCommissions([
    //   ...commissions,
    //   {
    //     id: commissions.length + 1,
    //     commission: parseFloat(formData.commission),
    //     dateInsertion: new Date(),
    //   },
    // ]);
    // setLoadingUpdate(false);
    // setFormData({ commission: "" });
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
                      {loadingFetch ? (
                        <div className="spinner-border fs-4" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      ) : commissionActuelle === null ? (
                        "Non définie"
                      ) : (
                        `${commissionActuelle}%`
                      )}
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
                <form
                  className="row"
                  onSubmit={(e) => handleUpdateCommission(e)}
                >
                  <div className="col-12 mb-3">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Entrer la nouvelle commission"
                      value={formData.commission}
                      onChange={(e) =>
                        setFormData({ commission: e.target.value })
                      }
                      min={0}
                      max={100}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <button
                      type="submit"
                      className="btn btn-primary w-100 py-8 fs-4 rounded-2"
                    >
                      {loadingUpdate ? (
                        <div
                          className="spinner-border spinner-border-sm"
                          role="status"
                        >
                          <span className="visually-hidden">Loading...</span>
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
        <div className="col-md-7">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title mb-9 fw-semibold">
                5 dernières modifications
              </h5>
              <div className="table-responsive mb-4">
                <table className="table text-nowrap align-middle">
                  <thead className="text-dark fs-4 table-light">
                    <tr>
                      <th className="border-bottom-0" style={{ width: "0px" }}>
                        Date
                      </th>
                      <th className="border-bottom-0">Heure</th>
                      <th className="border-bottom-0">Commission</th>
                    </tr>
                  </thead>
                  <tbody>
                    {resultCommissions &&
                      resultCommissions.map((commission, index) => (
                        <tr key={index}>
                          <td style={{ width: "0px" }}>{commission.date}</td>
                          <td>{commission.heure}</td>
                          <td className="text-dark fw-semibold d-flex">
                            {commission.variation === 1 && (
                              <span className="me-3 rounded-circle bg-light-success round-20 d-flex align-items-center justify-content-center">
                                <i className="ti ti-arrow-up-left text-success"></i>
                              </span>
                            )}
                            {commission.variation === -1 && (
                              <span className="me-3 rounded-circle bg-light-danger round-20 d-flex align-items-center justify-content-center">
                                <i className="ti ti-arrow-down-right text-danger"></i>
                              </span>
                            )}
                            {commission.variation === 0 && (
                              <span className="me-3 rounded-circle bg-light-secondary round-20 d-flex align-items-center justify-content-center">
                                <span
                                  className="bg-secondary rounded-circle d-inline-block"
                                  style={{ width: "6px", height: "6px" }}
                                ></span>
                              </span>
                            )}
                            {commission.commission}%
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
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
                    resultCommissions.length === 0 && (
                      <div className="mt-5">Aucune historique</div>
                    )
                  )}
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Commission;
