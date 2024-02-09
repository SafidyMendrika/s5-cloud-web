import { useEffect } from "react";
import ContainerMessage from "../../components/front-office/ContainerMessage";
import ListeMessage from "../../components/front-office/ListeMessage";

const Message = () => {
  useEffect(() => {
    document.querySelector("footer").style.display = "none";
  }, []);

  return (
    <section className="container py-5">
      <div
        className="d-flex justify-content-space-between"
        style={{ gap: "3rem" }}
      >
        <div id="liste-message">
          <ListeMessage />
        </div>
        <div className="w-100" id="container-message">
          <ContainerMessage />
        </div>
      </div>
    </section>
  );
};

export default Message;
