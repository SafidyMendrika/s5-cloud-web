import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const getPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <nav>
      <ul
        className="pagination pagination-lg"
        style={{
          "--bs-pagination-padding-x": "1.25rem",
          "--bs-pagination-padding-y": "0.5rem",
        }}
      >
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <button
            className="page-link"
            onClick={() => onPageChange(currentPage - 1)}
          >
            <i className="ti ti-chevrons-left"></i>
          </button>
        </li>

        {getPageNumbers().map((page) => (
          <li
            key={page}
            className={`page-item ${currentPage === page ? "active" : ""}`}
          >
            <button className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </button>
          </li>
        ))}

        <li
          className={`page-item ${
            currentPage === totalPages ? "disabled" : ""
          }`}
        >
          <button
            className="page-link"
            onClick={() => onPageChange(currentPage + 1)}
          >
            <i className="ti ti-chevrons-right"></i>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
