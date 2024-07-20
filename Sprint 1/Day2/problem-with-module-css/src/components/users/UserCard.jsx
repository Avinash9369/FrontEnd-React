import st from "./User.module.css";
import User from "./User";



function UserCard(props) {
    function clickhandler(){
        alert(`You are now following ${props.name}`)
    }
  return (
    <div className={st.UserCard}>
      <div className={st.div1}>
        <img
          src={props.url}
          className={st.image}
        ></img>
      </div>
      <div className={st.div2}>
        <h2>{props.name}</h2>
        <p>{props.add}</p>
        <div className={st.divv}>
          <div>
          <h3 className={st.head}>Posts</h3>
          <p>{props.posts}</p>
          </div>
          <div>
          <h3 className={st.head}>Followers</h3>
          <p>{props.followers}</p>
          </div>
          <div>
          <h3 className={st.mhead}>Married</h3>
          <p>{props.marry}</p>
          </div>
        </div>
      </div>
      <div className={st.div3}>
        <button onClick={clickhandler}>Follow</button>
      </div>
    </div>
  );
}

export default UserCard;
