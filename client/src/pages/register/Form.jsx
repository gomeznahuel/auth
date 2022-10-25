import { FormContainer, InputContainer, ButtonContainer } from '../../stylesheet/form';

export const RegisterForm = ({ onSubmit, handleChange, user }) => {
  return (
    <FormContainer onSubmit={onSubmit}>
      <InputContainer type='text' name='name' value={user.name} onChange={handleChange} autoComplete='off' placeholder='name' />
      <InputContainer type='text' name='email' value={user.email} onChange={handleChange} autoComplete='off' placeholder='email' />
      <InputContainer type='password' name='password' value={user.password} onChange={handleChange} placeholder='password' />
      <ButtonContainer type='submit'>Register</ButtonContainer>
    </FormContainer>
  );
};