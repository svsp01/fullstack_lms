import React from "react";
import { Link } from "react-router-dom";


function AdminChart() {
  return (
    <div>
      <div className="container">
        <h2 className="text-center">Admin Dashboard</h2>
        <div className="row mt-4">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Manage Courses</h5>
                <p className="card-text">
                  Add, edit, and delete courses  available in the LMS.
                </p>
                <Link to="/admin/courses" className="btn btn-primary">
                  Go to Courses
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Manage Users</h5>
                <p className="card-text">
                  Manage users available in the LMS and their roles within the LMS.
                </p>
                <Link to="/admin/users" className="btn btn-primary">
                  Go to Users
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Manage Reports</h5>
                <p className="card-text">
                  Generate and view reports related to course progress, user
                  activity, etc.
                </p>
                <Link to="/admin/reports" className="btn btn-primary">
                  Go to Reports
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminChart;
