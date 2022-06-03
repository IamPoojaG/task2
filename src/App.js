import "./App.css";
import "./form.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";

import Login from "./components/Login";
import Registration from "./components/Registration";

import Table from "./components/Table";
import Details from "./components/Details";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [user, setUser] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(13);
  const [order, setOrder] = useState("ASC");
  const [search, setSearch] = useState("");

  let url =
    "https://datapeace-storage.s3-us-west-2.amazonaws.com/dummy_data/users.json";
  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setUser(data);
  };
  useEffect(() => {
    fetchData();
  }, [search]);

  // get the current users
  const indexOfLastPost = currentPage * postPerPage;
  // console.log(indexOfLastPost)
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  // console.log(indexOfFirstPost)
  const currentPosts = user.slice(indexOfFirstPost, indexOfLastPost);
  // console.log(currentPosts)
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Search function
  const searching = () => {
    const searchedData = user.filter((value) => {
      if (
        value.first_name.toLowerCase().includes(search.toLowerCase()) ||
        value.last_name.toLowerCase().includes(search.toLowerCase())
      )
        return value;
    });
    setUser(searchedData);
  };
  // sort function
  const sorting = (col) => {
    if (order === "ASC") {
      const sorted = [...user].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setUser(sorted);
      setOrder("DSC");
    }
    if (order === "DSC") {
      const sorted = [...user].sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setUser(sorted);
      setOrder("ASC");
    }
  };

  const sortNumber = (col) => {
    if (order === "ASC") {
      const sorted = [...user].sort((a, b) => (a[col] > b[col] ? 1 : -1));
      setUser(sorted);
      setOrder("DSC");
    }
    if (order === "DSC") {
      const sorted = [...user].sort((a, b) => (a[col] < b[col] ? 1 : -1));
      setUser(sorted);
      setOrder("ASC");
    }
  };

  const LOCAL_STORAGE_KEY = "info";

  const [info, setinfo] = useState({
    name: "",
    email: "",
    password: "",
    ConfirmPassword: "",
    address: "",
    phoneNumber: "",
    role: ""
  });

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) {
      setinfo(retriveContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(info));
  }, [info]);

  let register = (e) => {
    e.preventDefault();

    if (
      !info.name ||
      !info.email ||
      !info.password ||
      !info.address ||
      !info.phoneNumber ||
      !info.role
    ) {
      alert("Complete all the fields!!!");
      return;
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/users/:id" element={<Details user={user} />}></Route>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/registration"
          element={
            <Registration setinfo={setinfo} info={info} register={register} />
          }
        />

        <Route path="/" element={<users></users>}></Route>
        <Route
          path="/users"
          element={
            <Table
              computedUser={currentPosts}
              totalPosts={user.length}
              postPerPage={postPerPage}
              paginate={paginate}
              sorting={sorting}
              sortNumber={sortNumber}
              searching={searching}
              search={search}
              setSearch={setSearch}
            />
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
