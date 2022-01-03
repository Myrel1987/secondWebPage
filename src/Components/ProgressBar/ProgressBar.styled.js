import styled from "styled-components";

const ProgressBarStyled = styled.div`
  .progress-bar {
    display: flex;
    align-items: center;
    p {
      padding-right: 1.1rem;
    }
    .progress {
      position: relative;
      width: 100%;
      height: 0.4rem;
      background-color: var(--border-color);
      span {
        position: absolute;
        left: 0;
        bottom: 0;
        height: 100%;
        background-color: var(--primary-color);
      }
    }
  }
`;
export default ProgressBarStyled;
