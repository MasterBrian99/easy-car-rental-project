import React from "react";
import Navbar from "../../containers/common/Navbar/Navbar";
import Profile from "../../containers/common/Profile/Profile";

const ProfilePage = () => {
  return (
    <div>
      <Navbar />
      <Profile />
      <div className="CircleContainerOne"></div>
      <div className="CircleContainerTwo"></div>
    </div>
  );
};

export default ProfilePage;
