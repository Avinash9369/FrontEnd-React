import st from "./UserProfileDetails.module.css";

function UserProfileDetails(props) {
  return (
    <div className={st.App}>
      <h1>Name : {props.name}</h1>
      <p>City: {props.city}</p>
    </div>
  );
}

export default UserProfileDetails;