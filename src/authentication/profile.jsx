import { useContext } from 'react'
import { UserContext } from './userContext'

const Profile = () => {
  const { user } = useContext(UserContext) // Use useContext hook to access user data from context

  if (!user) {
    return <p>There is no user data</p> // Display message if user is not found
  }

  return (
    <div>
      <h1>Profile</h1>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>Name: {user.first_name}</p>
      {/* Uncomment if profile picture exists */}
      {/* {user.profile_picture && <img src={user.profile_picture} alt="Profile" />} */}
    </div>
  )
}

export default Profile
