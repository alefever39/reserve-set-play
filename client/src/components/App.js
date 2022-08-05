import Header from "./everyone/Header";
import InformationContainer from "./InformationContainer";
import "../App.css";
import { useState, useEffect } from "react";

function App() {
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [user, setUser] = useState({});
  const [readyToLoad, setReadyToLoad] = useState(false);

  useEffect(() => {
    fetch("/me", {
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
