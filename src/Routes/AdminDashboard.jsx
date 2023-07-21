import React from "react";
import Navtop from "../smallRoutes/NavTop";
import SidebarAdmin from "../smallRoutes/SideBarAdmin";
import Admin1 from "../Admin/Charts/Admin1";
import AdminChart from "../Admin/Charts/AdminChart";

const AdminDashboard = () => {
  return (
    <>
      <div className="container">
        <div className="mb-5">
          <AdminChart />
        </div>
        <div className="container mx-auto">
          <Admin1 />
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
