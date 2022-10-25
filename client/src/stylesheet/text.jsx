import styled from 'styled-components';

export const TextStyles = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  color: ${props => props.theme.dark};
  margin: 0;
  padding: 0;
  text-align: center;

  a {
    list-style: none;
    text-decoration: none;
    color: ${props => props.theme.dark};
    font-weight: 600;
    transition: all 0.3s ease-in-out;

    &:hover {
      color: ${props => props.theme.secondary};
      cursor: pointer;
    }
  }
`;