import MeetupItem from "./MeetupItem";
import styles from "./MeetupList.module.css";

function MeetupList(props) {
  return (
    <ul className={styles.list}>
      {props.meetupsArray.map((item) => (
        <MeetupItem
          key={item.id}
          id={item.id}
          title={item.title}
          image={item.image}
          address={item.address}
          descreption={item.descreption}
        />
      ))}
    </ul>
  );
}

export default MeetupList;
