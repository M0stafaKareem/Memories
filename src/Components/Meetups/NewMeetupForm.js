import { useRef } from "react";
import Card from "../ui/Card";
import styles from "./NewMeetupForm.module.css";

function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descreptionInputRef = useRef();

  const onSubmit = (event) => {
    event.preventDefault();

    const formData = {
      title: titleInputRef.current.value,
      image: imageInputRef.current.value,
      address: addressInputRef.current.value,
      descreption: descreptionInputRef.current.value,
    };

    props.addMemoryHandler(formData);
  };

  return (
    <div>
      <h1>Add New Memory</h1>
      <Card>
        <form className={styles.form}>
          <div className={styles.control}>
            <label htmlFor="title">Memory Title</label>
            <input type="text" required id="title" ref={titleInputRef} />
          </div>
          <div className={styles.control}>
            <label htmlFor="image">Memory image</label>
            <input type="url" required id="image" ref={imageInputRef} />
          </div>
          <div className={styles.control}>
            <label htmlFor="address">Memory address</label>
            <input type="text" required id="address" ref={addressInputRef} />
          </div>
          <div className={styles.control}>
            <label htmlFor="descreption">Memory descreption</label>
            <textarea
              rows={5}
              required
              id="descreption"
              ref={descreptionInputRef}
            />
          </div>
          <div className={styles.actions}>
            <button onClick={onSubmit}>Add Memory</button>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default NewMeetupForm;
