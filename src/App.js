import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./Routes/Home";
import Login from "./Protected/Login";
import PrivateRoute from "./Protected/PrivateRoute";
import UserDashboard from "./Routes/UserDashboard";
import AdminDashboard from "./Routes/AdminDashboard";
import HtmlTutorial from "./Mern/HTML/IntroHtml";
import SelectorsHtml from "./Mern/HTML/SelectorsHtml";
import SyntaxHtml from "./Mern/HTML/SyntaxHtml";
import Introcss from './Mern/CSS/Introcss'
import SelectorsCss from './Mern/CSS/SelectorsCss'
import SyntaxCss from './Mern/CSS/SyntaxCss'
import IntroJavascript from './Mern/Javascript/IntroJavascript'
import SyntaxJavascript from './Mern/Javascript/SyntaxJavascript'
import SelectorsJavascript from './Mern/Javascript/SelectorsJavascript'
import IntroReact from './Mern/react/IntroReact'
import Hooksreact from './Mern/react/Hooksreact'
import Componentsreact from './Mern/react/Componentsreact'
import IntroMongo from './Mern/mongodb/IntroMongo'
import TutorialMongo from './Mern/mongodb/TutorialMongo'
import IntroExpress from './Mern/express/IntroExpress'
import TutorialExpress from './Mern/express/TutorialExpress'
import IntroNode from './Mern/node/IntroNode'
import TutorialNode from './Mern/node/TutorialNode'
import VideosMaterial from './Mern/Materials/VideosMaterial'
import PdfMaterial from './Mern/Materials/PdfMaterial'
import CompilerMaterial from './Mern/Materials/CompilerMaterial'
import Easy from './Mern/Test/Easy'
import Medium from './Mern/Test/Medium'
import Hard from './Mern/Test/Hard'
import Admin from './Routes/Admin'
import UserWelcome from './smallRoutes/UserWelcome'
import AdminTheme from './Admin/Dashboard/AdminDetails'
import AdminProfile from './Admin/Dashboard/AdminProfile'
import AdminSettings from './Admin/Dashboard/AdminSettings'
import AdminUsers from "./Admin/User/AdminUsers";
import AdminMern from "./Admin/Courses/AdminMern";
import AdminMean from "./Admin/Courses/AdminMean";
import AddCourse from './Admin/Courses/AddCourse';
import AdminComments from './Admin/User/AdminComments';
import AdminInsights from './Admin/User/AdminInsights'


const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={<Navigate to="/login" />} // Redirect to login page by default
          />
          <Route
            path="/user/*"
            element={<PrivateRoute element={<UserDashboard />} role="user" />}
          />
          <Route
            path="/home"
            element={<PrivateRoute element={<Home />} role="user" />}
          >
            <Route path="/home/dashboard" element={<UserWelcome />} />
            <Route path="/home/html1" element={<HtmlTutorial />} />
            <Route path="/home/html2" element={<SyntaxHtml />} />
            <Route path="/home/html3" element={<SelectorsHtml />} />
            <Route path="/home/css1" element={<Introcss />} />
            <Route path="/home/css2" element={<SyntaxCss />} />
            <Route path="/home/css3" element={<SelectorsCss />} />
            <Route path="/home/javascript1" element={<IntroJavascript />} />
            <Route path="/home/javascript2" element={<SyntaxJavascript />} />
            <Route path="/home/javascript3" element={<SelectorsJavascript />} />
            <Route path="/home/react1" element={<IntroReact />} />
            <Route path="/home/react2" element={<Componentsreact />} />
            <Route path="/home/react3" element={<Hooksreact />} />
            <Route path="/home/mongodb1" element={<IntroMongo />} />
            <Route path="/home/mongodb2" element={<TutorialMongo />} />
            <Route path="/home/express1" element={<IntroExpress />} />
            <Route path="/home/express2" element={<TutorialExpress />} />
            <Route path="/home/node1" element={<IntroNode />} />
            <Route path="/home/node2" element={<TutorialNode />} />
            <Route path="/home/material1" element={<VideosMaterial />} />
            <Route path="/home/material2" element={<CompilerMaterial />} />
            <Route path="/home/material3" element={<PdfMaterial />} />
            <Route path="/home/test1" element={<Easy />} />
            <Route path="/home/test2" element={<Medium />} />
            <Route path="/home/test3" element={<Hard />} />
          </Route>
          <Route
            path="/admin"
            element={<PrivateRoute element={<Admin/>} role="admin" />}
          >
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/theme" element={<AdminTheme />} />
            <Route path="/admin/profile" element={<AdminProfile />} />
            <Route path="/admin/settings" element={<AdminSettings />} />
            <Route path="/admin/users" element={<AdminUsers />} />
            <Route path="/admin/insights" element={<AdminInsights />} />
            <Route path="/admin/comments" element={<AdminComments />} />
            <Route path="/admin/course" element={<AddCourse />} />
            <Route path="/admin/mern" element={<AdminMern />} />
            <Route path="/admin/mean" element={<AdminMean />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
