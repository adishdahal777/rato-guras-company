import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
 
import Main from "../main/Main";

const NotFound = () => {
  return <div className="grid place-content-center h-screen"><div className="text-gray-500 text-9xl uppercase">Page Not found</div></div>;
};

export default function RoutesRatoGuras() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Main/>}  />
         
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
