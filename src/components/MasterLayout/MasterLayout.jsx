import React from "react";
import Sidebar from "../Dashboard/Dashboard";
import { Outlet } from "react-router-dom";

export default function MasterLayout() {
  return (
    <div className="w-100 ">
      <Sidebar />
      <div
        style={{
          padding: "30px",
          backgroundColor: "#f1f1f1",
          height: "100vh",
          
        }}
      >
        <Outlet />
        
      </div>
    </div>
  );
}
