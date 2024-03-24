import { useNavigate } from "react-router-dom";
import NewMeetupForm from "../Components/Meetups/NewMeetupForm";

function Newmeetups() {
  const navigate = useNavigate();

  function formSubmitHandler(memoriesData) {
    fetch(
      "https://react-meetups-f1329-default-rtdb.firebaseio.com/memories.json",
      {
        method: "POST",
        body: JSON.stringify(memoriesData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => navigate("/AllMeetups", { replace: true }));
  }

  return <NewMeetupForm addMemoryHandler={formSubmitHandler} />;
}

export default Newmeetups;
