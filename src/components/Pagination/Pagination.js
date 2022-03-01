import React, { useState, useEffect } from "react";
import "./Pagination.css";

function Pagination({ totalPagesNum, setCurrentPage, users, currentUsers }) {
  const [currentButton, setCurrentButton] = useState(1);

  const pages = [];

  for (let i = 1; i <= totalPagesNum; i++) {
    pages.push(i);
  }

  useEffect(() => {
    setCurrentPage(currentButton);
  }, [currentButton, setCurrentPage]);

  return (
    <div className="clearfix">
      <div className="text-pagination"></div>
      Showing <b>{currentUsers.length}</b> out of <b>{users.length}</b> users
      <ul className="pagination">
        <li
          className={`${
            currentButton === 1 ? "page-item disabled" : "page-item"
          }`}
        >
          <a
            href="#!"
            onClick={() =>
              setCurrentButton(prev => (prev === 1 ? prev : prev - 1))
            }
          >
            Previous
          </a>
        </li>

        {pages.map((page, index) => {
          return (
            <li
              key={index}
              className={`${
                currentButton === page ? "page-item active" : "page-item"
              }`}
            >
              <a
                href="#!"
                className="page-link"
                onClick={() => setCurrentButton(page)}
              >
                {page}
              </a>
            </li>
          );
        })}

        <li
          className={`${
            currentButton === pages.length ? "page-item disabled" : "page-item"
          }`}
        >
          <a
            href="#!"
            onClick={() =>
              setCurrentButton(next =>
                next === pages.length ? next : next + 1
              )
            }
          >
            Next
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Pagination;
