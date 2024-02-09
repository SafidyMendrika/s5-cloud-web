import { useEffect, useState } from "react";
import FiltreAnnonce from "../../components/front-office/FiltreAnnonce";
import ListeAnnonce from "../../components/front-office/ListeAnnonce";
import TopBarAnnonce from "../../components/front-office/TopBarAnnonce";
import { dataAnnonce } from "../../data/front-office";
import { API_URL } from "../../context/UrlContext";
import { jwtDecode } from "jwt-decode";

const Annonce = () => {
  const [annonces, setAnnonces] = useState(null);

  const authUserClientToken = localStorage.getItem("authUserClient");

  useEffect(() => {
    fetchAnnonces();
  }, []);

  const fetchAnnonces = () => {
    let URL = authUserClientToken
      ? `${API_URL}/annonces/feed?iduser=${
          jwtDecode(authUserClientToken).idutilisateur
        }`
      : `${API_URL}/annonces`;

    fetch(URL, {
      method: "GET",
    })
      .then((response) => {
        if (response.status === 200) {
          response.json().then((data) => {
            setAnnonces(data.data);
          });
        }
      })
      .catch((err) => console.error(err));

    // setAnnonces(dataAnnonce);
  };

  return (
    <div className="py-5" style={{ minHeight: "100vh" }}>
      <TopBarAnnonce resultats={annonces ? annonces.length : 0} />
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
