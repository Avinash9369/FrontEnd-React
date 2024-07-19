import Image from "./Imaage";
import styles from "./User.module.css";

function User(props) {
  return (
    <div className={styles.App}>
      <Image imgUrl={props.url} />
      <h3>{props.name}</h3>
      <p>{props.role}</p>
    </div>
  );
}

export default User;