import React, { useState } from "react";
import { UserContext } from "./context/UserContext";
import Router from "./router/Router";

function App() {
  const [user, setUser] = useState({
    username: "",
    fullName: "",
    role: "guest",
    image: "",
    address: "",
    pass: "",
  });

  return (
    <>
      {/* @ts-ignore */}
      <UserContext.Provider value={[user, setUser]}>
        <Router />
      </UserContext.Provider>
    </>
  );
}

export default App;
