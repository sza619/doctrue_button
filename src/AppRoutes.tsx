import React from "react";
import { Route, Routes } from "react-router-dom";
import Signin from "./screens/Signin";
import Button from "./screens/Button";
import ChooseHosp from "./screens/ChooseHosp";
import ChooseDoc from "./screens/ChooseDoc";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Signin />} />
      <Route path="/admin" element={<ChooseHosp />} />
      <Route path="/:hospital_id" element={<ChooseDoc />} />
      <Route path="/:hospital_id/:mapping_id" element={<Button />} />
    </Routes>
  );
};

export default AppRoutes;
