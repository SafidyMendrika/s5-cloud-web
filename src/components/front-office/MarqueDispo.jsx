import Glider from "react-glider";
import "glider-js/glider.min.css";

const MarqueDispo = ({ data }) => {
  return (
    <section
      className="py-3 mt-5"
      style={{ background: "#f7f7f7" }}
      id="marque-dispo"
    >
      <div className="container-fluid">
        <Glider
          draggable
          slidesToShow={2}
          slidesToScroll={1}
          responsive={[
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 5,
              },
            },
            {
              breakpoint: 1400,
              settings: {
                slidesToShow: 8,
              },
            },
          ]}
        >
          {data &&
            data.map((marque) => (
              <div key={marque.id} className="d-flex align-items-center">
                <img src={marque.lien} alt="..." className="glide-img" />
              </div>
            ))}
        </Glider>
      </div>
    </section>
  );
};

export default MarqueDispo;
