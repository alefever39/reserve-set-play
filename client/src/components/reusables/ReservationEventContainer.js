import { Route, Switch } from "react-router-dom";
import AdminReservation from "../admin/AdminReservation";
import EditReservation from "../player/EditReservation";
import NewReservation from "../player/NewReservation";


function ReservationEventContainer({ handleNewReservation, handleUpdate, handleAdminReservation }) {

  return (
    <div>
      <Switch>
        <Route path="/home/edit_reservation">
          <EditReservation handleUpdate={handleUpdate} />
        </Route>
        <Route path="/home">
          <NewReservation handleNewReservation={handleNewReservation} />
        </Route>
        <Route path="/admin/">
          <AdminReservation handleAdminReservation={handleAdminReservation}/>
        </Route>
      </Switch>
    </div>
  );
}

export default ReservationEventContainer;
