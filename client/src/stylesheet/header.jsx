import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 360px;
  width: 100%;
  margin: 0 auto;
  height: 80px;
  background-color: ${props => props.theme.dark};
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  box-sizing: border-box;
  text-transform: uppercase;

  a {
    color: #fff;
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: 600;
    transition: all 0.3s ease-in-out;
  }
`;
