import { useEffect, useState } from "react";
import FiltreAnnonce from "../../components/front-office/FiltreAnnonce";
import ListeAnnonce from "../../components/front-office/ListeAnnonce";
import TopBarAnnonce from "../../components/front-office/TopBarAnnonce";
import { dataClassementsAnnonces } from "../../data/front-office";

const Annonce = () => {
  const [classementsAnnonces, setClassementsAnnonces] = useState([]);

  useEffect(() => {
    setClassementsAnnonces(dataClassementsAnnonces);
  }, []);

  return (
    <div className="py-5">
      <TopBarAnnonce />
      <div className="d-flex py-5">
        <div id="filtre-annonce">
          <FiltreAnnonce />
        </div>
        <div id="liste-annonce">
          <ListeAnnonce data={dataClassementsAnnonces} />
          <ListeAnnonce data={dataClassementsAnnonces} />
        </div>
      </div>
    </div>
  );
};

export default Annonce;
