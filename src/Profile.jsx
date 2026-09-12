import { useParams } from "react-router";

const Profile = () => {
  const {name} = useParams();
  return (
    <div>
      <h1>Hello from profile page!</h1>
      <p>So, how are you?</p>
      {
        (name==='james' ? <h1>Hi James</h1> : <h1>Who are you</h1>)
      }
    </div>
  );
};

export default Profile;
