// imports of react component
import React, { FC, useState, useEffect } from "react";
import axios from "axios";

// imports of custom component
import Table from "./Table";
import Pagination from "./Pagination";
import {employeeEndPoint} from './Contants/Constant'

/**
 * @description TablePage component.
 * Component used for showing the table data.
 */

const Home: FC = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, SetCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  /**
   * @description useEffect hook.
   * this hooks used for calling function loadUsers(which fetches the data from api and updates the state accordingly )
   */

  useEffect(() => {
    loadUsers();
  }, []);

  /**
   * @description load user.
   * it fetches the data from api and updates the state accordingly
   */

  const loadUsers = async () => {
    await axios
      .get(employeeEndPoint)
      .then((res) => {
        setUsers(res.data.reverse());
        console.log(res.data);
      });
  };
  const indexOfLastUser = currentPage * postsPerPage;
  const indexOfFirstUser = indexOfLastUser - postsPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber: React.SetStateAction<number>) => SetCurrentPage(pageNumber);

  return (
    <div className="container">
      <div className="py-4">
        <h1>Employee Detail Page</h1>
        <Table users={currentUsers} />
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={users.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

export default Home;
