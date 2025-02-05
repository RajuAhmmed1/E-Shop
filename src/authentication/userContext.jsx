import { createContext, useState, useEffect } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const token = localStorage.getItem('access_token')
    if (token) {
      const fetchProfile = async () => {
        try {
          const response = await axios.get(
            'http://127.0.0.1:8000/api/profile/',
            {
              headers: { Authorization: `Bearer ${token}` },
            },
          )
          setUser(response.data)
        } catch (error) {
          console.error('Failed to fetch profile', error)
        }
      }
      fetchProfile()
    }
  }, [])

  const value = { user, setUser }

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

UserProvider.propTypes = { children: PropTypes.node.isRequired }
