import { NavLink } from 'react-router-dom'

export const IsNotLogged = () => {
  return (
    <div>
      <p>You are not logged in.</p>
      <p>Please, login or register.</p>

      <div>
        <NavLink to="/login">Login</NavLink> <br />
        <NavLink to="/register">Register</NavLink>
      </div>
    </div>
  )
}