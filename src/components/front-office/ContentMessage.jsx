const ContentMessage = ({ text, dateTime, sender }) => {
  return (
    <div className="w-100">
      {sender ? (
        <div className="d-flex justify-content-end">
          <p className="bg-white px-3 py-2 fs-6 shadow rounded">
            {text}
            <br />
            <span className="fs-2" style={{ color: "grey" }}>
              {dateTime}
            </span>
          </p>
        </div>
      ) : (
        <div className="d-flex">
          <p className="bg-white px-3 py-2 fs-6 shadow rounded">
            {text}
            <br />
            <span className="fs-2" style={{ color: "grey" }}>
              {dateTime}
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

export default ContentMessage;
