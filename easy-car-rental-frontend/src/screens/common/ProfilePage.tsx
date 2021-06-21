import React, { useContext } from "react";
import Navbar from "../../containers/common/Navbar/Navbar";
import { UserContext } from "../../context/UserContext";

const ProfilePage = () => {
  // @ts-ignore
  const [user] = useContext(UserContext);

  return (
    <div>
      <Navbar />
      {console.log(user)}
      <div className="CircleContainerOne"></div>
      <div className="CircleContainerTwo"></div>
    </div>
  );
};

export default ProfilePage;
