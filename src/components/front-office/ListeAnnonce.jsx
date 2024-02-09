import CardAnnonce from "../front-office/CardAnnonce";

const ListeAnnonce = ({ data }) => {
  return (
    <div className="container">
      <div className="row">
        {data ? (
          data.map((annonce) => (
            <CardAnnonce key={annonce.id} annonce={annonce} />
          ))
        ) : (
          <>
            <CardAnnonce annonce={null} />
            <CardAnnonce annonce={null} />
            <CardAnnonce annonce={null} />
            <CardAnnonce annonce={null} />
            <CardAnnonce annonce={null} />
            <CardAnnonce annonce={null} />
          </>
        )}
      </div>
    </div>
  );
};

export default ListeAnnonce;
