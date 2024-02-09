import { useEffect, useState } from "react";
import FiltreAnnonce from "../../components/front-office/FiltreAnnonce";
import ListeAnnonce from "../../components/front-office/ListeAnnonce";
import TopBarAnnonce from "../../components/front-office/TopBarAnnonce";
import { dataAnnonce } from "../../data/front-office";
import { API_URL } from "../../context/UrlContext";
import { jwtDecode } from "jwt-decode";

const Annonce = () => {
  const [annonces, setAnnonces] = useState(null);
  const [filteredAnnonces, setFilteredAnnonces] = useState([]);
  const authUserClientToken = localStorage.getItem("authUserClient");

  const [datePublication, setDatePublication] = useState(null);
  const [prixChecked, setPrixChecked] = useState([]);
  const [marquesChecked, setMarquesChecked] = useState([]);
  const [categoriesChecked, setCategoriesChecked] = useState([]);

  useEffect(() => {
    fetchAnnonces();
  }, []);

  useEffect(() => {
    setFilteredAnnonces(annonces);
  }, [annonces]);

  useEffect(() => {
    const filteredAnnonces = annonces?.filter((annonce) => {
      // Filtrage par datePublication
      const today = new Date();
      const annonceDate = new Date(annonce.dateAnnonce);

      let isMatchingDatePublication = false;

      if (datePublication === 1) {
        isMatchingDatePublication =
          annonceDate.getDate() === today.getDate() &&
          annonceDate.getMonth() === today.getMonth() &&
          annonceDate.getFullYear() === today.getFullYear();
      } else if (datePublication === 2) {
        const firstDayOfWeek = new Date(
          today.setDate(today.getDate() - today.getDay())
        );
        const lastDayOfWeek = new Date(
          today.setDate(today.getDate() - today.getDay() + 6)
        );
        isMatchingDatePublication =
          annonceDate >= firstDayOfWeek && annonceDate <= lastDayOfWeek;
      } else if (datePublication === 3) {
        isMatchingDatePublication =
          annonceDate.getMonth() === today.getMonth() &&
          annonceDate.getFullYear() === today.getFullYear();
      } else {
        isMatchingDatePublication = true; // Retourne toutes les annonces si aucun filtre de date n'est appliqué
      }

      // Filtrage par prix
      let isMatchingPrixChecked = true; // Par défaut, on inclut toutes les annonces par prix

      if (prixChecked?.length > 0) {
        isMatchingPrixChecked = prixChecked.some((prix) => {
          if (prix === 1) {
            return annonce.prix < 50000000; // Moins de 50M Ar
          } else if (prix === 2) {
            return annonce.prix >= 50000000 && annonce.prix <= 100000000; // Entre 50M Ar et 100M Ar
          } else if (prix === 3) {
            return annonce.prix > 100000000; // Plus de 100M Ar
          }
        });
      }

      // Filtrage par catégorie
      let isMatchingCategoriesChecked = true; // Par défaut, on inclut toutes les annonces par catégorie

      if (categoriesChecked.length > 0) {
        isMatchingCategoriesChecked = categoriesChecked.includes(
          annonce.modele.categorie.id
        );
      }

      // Filtrage par marque
      let isMatchingMarquesChecked = true; // Par défaut, on inclut toutes les annonces par marque

      if (marquesChecked.length > 0) {
        isMatchingMarquesChecked = marquesChecked.includes(
          annonce.modele.marque.id
        );
      }

      // Retourne true seulement si toutes les conditions sont satisfaites
      return (
        isMatchingDatePublication &&
        isMatchingPrixChecked &&
        isMatchingCategoriesChecked &&
        isMatchingMarquesChecked
      );
    });

    setFilteredAnnonces(filteredAnnonces);
  }, [
    datePublication,
    prixChecked,
    categoriesChecked,
    marquesChecked,
    annonces,
  ]);

  const fetchAnnonces = () => {
    let URL = authUserClientToken
      ? `${API_URL}/annonces/feed?iduser=${
          jwtDecode(authUserClientToken).idutilisateur
        }`
      : `${API_URL}/annonces`;

    let headers = authUserClientToken
      ? {
          Authorization: "Bearer " + localStorage.getItem("authUserClient"),
        }
      : {};

    fetch(URL, {
      method: "GET",
      headers: headers,
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
      <TopBarAnnonce
        resultats={filteredAnnonces ? filteredAnnonces.length : 0}
      />
      <div className="d-flex py-5">
        <div id="filtre-annonce">
          <FiltreAnnonce
            datePublication={datePublication}
            setDatePublication={setDatePublication}
            prixChecked={prixChecked}
            setPrixChecked={setPrixChecked}
            marquesChecked={marquesChecked}
            setMarquesChecked={setMarquesChecked}
            categoriesChecked={categoriesChecked}
            setCategoriesChecked={setCategoriesChecked}
          />
        </div>
        <div id="liste-annonce">
          <ListeAnnonce data={filteredAnnonces} />
        </div>
      </div>
    </div>
  );
};

export default Annonce;
