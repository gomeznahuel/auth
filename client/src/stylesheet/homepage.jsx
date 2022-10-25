import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 10px;

  h1 {
    margin-top: .6rem;
  }

  p {
    margin: 0.4rem;
  }

  div {
    width: 100%;
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    margin-top: 0.6rem;

    a {
      text-decoration: none;
      color: var(--primary);
      margin: 0 1rem;
      transition: all 0.3s ease-in-out;
      font-weight: 700;

      &:hover {
        color: var(--secondary);
        transform: scale(1.1);
        cursor: pointer;
      }
    }
  }
`;
