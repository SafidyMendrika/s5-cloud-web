import { Fragment, useEffect, useState } from "react";
import { dataMarque, dataClassementsAnnonces } from "../../data/front-office";
import Hero from "../../components/front-office/Hero";
import MarqueDispo from "../../components/front-office/MarqueDispo";
import TopAnnonce from "../../components/front-office/TopAnnonce";

const Accueil = () => {
  const [marques, setMarques] = useState([]);
  const [classementsAnnonces, setClassementsAnnonces] = useState([]);

  useEffect(() => {
    setMarques(dataMarque);
    setClassementsAnnonces(dataClassementsAnnonces);
  }, []);

  return (
    <Fragment>
      <Hero />
      <MarqueDispo data={marques} />
      <TopAnnonce data={classementsAnnonces} />
    </Fragment>
  );
};

export default Accueil;
