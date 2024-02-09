import ContentMessage from "./ContentMessage";

const ContainerMessage = () => {
  return (
    <div className="rounded">
      <div className="messages pt-5 pb-3 px-5">
        <ContentMessage
          text="Coucou"
          dateTime={"2023/01/02 - 12:00"}
          sender={false}
        />
        <ContentMessage
          text="Salut"
          dateTime={"2023/01/02 - 12:00"}
          sender={true}
        />
        <ContentMessage
          text="Coucou"
          dateTime={"2023/01/02 - 12:00"}
          sender={false}
        />
        <ContentMessage
          text="Salut"
          dateTime={"2023/01/02 - 12:00"}
          sender={true}
        />
        <ContentMessage
          text="Coucou"
          dateTime={"2023/01/02 - 12:00"}
          sender={false}
        />
        <ContentMessage
          text="Salut"
          dateTime={"2023/01/02 - 12:00"}
          sender={true}
        />
        <ContentMessage
          text="Coucou"
          dateTime={"2023/01/02 - 12:00"}
          sender={false}
        />
        <ContentMessage
          text="Salut"
          dateTime={"2023/01/02 - 12:00"}
          sender={true}
        />
        <ContentMessage
          text="Coucou"
          dateTime={"2023/01/02 - 12:00"}
          sender={false}
        />
        <ContentMessage
          text="Salut"
          dateTime={"2023/01/02 - 12:00"}
          sender={true}
        />
      </div>
      <form className="input-message py-3 px-3 d-flex align-items-center justify-content-between">
        <div style={{ width: "95%" }}>
          <input
            type="search"
            className="form-control bg-white rounded-pill"
            placeholder="Coucou daholo ..."
            style={{ height: "50px" }}
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
