const Hero = () => {
  return (
    <section className="py-5 my-5" id="hero">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-6 mb-md-0 mb-4 position-relative">
            <img
              src={`${process.env.PUBLIC_URL}/images/svg/Ellipse.svg`}
              className="position-absolute"
              style={{
                top: "-100px",
                left: "-100px",
                zIndex: -1,
                maxWidth: "200px",
              }}
              alt=""
            />
            <h1
              className="mb-4 fw-bolder position-relative"
              style={{ fontSize: "3rem" }}
            >
              Bienvenue chez
              <b className="text-primary"> Gascar</b>
            </h1>
            <p className="fs-5 mb-4 position-relative">
              Notre plateforme simplifie l'achat et la vente de voitures
              d'occasion. Nous offrons un espace sécurisé pour les transactions
              automobiles. Explorez notre site pour trouver votre prochain
              véhicule.
            </p>
            <a
              href="https://storage.googleapis.com/gascar-bucket/gascar.apk"
              className="btn btn-outline-dark fs-4"
            >
              Télécharger l'application
              <i className="ti ti-download ms-2"></i>
            </a>
          </div>
          <div className="col-12 col-md-6">
            <img
              className="img-fluid"
              src={`${process.env.PUBLIC_URL}/images/svg/Price.gif`}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
