import SpaceContainer from "../reusables/SpaceContainer";
import { Route, Switch, useHistory } from "react-router-dom";
import Reservations from "./Reservations";

function PlayerContainer({
  user,
  recCenters,
  loginModalOpen,
  setLoginModalOpen,
}) {
  const history = useHistory();

  if (user.user_type) {
    if (user.user_type.user_type !== "player") {
      history.push("/");
    }
  } else {
    history.push("/");
  }
  
  return (
    <div>
      <Switch>
        <Route path="/home/my_reservations">
          <Reservations />
        </Route>
        <Route path="/home">
          <SpaceContainer recCenters={recCenters} />
        </Route>
      </Switch>
    </div>
  );
}

export default PlayerContainer;
