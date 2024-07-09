import './Navbar.css'
import { Link ,useLocation  } from 'react-router-dom'
import personImage from './../../assets/images/person-login.png'
import { useState } from 'react'
import { FaBars } from "react-icons/fa6";
import Sidebar from '../Sidebar/Sidebar';


function Navbar() {
  const [activeItem, setActiveItem] = useState("home");
  const [sideBarActive, setSideBarActive] = useState(false);
  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };
  const toggleDisplay = () => {
    setSideBarActive(!sideBarActive);
  };
  const location = useLocation();
  const isRegisterPage = location.pathname === "/register";
  const isLoginPage = location.pathname === "/login";

  if (isRegisterPage) {
    return null;
  }
  if(isLoginPage) {
    return null;
  }
  if (!isRegisterPage || !isLoginPage)
    return (
      <>
        <div className="navbar">
          <div className="container">
            <div className="login-icon">
              <Link to="/register" >
                <img src={personImage} alt="person image" />
              </Link>
            </div>
            <div className="nav-links">
              <ul>
              <li>
                  <Link
                    to="recommendations/hotels"
                    className={`  ${
                      activeItem === "recommendations" ? "active-nav" : ""
                    }`}
                    onClick={() => handleItemClick("recommendations")}
                  >
                    التوصيات
                  </Link>
                </li>
                {/* <li>

                  <Link
                    to="/recommendations"
                    className={`${
                      activeItem === "recommendations" ? "active-nav" : ""
                    }`}
                    onClick={() => handleItemClick("recommendations")}
                  >
                    التوصيات
                  </Link>
                </li> */}
                <li>
                  <Link
                    to="blogs/marks"
                    className={`  ${activeItem === "blog" ? "active-nav" : ""}`}
                    onClick={() => handleItemClick("blog")}
                  >
                    المدونة
                  </Link>
                </li>
                <li>
                  <Link
                    to="explore/lands"
                    className={`  ${
                      activeItem === "explore" ? "active-nav" : ""
                    }`}
                    onClick={() => handleItemClick("explore")}
                  >
                    استكشف
                  </Link>
                </li>
                <li>
                  <Link
                    to="about/visit"
                    className={`  ${
                      activeItem === "about" ? "active-nav" : ""
                    }`}
                    onClick={() => handleItemClick("about")}
                  >
                    عن سوريا
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className={`  ${activeItem === "home" ? "active-nav" : ""}`}
                    onClick={() => handleItemClick("home")}
                  >
                    الرئيسية
                  </Link>
                </li>
              </ul>
            </div>
            <div className="nav-brand">
              <p>
                <span>Visit</span> Syria
              </p>
            </div>
            <div className="bar-icon" onClick={toggleDisplay}>
              <FaBars />
            </div>
          </div>
        </div>
        {sideBarActive && (
          <Sidebar isActive={sideBarActive} toggleDisplay={toggleDisplay} />
        )}
      </>
    );
}

export default Navbar
