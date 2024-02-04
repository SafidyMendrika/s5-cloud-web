import CardAnnonce from "../back-office/CardAnnonce";

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
              hasDetail={false}
            />
          ))}
      </div>
    </div>
  );
};

export default ListeAnnonce;
