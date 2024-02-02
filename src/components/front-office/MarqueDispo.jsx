import { API_URL } from "../../context/UrlContext";
import { useEffect, useState } from "react";
import { dataMarque } from "../../data/back-office";

import Glider from "react-glider";
import "glider-js/glider.min.css";

const MarqueDispo = () => {
  const [marques, setMarques] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMarques();
  }, []);

  const fetchMarques = () => {
    // fetch(`${API_URL}/marques`, {
    //   method: "GET",
    // })
    //   .then((response) => {
    //     if (response.status === 200) {
    //       response.json().then((data) => {
    //         setMarques(data.data);
    //       });
    //     }
    //   })
    //   .catch((err) => console.error(err));

    setMarques(dataMarque);
  };

  return (
    <section
      className="py-5"
      style={{ background: "#ebebeb" }}
      id="marque-dispo"
    >
      <div className="container">
        <h3 className="text-center mb-5">Marques disponibles</h3>
        <Glider
          draggable
          slidesToShow={2}
          slidesToScroll={1}
          responsive={[
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 1000,
              settings: {
                slidesToShow: 5,
              },
            },
          ]}
        >
          {marques.map((marque) => (
            <div key={marque.id} className="d-flex align-items-center">
              <img src={marque.lien} alt="..." className="glide-img" />
            </div>
          ))}
        </Glider>
      </div>
    </section>
  );
};

export default MarqueDispo;
