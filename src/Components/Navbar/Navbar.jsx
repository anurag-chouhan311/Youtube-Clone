import "./Navbar.css";
import menuIcon from "../../assets/menu.png";
import logo from "../../assets/logo.png";
import searchIcon from "../../assets/search.png";
import upload_icon from "../../assets/upload.png";
import more_icon from "../../assets/more.png";
import notification_icon from "../../assets/notification.png";
import profile_icon from "../../assets/jack.png";
import { Link, useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { prov } from "../../App";
const Navbar = ({ setSidebar }) => {
  const { setCategory } = useContext(prov);
  const [inputValue, setInputValue] = useState();
  const handleInput = () => {
    if (inputValue === "gaming") {
      setCategory(20);
    } else if (inputValue === "automobiles") {
      setCategory(2);
    } else if (inputValue === "sports") {
      setCategory(17);
    } else if (inputValue === "entertainment") {
      setCategory(24);
    } else if (inputValue === "technology") {
      setCategory(28);
    } else if (inputValue === "music") {
      setCategory(10);
    } else if (inputValue === "blogs") {
      setCategory(22);
    } else if (inputValue === "news") {
      setCategory(25);
    } else if (inputValue === "home") {
      setCategory(0);
    }
  };
  return (
    <>
      <nav className="flex-div">
        <div className="nav-left flex-div">
          <img
            onClick={() => setSidebar((prev) => !prev)}
            className="menu-icon"
            src={menuIcon}
            alt=""
          />
          <Link to={"/"}>
            {" "}
            <img className="logo" src={logo} alt="" />
          </Link>
        </div>

        <div className="nav-middle flex-div">
          <div className="search-box flex-div">
            <input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              type="text"
              placeholder="Search by category"
            />
            <img onClick={handleInput} src={searchIcon} alt="" />
          </div>
        </div>

        <div className="nav-right flex-div">
          <img src={upload_icon} alt="" />
          <img src={more_icon} alt="" />
          <img src={notification_icon} alt="" />
          <img src={profile_icon} className="user-icon" alt="" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
