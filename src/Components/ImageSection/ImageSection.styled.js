import styled from "styled-components";

const ImageSectionStyled = styled.div`
  margin-top: 5rem;
  display: flex;
  vertical-align: bottom;
  align-items: center;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    .left-content {
      margin-bottom: 1rem;
    }
  }
  .left-content {
    padding-top: 2rem;
    width: 100%;
    img {
      width: 85%;
      object-fit: cover;
    }
  }
  .right-content {
    width: 100%;
    h4 {
      font-size: 2rem;
      color: var(--white-color);
      span {
        font-size: 2rem;
      }
    }
    .paragraph {
      color: hsla(200, 100%, 80%, 0.8);
      text-shadow: 0 0 10px hsla(200, 100%, 80%, 0.6);
      padding: 1rem 0;
    }
    .about-info {
      display: flex;
      padding-bottom: 1.4rem;
      .info-title {
        padding-right: 3rem;
        p {
          font-weight: 600;
        }
      }
      .info-title,
      .info {
        p {
          padding: 0.3rem 0;
        }
      }
    }
  }
`;

export default ImageSectionStyled;
