import { useEffect } from "react";
import ContentMessage from "./ContentMessage";

const ContainerMessage = ({
  messageActive,
  currentIdUser,
  formDataMessage,
  setFormDataMessage,
  handleSendMessage,
}) => {
  useEffect(() => {
    if (messageActive) {
      document.querySelector(".messages").style.scrollBehavior = "smooth";
      document.querySelector(".messages").scrollTop =
        document.querySelector(".messages").scrollHeight;
    }
  }, [messageActive]);

  return (
    <div className="rounded">
      {messageActive ? (
        <div className="messages pt-5 pb-3 px-5">
          {messageActive.map((message, index) =>
            message.user.id_utilisateur === currentIdUser ? (
              <ContentMessage
                key={index}
                text={message.content}
                dateTime={message.date_envoie}
                sender={true}
              />
            ) : (
              <ContentMessage
                key={index}
                text={message.content}
                dateTime={message.date_envoie}
                sender={false}
              />
            )
          )}
          <span className="last-message"></span>
        </div>
      ) : (
        <div
          className="d-flex justify-content-center"
          style={{ paddingBottom: "16rem" }}
        >
          <div className="spinner-border spinner-border-md" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      <form
        className="input-message py-3 px-3 d-flex align-items-center justify-content-between"
        onSubmit={(e) => handleSendMessage(e)}
      >
        <div style={{ width: "95%" }}>
          <input
            type="search"
            className="form-control bg-white rounded-pill"
            placeholder="Votre message ..."
            style={{ height: "50px" }}
            name="content"
            value={formDataMessage.content}
            onChange={(e) =>
              setFormDataMessage({
                ...formDataMessage,
                [e.target.name]: e.target.value,
              })
            }
          />
        </div>
        <button type="submit" className="icon-send">
          <i
            className="ti ti-brand-telegram"
            style={{ fontSize: "1.5rem" }}
          ></i>
        </button>
      </form>
    </div>
  );
};

export default ContainerMessage;
