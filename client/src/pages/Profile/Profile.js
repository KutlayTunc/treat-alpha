import { useSelector } from "react-redux"
import "./Profile.css"

const Profile = () => {
  const { user } = useSelector((state) => state.auth)

  return (
    <div className="profile-container">
      <div className="profile-item">User of this profile is: {user.name}</div>
    </div>
  )
}

export default Profile
