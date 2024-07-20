import st from "./User.module.css";
import UserCard from "./UserCard";


function User() {
  return (
    <div className={st.User}>
      <h3 className={st.heading}>User List</h3>
      <UserCard 
      url="https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/enhancer/1.jpg"
      name="Chrisse" 
      add="4018 Sachs Trail" 
      posts="1841"
      followers="66868"
      marry="Yes"
      />
      <UserCard 
      url="https://imgv3.fotor.com/images/slider-image/A-clear-close-up-photo-of-a-woman.jpg"
      name="Chandler" 
      add="15 Yemen road, Yemen" 
      posts="1433"
      followers="20000"
      marry="No"
      />
    </div>
  );
}

export default User;
