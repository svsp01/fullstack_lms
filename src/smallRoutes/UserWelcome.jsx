import React from "react";
import mern from "../Images/mern.png";
import dev from "../Images/development.png";

function UserWelcome() {
  return (
    <>
      <div className="container ">
        <div className="row  pt-4">
          <div className="col-5 mb-5 d-flex justify-content-center">
            <img src={mern} alt="mern stack" />
          </div>
          <div className="col-7 ">
            <div className="container">
              <h1 style={{color:"#29D3B2"}}>MERN Stack</h1>
              <p >
                MERN stack is a collection of technologies that enables faster
                application development. It is used by developers worldwide. The
                main purpose of using MERN develop dynamic web apps and
                websites. It is a contraction for four different technologies as
                mentioned below: M - MongoDB E - ExpressJS R - ReactJS N -
                NodeJS Considering you’ve downloaded and configured all the four
                stack is to develop apps using JavaScript only. This is because
                the four technologies that make up the technology stack are all
                JS-based.
              </p>
            </div>
          </div>
        </div>
        <div className="row  pb-4">
          <div className="col-7 ">
            <div className="container">
              <h3 style={{color:"#29D3B2"}}>Feautures of MERN Stack</h3>
              <ul>
                <li>
                  Full-stack JavaScript: The entire stack is built using
                  JavaScript, simplifying development and maintaining
                  consistency in the codebase.
                </li>
                <li>
                  Real-time data updates: MERN applications can utilize
                  technologies like WebSockets and Socket.IO for real-time data
                  updates and bidirectional communication.
                </li>
                <li>
                  Reusable components: React.js promotes a component-based
                  architecture, enabling developers to create reusable UI
                  components for a more modular and maintainable codebase.
                </li>
                <li>
                  Single-page applications (SPAs): React.js allows for the
                  development of SPAs, reducing the need for full page reloads
                  and providing a smoother user experience.
                </li>
                
              </ul>
            </div>
          </div>
          <div className="col-5 d-flex justify-content-center">
            <img src={dev} alt="Development" />
          </div>
        </div>
      </div>
    </>
  );
}

export default UserWelcome;
