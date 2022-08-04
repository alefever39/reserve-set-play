import Header from "./everyone/Header";
import InformationContainer from "./InformationContainer";
import "../App.css";
import { useState, useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";

function App() {
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [user, setUser] = useState({});
  const [readyToLoad, setReadyToLoad] = useState(false);
  console.log(user);

  useEffect(() => {
    fetch("http://localhost:3000/me", {
      method: "GET",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setUser(data);
          setReadyToLoad(true);
        } else {
          setReadyToLoad(true);
        }
      });
  }, []);

  return (
    <div className="App">
      <Header
        setLoginModalOpen={setLoginModalOpen}
        user={user}
        setUser={setUser}
      />
      <InformationContainer
        loginModalOpen={loginModalOpen}
        setLoginModalOpen={setLoginModalOpen}
        setUser={setUser}
        user={user}
        readyToLoad={readyToLoad}
      />
    </div>
  );
}

export default App;
