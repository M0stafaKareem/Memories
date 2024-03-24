import { useEffect, useState } from "react";
import MeetupList from "../Components/Meetups/MeetupList";
import Card from "../Components/ui/Card";
import Loader from "../Components/ui/Loader";

function Allmeetups() {
  const [databaseMemories, setDatabaseMemories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://react-meetups-f1329-default-rtdb.firebaseio.com/memories.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const memories = [];
        for (const key in data) {
          const memoryData = {
            id: key,
            ...data[key],
          };
          memories.push(memoryData);
        }
        setDatabaseMemories(memories);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <Loader />;
  }
  if (databaseMemories.length === 0) {
    return (
      <>
        <h1>All Memories</h1>
        <Card>
          <h3 style={{ textAlign: "center", lineHeight: "70px" }}>
            Oops You don't have any Memories! Wanna add some ?{" "}
          </h3>
        </Card>
      </>
    );
  }
  return (
    <div>
      <h1>All Memories</h1>
      <MeetupList meetupsArray={databaseMemories} />
    </div>
  );
}

export default Allmeetups;
