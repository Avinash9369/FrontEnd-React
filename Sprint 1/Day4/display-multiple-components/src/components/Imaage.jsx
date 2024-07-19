import styles from "./Image.module.css";

function Image(props) {
  return <img className={styles.App} src={props.imgUrl} alt="" />;
}

export default Image;