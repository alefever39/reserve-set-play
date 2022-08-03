import SpaceContainer from "../reusables/SpaceContainer";
import { Route, Switch } from "react-router-dom";
import Reservations from "./Reservations";

function PlayerContainer({ recCenters }) {
  console.log("player recCenters", recCenters);
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
