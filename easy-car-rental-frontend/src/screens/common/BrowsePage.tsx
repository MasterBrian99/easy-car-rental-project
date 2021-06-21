import React, { useContext } from "react";
import Navbar from "../../containers/common/Navbar/Navbar";
import { UserContext } from "../../context/UserContext";

const BrowsePage = () => {
  // @ts-ignore
  const { user, setUser } = useContext(UserContext);
  return (
    <div>
      <Navbar />
    </div>
  );
};

export default BrowsePage;
