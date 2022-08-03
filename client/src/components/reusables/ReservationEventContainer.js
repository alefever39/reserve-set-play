import { Route, Switch } from "react-router-dom";
import AdminReservation from "../admin/AdminReservation";
import EditReservation from "../player/EditReservation";
import NewReservation from "../player/NewReservation";

function ReservationEventContainer({ handleNewReservation }) {
  return (
    <div>
      <Switch>
        <Route path="/home/edit_reservation">
          <EditReservation />
        </Route>
        <Route path="/home">
          <NewReservation handleNewReservation={handleNewReservation} />
        </Route>
        <Route path="/admin/">
          <AdminReservation />
        </Route>
      </Switch>
    </div>
  );
}

export default ReservationEventContainer;
