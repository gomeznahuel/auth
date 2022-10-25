import { NavLink } from 'react-router-dom'
import { HomeContainer } from '../../stylesheet/homepage'

export const Home = () => {  
  return (
    <HomeContainer>
      <h1>Welcome!</h1>
      <p>Select an option from the menu to start using the app.</p>
      <div>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
      </div>
    </HomeContainer>
  )
}