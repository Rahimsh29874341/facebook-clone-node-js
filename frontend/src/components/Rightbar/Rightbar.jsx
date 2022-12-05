import "./style.css";
import { Users } from "../../dummydata";
import Online from "../Online/Online";

const Rightbar = ({ profile }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img src="/assets/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 other friends</b> have birthday today
          </span>
        </div>
        <img src="/assets/ad.png" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => {
            return <Online user={u} key={u.id} />;
          })}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="RightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfovalue">New York</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfovalue">Madrid</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfovalue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              className="rightbarFollowingImg"
              src={`${PF}person/1.jpeg}`}
              alt=""
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              className="rightbarFollowingImg"
              src={`${PF}person/2.jpeg}`}
              alt=""
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              className="rightbarFollowingImg"
              src={`${PF}person/3.jpeg}`}
              alt=""
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              className="rightbarFollowingImg"
              src={`${PF}person/4.jpeg}`}
              alt=""
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              className="rightbarFollowingImg"
              src={`${PF}person/5.jpeg}`}
              alt=""
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              className="rightbarFollowingImg"
              src={`${PF}person/6.jpeg}`}
              alt=""
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              className="rightbarFollowingImg"
              src={`${PF}person/7.jpeg}`}
              alt=""
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              className="rightbarFollowingImg"
              src={`${PF}person/8.jpeg}`}
              alt=""
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {!profile ? <HomeRightbar/> : <ProfileRightbar />}
      </div>
    </div>
  );
};

export default Rightbar;
