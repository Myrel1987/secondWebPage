import styled from "styled-components";

const ResumeStyled = styled.section`
  .small-title {
    padding-bottom: 2rem;
  }
  .u-small-title-margin {
    margin-top: 3rem;
  }

  .resume-content {
    border-left: 2px solid var(--border-color);
  }
  .links {
    padding: 2rem 2rem;
    color: var(--white-color);
    display: flex;
    justify-content: space-between;
  }
  .images {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 0 20px;
    padding: 20px;
    z-index: 999;
  }

  .photo {
    object-fit: cover;
    max-width: 31.333%;
    padding: 0 5px;
    height: 200px;
    &:hover {
      transform: scale3d(4, 4, 2);
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
      transition: all 0.4s ease-in-out;
    }
  }

  .photo img {
    width: 80%;
    height: 80%;
  }
`;
export default ResumeStyled;
