import styled from "styled-components";

const StyledAbout = styled.div`
  padding: 4rem 0;
  background-color: ${({ theme }) => theme.colors.white};
  position: relative;

  & > div {
    flex-grow: 2;
    flex-basis: 0;
    margin: 2rem;
  }
`;

export const Polaroid = styled.div`
  background: ${({ theme }) => theme.gradients.gradientthird};
  display: inline-block;
  margin: 55px 75px 30px;
  padding: 15px 15px 30px;
  text-align: center;
  text-decoration: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  transition: all 0.2s linear;
  z-index: 0;
  position: relative;

  img {
    display: block;
    width: 350px;
  }

  span {
    color: #333;
    font-size: 25px;
    position: relative;
    top: 15px;
  }

  &:hover {
    transform: scale(1.2);
    z-index: 10;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.7);
  }
`;

export const Icons = styled.div`
  display: flex;
  width: 100%;
  font-size: ${({ theme }) => theme.icons.default.size};
  color: ${({ theme }) => theme.icons.default.color};
  margin: 0rem;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid black;
  padding-bottom: 0.5rem;

  svg {
    margin-right: 0.5rem;
    color: ${({ theme }) => theme.icons.default.color};
    font-size: ${({ theme }) => theme.icons.default.size};
  }
`;

export const AboutSection = styled.div`
  margin: 2rem;
  align-items: center;
  justify-content: center;
  border: 2px solid black;
  padding: 1.5rem;
  width: 40%;
  background: ${({ theme }) => theme.gradients.gradientthird};
  &:hover {
    transform: scale(1.2);
    z-index: 10;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.7);
  @media (max-width: ${({ theme }) => theme.responsive.medium}) {
    width: calc(50% - 1rem);
  }

  @media (max-width: ${({ theme }) => theme.responsive.small}) {
    width: 100%;
  }
`;

// export const AboutTitle = styled.h2`
//   color: ${({ theme }) => theme.icons.default.color};
// `;

export const AboutParagraph = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.icons.default.color};
  line-height: 1.5;
  margin-bottom: 1rem;
  margin-right: 2rem;
  text-align: justify;
`;

export const Gif = styled.img`
  width: 150px;
  height: auto;
  position: absolute;
  bottom: 10px;
  right: 20px;
`;

export default StyledAbout;
