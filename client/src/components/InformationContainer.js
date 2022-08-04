import { Route, Switch, useHistory } from "react-router-dom";
import AdminContainer from "./admin/AdminContainer";
import PlayerContainer from "./player/PlayerContainer";
import EveryoneContainer from "./everyone/EveryoneContainer";
import { useState, useEffect } from "react";
import { Spinner } from "@chakra-ui/react";

function InformationContainer({
  loginModalOpen,
  setLoginModalOpen,
  user,
  setUser,
  readyToLoad,
}) {
  const [recCenters, setRecCenters] = useState([]);
  const [displayDate, setDisplayDate] = useState(new Date());
  const [displayReservation, setDisplayReservation] = useState({});
  const history = useHistory();

  useEffect(() => {
    console.log("useEffect called");
    fetch(`http://localhost:3000/rec_centers`, {
      method: "GET",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("info container fetch", data);
        setRecCenters(data);
      });
  }, []);

  useEffect(() => {
    if (user.user_type) {
      switch (user.user_type.user_type) {
        case "admin":
          history.push("/admin");
          break;
        case "player":
          history.push("/home");
          break;
        default:
          history.push("/");
      }
    } else {
      history.push("/");
    }
  }, [user]);

  return (
    <>
      {readyToLoad ? (
        <Switch>
          <Route path="/admin">
            <AdminContainer
              recCenters={recCenters}
              loginModalOpen={loginModalOpen}
              setLoginModalOpen={setLoginModalOpen}
              user={user}
              displayDate={displayDate}
              setDisplayDate={setDisplayDate}
              displayReservation={displayReservation}
              setDisplayReservation={setDisplayReservation}
            />
          </Route>
          <Route path="/home">
            <PlayerContainer
              user={user}
              recCenters={recCenters}
              loginModalOpen={loginModalOpen}
              setLoginModalOpen={setLoginModalOpen}
              displayDate={displayDate}
              setDisplayDate={setDisplayDate}
              displayReservation={displayReservation}
              setDisplayReservation={setDisplayReservation}
            />
          </Route>
          <Route path="/">
            <EveryoneContainer
              recCenters={recCenters}
              loginModalOpen={loginModalOpen}
              setLoginModalOpen={setLoginModalOpen}
              setUser={setUser}
              displayDate={displayDate}
              setDisplayDate={setDisplayDate}
              setDisplayReservation={setDisplayReservation}
            />
          </Route>
        </Switch>
      ) : (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      )}
    </>
  );
}

export default InformationContainer;
