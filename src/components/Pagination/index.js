import React from "react";
import { useSelector } from "react-redux";
import "./style.css";

const Pagination = ({ setCurrentPage, currentPage, elemsPerPage }) => {
  // Array of items
  const data = useSelector((state) => state.data);

  // Going through array and removing empty elements
  const existingData = data.filter((item) => item.id);

  // Array with number of buttons we need for pagination
  const numberOfButtons = [
    ...Array(Math.ceil(existingData.length / elemsPerPage)).keys(),
  ];

  // Changing table's page
  const goToPage = (page) => {
    setCurrentPage(page);
  };

  // Function changes the page according to the button pressed (prev, next)
  const handlePage = (action) => {
    if (action === "next" && currentPage !== numberOfButtons.length) {
      setCurrentPage((prev) => prev + 1);
    } else if (action === "previous" && currentPage !== 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div className="pagination">
      <div className="pagination__item" onClick={() => handlePage("previous")}>
        Prev
      </div>
      {numberOfButtons.map((item, index) => {
        return (
          <button
            style={
              currentPage === index + 1 ? { background: "greenyellow" } : {}
            }
            className="pagination__item"
            key={Math.random()}
            onClick={() => goToPage(index + 1)}
          >
            {index + 1}
          </button>
        );
      })}

      <div className="pagination__item" onClick={() => handlePage("next")}>
        Next
      </div>
    </div>
  );
};

export default Pagination;
