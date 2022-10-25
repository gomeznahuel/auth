import { FormContainer, InputContainer, ButtonContainer, Paragraph } from '../../stylesheet/form';

export const LoginForm = ({ onSubmit, handleChange, user }) => {
  return (
    <>
      <FormContainer onSubmit={onSubmit}>
        <InputContainer type='text' name='email' value={user.email} onChange={handleChange} autoComplete='off' placeholder='email' />
        <InputContainer type='password' name='password' value={user.password} onChange={handleChange} placeholder='password' />
        <ButtonContainer type='submit'>Login</ButtonContainer>
      </FormContainer>
    </>
  );
};

