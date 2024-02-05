import CardAnnonce from "../front-office/CardAnnonce";

const AnnonceClassement = ({ data }) => {
  return (
    <section className="py-5 my-5" id="top-annonce">
      <div className="container">
        <h3 className="mb-5 pb-4 text-md-center text-start">
          Les annonces les plus populaires en tête
        </h3>

        <div className="row">
          {data &&
            data.map((annonce) => (
              <CardAnnonce
                key={annonce.annonce.id}
                annonce={annonce.annonce}
                nombreFavoris={annonce.count}
              />
            ))}
        </div>

        <div className="row">
          <div className="col-12 text-md-end text-center">
            <a href="/annonces" className="fs-5 fw-bolder">
              Voir plus <span className="ms-2">&#10147;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnnonceClassement;
