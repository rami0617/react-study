import React from "react";
import { Routes, Navigate, Route } from "react-router-dom";
import Home from "../pages/home";
import LoginPage from "../pages/login";
import PostList from "../pages/posts";
import PostDetail from "../pages/posts/detail";
import PostEdit from "../pages/posts/edit";
import PostNew from "../pages/posts/new";
import ProfilePage from "../pages/profile";
import SignUpPage from "../pages/signup";

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/posts" element={<PostList />}></Route>
        <Route path="/posts/:id" element={<PostDetail></PostDetail>}></Route>
        <Route path="/posts/new" element={<PostNew></PostNew>}></Route>
        <Route path="/posts/detail/:id" element={<PostEdit></PostEdit>}></Route>
        <Route path="/profile" element={<ProfilePage></ProfilePage>}></Route>
        <Route path="/login" element={<LoginPage></LoginPage>}></Route>
        <Route path="/signup" element={<SignUpPage></SignUpPage>}></Route>
        <Route path="*" element={<Navigate replace to="/"></Navigate>}></Route>
      </Routes>
    </>
  );
}
