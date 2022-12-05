import "./style.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{textDecoration:'none'}}>
        <span className="logo">Facebook</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="serachbar">
          <Search className="serachIcon"/>
          <input
            placeholder="Search for friend, post or video"
            type="text"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbatIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbatIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbatIconBadge">1</span>
          </div>
        </div>
        <img src="/assets/person/1.jpeg" alt="" className="topbarImg"/>
      </div>
    </div>
  );
};

export default Topbar;
