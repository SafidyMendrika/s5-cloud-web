import Skeleton from "react-loading-skeleton";

const ListeMessage = ({
  messages,
  currentIdUser,
  indexMessageActive,
  handleMessageActive,
}) => {
  return (
    <>
      <nav>
        <h3 className="mb-5">Messages ({messages ? messages.length : 0})</h3>

        {messages ? (
          <div className="list-group pe-3" style={{ borderRadius: "0px" }}>
            {messages.map((message, index) =>
              index === indexMessageActive ? (
                <p
                  key={index}
                  href="##"
                  className="list-group-item list-group-item-action py-3 fs-4 rounded active"
                  style={{ cursor: "pointer", borderTopWidth: "1px" }}
                >
                  {message.users[0].id_utilisateur === currentIdUser
                    ? message.users[1].nom_utilisateur
                    : message.users[0].nom_utilisateur}
                </p>
              ) : (
                <p
                  key={index}
                  href="##"
                  className="list-group-item list-group-item-action py-3 fs-4 rounded"
                  style={{ cursor: "pointer", borderTopWidth: "1px" }}
                  onClick={() => handleMessageActive(index)}
                >
                  {message.users[0].id_utilisateur === currentIdUser
                    ? message.users[1].nom_utilisateur
                    : message.users[0].nom_utilisateur}
                </p>
              )
            )}
          </div>
        ) : (
          <>
            <Skeleton className="mb-3" height={"58px"} />
            <Skeleton className="mb-3" height={"58px"} />
            <Skeleton className="mb-3" height={"58px"} />
            <Skeleton className="mb-3" height={"58px"} />
            <Skeleton className="mb-3" height={"58px"} />
            <Skeleton className="mb-3" height={"58px"} />
            <Skeleton className="mb-3" height={"58px"} />
          </>
        )}
      </nav>
      <div className="clone"></div>
    </>
  );
};

export default ListeMessage;
