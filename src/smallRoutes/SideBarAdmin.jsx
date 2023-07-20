import React, { useState } from "react";
import { Link } from "react-router-dom";

const SidebarAdmin = () => {
    const dropdowns = [{
        title: "Dashboard",
        links: [
          { label: "Profile", to: "/admin/profile" },
          { label: "Theme", to: "/admin/theme" },
          { label: "Settings", to: "/admin/settings" },
        ],
      },
      {
        title: "Courses",
        links: [
          { label: "Add Course", to: "/admin/course" },
          { label: "MERN", to: "/admin/mern" },
          { label: "MEAN", to: "/admin/mean" },
        ],
      },
      {
        title: "User Details",
        links: [
          { label: "User Interactions", to: "/admin/users" },
          { label: "Insightes", to: "/admin/insights" },
          { label: "Comments", to: "/admin/comments" },
        ],
      }
    ];
  
    const [activeDropdown, setActiveDropdown] = useState(null);

    const toggleDropdown = (index) => {
      if (activeDropdown === index) {
        setActiveDropdown(null);
      } else {
        setActiveDropdown(index);
      }
    };
  
    return (
      <div className="sidenav ">
        {dropdowns.map((dropdown, index) => (
          <div className="dropdown" key={index}>
            <button
              className={`dropdown-btn ${activeDropdown === index ? 'active' : ''}`}
              onClick={() => toggleDropdown(index)}
            >
              {dropdown.title} <i className="fa fa-caret-down"></i>
            </button>
            <div className={`dropdown-container  ${activeDropdown === index ? 'show' : ''}`}>
              {dropdown.links.map((link, linkIndex) => (
                <Link  to={link.to} key={linkIndex}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };

  export default SidebarAdmin;