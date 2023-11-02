import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Router, Routes, Navigate, Route } from "react-router-dom";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/posts">POST List</Link>
        </li>
        <li>
          <Link to="/posts/:id">POST Detail</Link>
        </li>
        <li>
          <Link to="/posts/new">POST New</Link>
        </li>
        <li>
          <Link to="/posts/detail/:id">POST Edit</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>}></Route>
        <Route path="/posts" element={<h1>Post List Page</h1>}></Route>
        <Route path="/posts/:id" element={<h1>Post Detail Page</h1>}></Route>
        <Route path="/posts/new" element={<h1>Post New Page</h1>}></Route>
        <Route
          path="/posts/detail/:id"
          element={<h1>Post Edit Page</h1>}
        ></Route>
        <Route path="/profile" element={<h1>Profile Page</h1>}></Route>
        <Route path="*" element={<Navigate replace to="/"></Navigate>}></Route>
      </Routes>
    </>
  );
}

export default App;
