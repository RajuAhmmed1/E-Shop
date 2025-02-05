import { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('') // Changed from username to email
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/api/token/',
        {
          email: email, // Ensure email is sent instead of username
          password: password,
        },
        { headers: { 'Content-Type': 'application/json' } },
      )

      localStorage.setItem('access_token', response.data.access)
      localStorage.setItem('refresh_token', response.data.refresh)
      navigate('/profile')
    } catch (error) {
      console.error(
        'Login error:',
        error.response ? error.response.data : error,
      ) // Debugging
      setErrorMessage('Invalid email or password')
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-96">
        <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
        {errorMessage && (
          <p className="text-red-500 text-center mb-4">{errorMessage}</p>
        )}
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400"
          />
          <button
            type="submit"
            className="cursor-pointer bg-lime-500 hover:bg-lime-600 text-white font-semibold py-3 rounded-lg transition duration-200"
          >
            Login
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4">
          Dont you have an account?{' '}
          <Link to="/register" className="text-lime-500 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login
