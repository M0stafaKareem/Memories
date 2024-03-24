import { useContext, useState } from "react";
import Card from "../ui/Card";
import styles from "./MeetupItem.module.css";
import FavouriteContext from "../../store/favourite-context";
import Loader from "../ui/Loader";

function MeetupItem(props) {
  const [isLoading, setIsLoading] = useState(false);

  const favCtx = useContext(FavouriteContext);
  const memoryIsFav = favCtx.checkFav(props.id);
  function deleteMemoryHandler() {
    setIsLoading(true);
    fetch(
      "https://react-meetups-f1329-default-rtdb.firebaseio.com/memories/"
        .concat(props.id)
        .concat(".json"),
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      setIsLoading(false);
      window.location.reload();
    });
  }

  function FavouriteBtnHandler() {
    if (memoryIsFav) {
      favCtx.removeFromFav(props.id);
    } else {
      favCtx.addToFavs({
        key: props.id,
        id: props.id,
        title: props.title,
        image: props.image,
        description: props.descreption,
        address: props.address,
      });
    }
  }

  return (
    <li className={styles.item}>
      {isLoading && <Loader />}
      <Card>
        <div className={styles.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={styles.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.descreption}</p>
        </div>
        <div className={styles.actions}>
          <button onClick={deleteMemoryHandler}>Delete Memory</button>
          <button onClick={FavouriteBtnHandler}>
            {" "}
            {memoryIsFav ? "Remove Favoutite" : "To Favourite"}{" "}
          </button>
        </div>
      </Card>
    </li>
  );
}
export default MeetupItem;
