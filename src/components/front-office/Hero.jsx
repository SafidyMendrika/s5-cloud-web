const Hero = () => {
  return (
    <section className="py-5" id="hero">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-5 mb-md-0 mb-4">
            <h1 className="mb-4 fw-normal">
              Bienvenue chez
              <b className="text-primary"> Gascar</b>
            </h1>
            <p className="fs-5 mb-4">
              Notre plateforme simplifie l'achat et la vente de voitures
              d'occasion. Nous offrons un espace sécurisé pour les transactions
              automobiles. Explorez notre site pour trouver votre prochain
              véhicule.
            </p>
            <a href="##" className="btn btn-outline-dark fs-4">
              Télécharger l'application
              <i className="ti ti-download ms-2"></i>
            </a>
          </div>
          <div className="col-12 offset-md-1 col-md-6">
            <img
              src={`${process.env.PUBLIC_URL}/images/svg/City driver-amico.svg`}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
