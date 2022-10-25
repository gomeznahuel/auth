import { useContext } from "react";
import { HeaderContainer } from "../../stylesheet/header";
import { AuthContext } from "../../context/auth.context";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const { isLogged, logout } = useContext(AuthContext);

  return (
    <HeaderContainer>
      <NavLink to="/">App!</NavLink>
      {isLogged ? (
        <>
          <NavLink to="/load">Load</NavLink>
          <NavLink to="/list">List</NavLink>
          <NavLink to="/login" onClick={logout}>
            Logout
          </NavLink>
        </>
      ) : null}
    </HeaderContainer>
  );
};
