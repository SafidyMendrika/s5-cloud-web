import CardAnnonce from "../front-office/CardAnnonce";

const ListeAnnonce = ({ data }) => {
  return (
    <div className="container">
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
    </div>
  );
};

export default ListeAnnonce;
