import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 100%;
  height: 60px;
  background-color: ${props => props.theme.dark};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 0 20px;
  box-sizing: border-box;
  text-transform: uppercase;
`;

export const Paragraph = styled.p`
  color: #fff;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 600;
  transition: all 0.3s ease-in-out;
`;
