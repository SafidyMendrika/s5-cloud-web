import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { dataStatistiques } from "../../data/back-office";
import { API_URL } from "../../context/UrlContext";
import CardAnnonce from "../../components/back-office/CardAnnonce";

const Statistique = () => {
  const [chart, setChart] = useState({
    series: [
      {
        name: "Nombre des annonces",
        data: [30, 40, 23, 10],
        color: "#5D87FF",
      },
      {
        name: "Vendus",
        data: [11, 32, 45, 32],
        color: "#13DEB9",
      },
    ],

    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: ["Jan", "Fev", "Mar", "Avr"],
      },
    },
  });

  const [benefice, setBenefice] = useState(null);
  const [nombreUtilisateurs, setNombreUtilisateurs] = useState(null);
  const [classementsAnnonces, setClasssementsAnnonces] = useState(null);

  useEffect(() => {
    fetchBenefice();
    fetchNombreUtilisateurs();
    fetchClassementsAnnonces();
  }, []);

  const fetchBenefice = () => {
    // fetch(`${API_URL}/benefice`, {
    //   method: "GET",
    //   headers: {
    //     Authorization: "Bearer " + sessionStorage.getItem("authUserAdmin"),
    //   },
    // })
    //   .then((response) => {
    //     if (response.status === 200) {
    //       response.json().then((data) => {
    //         setBenefice(data.data);
    //       });
    //     }
    //   })
    //   .catch((err) => console.error(err));

    setBenefice(dataStatistiques.benefice);
  };

  const fetchNombreUtilisateurs = () => {
    // fetch(`${API_URL}/nombre-utilisateurs`, {
    //   method: "GET",
    //   headers: {
    //     Authorization: "Bearer " + sessionStorage.getItem("authUserAdmin"),
    //   },
    // })
    //   .then((response) => {
    //     if (response.status === 200) {
    //       response.json().then((data) => {
    //         setNombreUtilisateurs(data.data);
    //       });
    //     }
    //   })
    //   .catch((err) => console.error(err));

    setNombreUtilisateurs(dataStatistiques.nombreUtilisateurs);
  };

  const fetchClassementsAnnonces = () => {
    // fetch(`${API_URL}/classements/annonces`, {
    //   method: "GET",
    //   headers: {
    //     Authorization: "Bearer " + sessionStorage.getItem("authUserAdmin"),
    //   },
    // })
    //   .then((response) => {
    //     if (response.status === 200) {
    //       response.json().then((data) => {
    //         setClasssementsAnnonces(data.data);
    //       });
    //     }
    //   })
    //   .catch((err) => console.error(err));

    setClasssementsAnnonces(dataStatistiques.classementsAnnonces);
  };

  return (
    <>
      <h3 className="mb-4">Statistiques</h3>
      {benefice && nombreUtilisateurs && classementsAnnonces ? (
        <>
          <div className="row mb-5">
            <div className="col-lg-8 d-flex align-items-strech">
              <div className="card w-100">
                <div className="card-body">
                  <div className="d-sm-flex d-block align-items-center justify-content-between mb-9">
                    <div className="mb-3 mb-sm-0">
                      <h5 className="card-title fw-semibold">
                        Rendement des voitures
                      </h5>
                    </div>
                    <div className="d-flex align-items-center">
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Entrer un nombre"
                      />
                      <span className="ms-3 text-nowrap">Derniers mois</span>
                    </div>
                  </div>
                  <div id="chart">
                    <ReactApexChart
                      options={chart.options}
                      series={chart.series}
                      type="bar"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="row">
                <div className="col-lg-12 col-md-6">
                  <div className="card overflow-hidden">
                    <div className="card-body p-4">
                      <h5 className="card-title mb-9 fw-semibold">
                        Chiffre d'affaire
                      </h5>
                      <div className="row align-items-center">
                        <h2
                          className="fw-semibold"
                          style={{
                            color: "var(--bs-muted)",
                          }}
                        >
                          {benefice.toLocaleString("en-US")} Ar
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-6">
                  <div className="card overflow-hidden">
                    <div className="card-body p-4">
                      <h5 className="card-title mb-9 fw-semibold">
                        Nombre d'utilisateurs
                      </h5>
                      <div className="row align-items-center">
                        <h2
                          className="fw-semibold"
                          style={{
                            color: "var(--bs-muted)",
                          }}
                        >
                          {nombreUtilisateurs}{" "}
                          {nombreUtilisateurs > 1 ? "inscrits" : "inscrit"}
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h4 className="mb-7" style={{ color: "var(--bs-muted)" }}>
            Top 3 des annonces les plus favorisées par les utilisateurs
          </h4>
          <div className="row">
            {classementsAnnonces.map((annonce) => (
              <CardAnnonce key={annonce.id} annonce={annonce} />
            ))}
            <h5 className="fw-semibold" style={{ color: "var(--bs-muted)" }}>
              {classementsAnnonces.length === 0 && (
                <div className="mb-5">Aucun resultat</div>
              )}
            </h5>
          </div>
        </>
      ) : (
        <h5
          className="text-center fw-semibold"
          style={{ color: "var(--bs-muted)", marginTop: "10rem" }}
        >
          <div className="spinner-border" role="status">
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
        </h5>
      )}
    </>
  );
};

export default Statistique;
