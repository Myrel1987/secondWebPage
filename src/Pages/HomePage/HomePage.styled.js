import styled from "styled-components";

const HomePageStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;
  h1 {
    text-shadow: 0 0 10px hsla(200, 100%, 88%, 0.5);
  }
  span {
    color: hsla(200, 100%, 70%, 0.7);
    text-shadow: 0 0 10px hsla(200, 100%, 88%, 0.5);
  }

  .typography {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;

    .icons {
      display: flex;
      justify-content: center;
      .icon {
        border: 2px solid var(--border-color);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: all 0.4s ease-in-out;
        cursor: pointer;
        &:hover {
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
        }
        &:not(:last-child) {
          margin-right: 1rem;
        }
        svg {
          margin: 0.5rem;
        }
      }
    }
  }
`;

export default HomePageStyled;
