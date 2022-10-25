import { useContext, useState } from 'react';
import { AuthContext } from '../../context/auth.context';
import { useNavigate } from 'react-router-dom';
import { LoginForm } from './Form';
import { Text } from '../../components';

export const Login = () => {
  const [user, setUser] = useState({ email: '', password: '' });
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await login(user);

    if (!response.status === true) return;
    else { localStorage.setItem('x-token', response.token); navigate(0); }
  };

  return (
    <>
      <h1 style={{ textAlign: 'center', marginTop: '.6rem' }}>Login</h1>
      <LoginForm onSubmit={handleSubmit} handleChange={handleChange} user={user} />
      <Text text="Don't have an account?" link='/register' />
    </>
  );
};
