import { useEffect, useState } from "react";
import FiltreAnnonce from "../../components/front-office/FiltreAnnonce";
import ListeAnnonce from "../../components/front-office/ListeAnnonce";
import TopBarAnnonce from "../../components/front-office/TopBarAnnonce";
import { dataAnnonce } from "../../data/front-office";
import { API_URL } from "../../context/UrlContext";

const Annonce = () => {
  const [annonces, setAnnonces] = useState([]);

  useEffect(() => {
    fetchAnnonces();
  }, []);

  const fetchAnnonces = () => {
    // fetch(`${API_URL}/annonces`, {
    //   method: "GET",
    // })
    //   .then((response) => {
    //     if (response.status === 200) {
    //       response.json().then((data) => {
    //         setAnnonces(data.data);
    //       });
    //     }
    //   })
    //   .catch((err) => console.error(err));

    setAnnonces(dataAnnonce);
  };

  return (
    <div className="py-5" style={{ minHeight: "100vh" }}>
      <TopBarAnnonce resultats={annonces.length} />
      <div className="d-flex py-5">
        <div id="filtre-annonce">
          <FiltreAnnonce />
        </div>
        <div id="liste-annonce">
          <ListeAnnonce data={annonces} />
        </div>
      </div>
    </div>
  );
};

export default Annonce;
