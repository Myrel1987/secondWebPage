import styled from "styled-components";

const ButtonMailTo = styled.a`
  background-color: var(--primary-color);
  padding: 0.8rem 2.5rem;
  color: white;
  cursor: pointer;
  display: inline-block;
  font-size: inherit;
  text-transform: uppercase;
  position: relative;
  transition: all 0.4s ease-in-out;

  &:hover::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 0.4rem;
    background-color: var(--white-color);
    left: 0;
    bottom: 0;
  }
`;

export default ButtonMailTo;
