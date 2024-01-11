import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../Home/Home";

export const Navigate = () => {
  return (
    <Routes>
      <Route element={<Home />} />
    </Routes>
  );
};
