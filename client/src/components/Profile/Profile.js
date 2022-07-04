import UserContext from "../../contexts/UserContext"
import { useContext } from "react"
import "./Profile.css"

const Profile = () => {
  const user = useContext(UserContext)

  return (
    <div className="profile-container">
      <div className="profile-item">
        User of this profile is: {user.first_name}
      </div>
    </div>
  )
}

export default Profile
