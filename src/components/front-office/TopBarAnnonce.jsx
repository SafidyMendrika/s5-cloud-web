const TopBarAnnonce = ({ resultats = 245 }) => {
  return (
    <div className="px-sm-5 px-3">
      <div className="row align-items-center">
        <div className="col-lg-5 col-md-4">
          <h3 className="mb-md-0 mb-3">Annonces ({resultats})</h3>
        </div>
        <div className="col-lg-7 col-md-8">
          <div className="row justify-content-end">
            <div className="col-lg-4 col-md-6 pe-md-0 mb-md-0 mb-3">
              <label htmlFor="recherche" className="form-label mb-1">
                Recherche
              </label>
              <input
                type="search"
                className="form-control bg-white"
                placeholder="Rechercher..."
                id="recherche"
              />
            </div>
            <div className="col-lg-4 col-md-6 mb-3">
              <label htmlFor="tri" className="form-label mb-1">
                Trier par
              </label>
              <select
                className="form-select bg-white"
                aria-label="Default select example"
                id="tri"
              >
                <option defaultValue>Choisir ...</option>
                <option value="1">Prix croissant</option>
                <option value="2">Prix décroissant</option>
                <option value="3">Date de publication</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBarAnnonce;
