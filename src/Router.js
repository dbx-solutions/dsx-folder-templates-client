import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./components/Main/Main";
import Auth from "./components/Auth/Auth";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="auth" element={<Auth />} />
    </Routes>
  )
}