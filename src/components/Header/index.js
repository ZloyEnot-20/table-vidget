import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { filterByField } from "../../actions";
import "./style.css";

const Header = ({ allUsersArray }) => {
  const dispatch = useDispatch();
  const inputRef = useRef();
  const sortedColumnRef = useRef();
  const conditionRef = useRef();

  //On each input change to be called handle function
  const handleFilter = () => {
    // Value of the input
    const value = inputRef.current.value;

    // Chosen condition to filter(Равно/Больше/Больше/Содержит)
    const condition =
      conditionRef.current[conditionRef.current.selectedIndex].text;

    // Chosen column to filter (Название/Количество/Расстояние)
    const sortedColumn =
      sortedColumnRef.current[
        sortedColumnRef.current.selectedIndex
      ].value.toLowerCase();

    // Dispatching filter action and gettin and filtered data
    dispatch(
      filterByField({
        array: allUsersArray,
        field: sortedColumn,
        condition: condition,
        givenValue: value,
      })
    );
  };

  return (
    <header>
      <div className="filter__menu">
        <select ref={sortedColumnRef} defaultValue="choose">
          <option value="choose">Колонка</option>
          <option value="name">Название</option>
          <option value="amount">Количество</option>
          <option value="distance">Расстояние</option>
        </select>
        <select name="select" defaultValue="choose" ref={conditionRef}>
          <option value="choose">Условие</option>
          <option value="equal">Равно</option>
          <option value="moreThan">Больше</option>
          <option value="lessThan">Меньше</option>
          <option value="includes">Содержит</option>
        </select>
        <input
          type="text"
          placeholder="Введите значение"
          className="filter__input"
          ref={inputRef}
          onChange={handleFilter}
        />
      </div>
    </header>
  );
};

export default Header;
