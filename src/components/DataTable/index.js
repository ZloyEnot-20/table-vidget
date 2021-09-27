import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { changeStatus, sortItems, sortPosition } from "../../actions";
import "./style.css";

const DataTable = ({ items }) => {
  const dispatch = useDispatch();

  // Getting initial status of items sort positon
  const status = useSelector((state) => state.status);

  const handleSortPosition = (sortedElem) => {
    const [elemStatus] = status.filter((item) => item.name === sortedElem);

    //Sort items by ID(their position on the table)
    dispatch(
      sortPosition({
        sortedItem: sortedElem,
        ascending: elemStatus.ascending,
      })
    );

    //Changing status of column(sorted in ascending or descending order)
    dispatch(
      changeStatus({
        name: sortedElem,
      })
    );
  };

  const handleSortElements = (sortBy) => {
    // Getting an array of column name to sort
    const [elem] = status.filter((item) => item.name === sortBy);

    //Sorting items in ascending or descending order
    dispatch(
      sortItems({
        sortedItem: sortBy,
        ascending: elem.ascending,
      })
    );

    //Changing status of column(sorted in ascending or descending order)
    dispatch(
      changeStatus({
        name: sortBy,
      })
    );
  };

  return (
    //Creating a table
    <table cellPadding={2} cellSpacing={0}>
      <thead>
        <tr>
          <th onClick={() => handleSortPosition("id")}>ID</th>
          <th onClick={() => handleSortElements("date")}>Дата</th>
          <th onClick={() => handleSortElements("name")}>Название</th>
          <th onClick={() => handleSortPosition("amount")}>Количество</th>
          <th onClick={() => handleSortPosition("distance")}>Расстояние</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, name, date, amount, distance }) => {
          return (
            //Going through array of items and making rows
            <tr key={id + Math.random()}>
              <td>{id}</td>
              <td>{date}</td>
              <td>{name}</td>
              <td>{amount}</td>
              <td>{distance}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default DataTable;
