import "./App.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "./actions";
import axios from "axios";
import DataTable from "./components/DataTable";
import Pagination from "./components/Pagination";
import Header from "./components/Header";
import Loader from "./components/Loader";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const elemsPerPage = 15;

  const indexOfLastElem = currentPage * elemsPerPage;
  const indexOfFirstElem = indexOfLastElem - elemsPerPage;
  const items = useSelector((state) => state.data).slice(
    indexOfFirstElem,
    indexOfLastElem
  );

  const [allUsersArray, setAllUsersArray] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("https://6141bdb5357db50017b3dcce.mockapi.io/shoes/purchased")
      .then((res) => {
        setAllUsersArray(
          [...res.data].map((item, index) => ({
            ...item,
            date: item.date.slice(0, 10),
          }))
        );
        dispatch(setData([...res.data]));
      });
  }, [dispatch]);

  return (
    <div className="App">
      <div className="data-table">
        <Header
          allUsersArray={allUsersArray}
          setAllUsersArray={setAllUsersArray}
        />
        {
          // If connection is slow, user will see a loader while data is pending
          allUsersArray.length ? <DataTable items={items} /> : <Loader />
        }

        <Pagination
          currentPage={currentPage}
          elemsPerPage={elemsPerPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
}

export default App;
