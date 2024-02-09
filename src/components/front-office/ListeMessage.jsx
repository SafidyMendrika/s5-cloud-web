const ListeMessage = () => {
  return (
    <>
      <nav>
        <h3 className="mb-5">Messages (4)</h3>
        <div className="list-group pe-3" style={{ borderRadius: "0px" }}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18].map(
            (item, index) =>
              index === 0 ? (
                <p
                  key={index}
                  href="##"
                  className="list-group-item list-group-item-action py-3 fs-4 rounded active"
                  style={{ cursor: "pointer", borderTopWidth: "1px" }}
                >
                  John Doe
                </p>
              ) : (
                <p
                  key={index}
                  href="##"
                  className="list-group-item list-group-item-action py-3 fs-4 rounded"
                  style={{ cursor: "pointer", borderTopWidth: "1px" }}
                >
                  John Doe
                </p>
              )
          )}
        </div>
      </nav>
      <div className="clone"></div>
    </>
  );
};

export default ListeMessage;
