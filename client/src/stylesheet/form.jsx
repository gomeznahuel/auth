import styled from 'styled-components';

export const FormContainer = styled.form`
  width: 360px;
  margin: 0 auto;
  padding: 10px 0;
  background-color: #fff;
  border-radius: 5px;
`;

export const InputContainer = styled.input`
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
`;

export const ButtonContainer = styled.button`
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
    background-color: ${props => props.theme.dark};
    color: #fff;
    text-transform: uppercase;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: #fff;
      background-color: ${props => props.theme.secondary};
    }
`;

export const Paragraph = styled.p`
  text-align: center;
`;