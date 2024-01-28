import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { API_URL } from "../../context/UrlContext";

const Statistique = () => {
  const [chart, setChart] = useState({
    series: [
      {
        name: "Earnings this month:",
        data: [355, 390, 300, 350, 390, 180, 355, 390],
      },
      {
        name: "Expense this month:",
        data: [280, 250, 325, 215, 250, 310, 280, 250],
      },
    ],

    chart: {
      type: "bar",
      height: 345,
      offsetX: -15,
      toolbar: { show: true },
      foreColor: "#adb0bb",
      fontFamily: "inherit",
      sparkline: { enabled: false },
    },

    colors: ["#5D87FF", "#49BEFF"],

    options: {
      bar: {
        horizontal: false,
        columnWidth: "35%",
        borderRadius: [6],
        borderRadiusApplication: "end",
        borderRadiusWhenStacked: "all",
      },
    },
    markers: { size: 0 },

    dataLabels: {
      enabled: false,
    },

    legend: {
      show: false,
    },

    grid: {
      borderColor: "rgba(0,0,0,0.1)",
      strokeDashArray: 3,
      xaxis: {
        lines: {
          show: false,
        },
      },
    },

    stroke: {
      show: true,
      width: 3,
      lineCap: "butt",
      colors: ["transparent"],
    },

    tooltip: { theme: "light" },

    responsive: [
      {
        breakpoint: 600,
        options: {
          plotOptions: {
            bar: {
              borderRadius: 3,
            },
          },
        },
      },
    ],
  });

  return (
    <>
      <h3 className="mb-4">Statistiques</h3>
      <div className="row">
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
                <ReactApexChart options={chart.options} series={chart.series} />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="row">
            <div className="col-lg-12">
              <div className="card overflow-hidden">
                <div className="card-body p-4">
                  <h5 className="card-title mb-9 fw-semibold">
                    Chiffre d'affaire
                  </h5>
                  <div className="row align-items-center">
                    <div className="col-8">
                      <h2
                        className="fw-semibold"
                        style={{
                          color: "var(--bs-muted)",
                        }}
                      >
                        {"36,358".toLocaleString("en-US")} Ar
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="card overflow-hidden">
                <div className="card-body p-4">
                  <h5 className="card-title mb-9 fw-semibold">
                    Nombre d'utilisateurs
                  </h5>
                  <div className="row align-items-center">
                    <div className="col-8">
                      <h2
                        className="fw-semibold"
                        style={{
                          color: "var(--bs-muted)",
                        }}
                      >
                        9 inscrits
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Statistique;
