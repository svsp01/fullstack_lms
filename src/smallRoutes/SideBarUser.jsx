import React, { useState } from "react";
import { Link } from "react-router-dom";

const SidebarUser = () => {
    const dropdowns = [{
        title: "HTML",
        links: [
          { label: "Introduction", to: "/home/html1" },
          { label: "Syntax", to: "/home/html2" },
          { label: "Selectors", to: "/home/html3" },
        ],
      },
      {
        title: "CSS",
        links: [
          { label: "Introduction", to: "/home/css1" },
          { label: "Syntax", to: "/home/css2" },
          { label: "Selectors", to: "/home/css3" },
        ],
      },
      {
        title: "Javascript",
        links: [
          { label: "Introduction", to: "/home/javascript1" },
          { label: "Variables", to: "/home/javascript2" },
          { label: "Comments", to: "/home/javascript3" },
        ],
      },
      {
        title: "React",
        links: [
          { label: "Introduction", to: "/home/react1" },
          { label: "Components", to: "/home/react2" },
          { label: "Hooks", to: "/home/react3" },
        ],
      },
      {
        title: "MongoDB",
        links: [
          { label: "Introduction", to: "/home/mongodb1" },
          { label: "Tutorial", to: "/home/mongodb2" },
        ],
      },
      {
        title: "Express.JS",
        links: [
          { label: "Introduction", to: "/home/express1" },
          { label: "Tutorial", to: "/home/express2" },
        ],
      },
      {
        title: "Node.JS",
        links: [
          { label: "Introduction", to: "/home/node1" },
          { label: "Tutorial", to: "/home/node2" },
        ],
      },
      {
        title: "Material",
        links: [
          { label: "Videos", to: "/home/material1" },
          { label: "Compailer", to: "/home/material2" },
          { label: "Pdf", to: "/home/material3" },
        ],
      },
      {
        title: "Test your skill",
        links: [
          { label: "Easy", to: "/home/test1" },
          { label: "Medium", to: "/home/test2" },
          { label: "Hard", to: "/home/test3" },
        ],
      },
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

  export default SidebarUser