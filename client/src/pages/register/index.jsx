import { useContext, useState } from 'react';
import { AuthContext } from '../../context/auth.context';
import { CreatedUser } from '../createadUser';
import { RegisterForm } from './Form';
import { Text } from '../../components';

export const Register = () => {
  const [user, setUser] = useState({ name: '', email: '', password: '' });
  const [isNewUserCreated, setIsNewUserCreated] = useState(false);
  const { register } = useContext(AuthContext);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await register(user);

    if (!response.status === true) return;
    else setIsNewUserCreated(true);
  };

  return (
    <>
      {!isNewUserCreated ? (
        <>
          <h1 style={{ textAlign: 'center', marginTop: '.6rem' }}>Register</h1>
          <RegisterForm onSubmit={handleSubmit} handleChange={handleChange} user={user} />
          <Text text='Already have an account?' link='/login' />
        </>
      ) : (
        <CreatedUser />
      )}
    </>
  );
};