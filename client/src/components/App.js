import Header from "./everyone/Header";
import InformationContainer from "./InformationContainer";
import "../App.css";
import { useState, useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { Flex, Container, Box } from "@chakra-ui/react";

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
      <Flex as="header" w="100%">
        <Header
          setLoginModalOpen={setLoginModalOpen}
          user={user}
          setUser={setUser}
        />
      </Flex>
      <Box as="main" mt="100px">
        <InformationContainer
          loginModalOpen={loginModalOpen}
          setLoginModalOpen={setLoginModalOpen}
          setUser={setUser}
          user={user}
          readyToLoad={readyToLoad}
        />
      </Box>
    </div>
  );
}

export default App;
