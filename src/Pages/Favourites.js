import MeetupList from "../Components/Meetups/MeetupList";
import Card from "../Components/ui/Card";
import FavouriteContext from "../store/favourite-context";
import { useContext } from "react";

function Favourites() {
  const favCtx = useContext(FavouriteContext);

  if (favCtx.favourites.length === 0) {
    return (
      <>
        <h1>Favourites</h1>
        <Card>
          <h3 style={{ textAlign: "center", lineHeight: "70px" }}>
            Oops You don't have any Favourites! Wanna add some ?{" "}
          </h3>
        </Card>
      </>
    );
  }
  return (
    <div>
      <h1>All Memories</h1>
      <MeetupList meetupsArray={favCtx.favourites} />
    </div>
  );
}

export default Favourites;
