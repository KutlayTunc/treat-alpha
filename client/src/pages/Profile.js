import { useSelector } from "react-redux"
import "./Profile.css"

const Profile = () => {
  const { user } = useSelector((state) => state.auth)

  return (
    <div className="profile-container">
      <div className="profile-item">Welcome {user.name}</div>
    </div>
  )
}

export default Profile
