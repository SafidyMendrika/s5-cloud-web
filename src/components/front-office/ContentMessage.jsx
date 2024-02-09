const ContentMessage = ({ text, dateTime, sender }) => {
  return (
    <div className="w-100">
      {sender ? (
        <div className="d-flex justify-content-end">
          <p
            className="bg-dark p-3 fs-6 shadow text-white"
            style={{ borderRadius: "15px" }}
          >
            {text}
            <br />
            <span className="fs-2 text-white">
              {dateTime.split(" ")[0]} &nbsp; à &nbsp;
              {dateTime.split(" ")[1]}
            </span>
          </p>
        </div>
      ) : (
        <div className="d-flex">
          <p
            className="bg-white p-3 fs-6 shadow"
            style={{ borderRadius: "15px" }}
          >
            {text}
            <br />
            <span className="fs-2" style={{ color: "grey" }}>
              {dateTime.split(" ")[0]} &nbsp; à &nbsp;
              {dateTime.split(" ")[1]}
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

export default ContentMessage;
