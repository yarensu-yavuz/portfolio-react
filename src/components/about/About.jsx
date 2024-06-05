import React from "react";
import StyledAbout, {
  AboutSection,
  AboutParagraph,
  Icons,
  Polaroid,
  Gif,
} from "./About.styled";
import Flex from "../../style/FlexColumn.styled";
import FlexRow from "../../style/FlexRow.styled";
import { TbCat } from "react-icons/tb";
import { FaHeart } from "react-icons/fa";
import AnimatedTitle from "../../style/AnimatedTitle.styled";
import Foto from "../../assets/ben.png";

const About = () => {
  return (
    <StyledAbout>
      <AnimatedTitle>Hakkımda</AnimatedTitle>
      <FlexRow>
        <Flex>
          <Polaroid>
            <img src={Foto} alt="Yaren Su" />
            <span>Yaren Su</span>
          </Polaroid>
        </Flex>

        <AboutSection>
          <Flex>
            <Icons>
              <FaHeart />
              <TbCat />
              <FaHeart />
              <TbCat />
              <FaHeart />
              <TbCat />

              <FaHeart />
              <TbCat />
              <FaHeart />
              <TbCat />
              <FaHeart />
            </Icons>

            <AboutParagraph>
              Sanata ve yazılıma ilgi duyan bir birey olarak, bu iki tutkumun
              kesiştiği bir alan olan front-end geliştirme ile ilgileniyorum. Şu
              anda Turkcell bünyesinde GYGY 3.0-Front End sınıfında eğitim
              alıyorum. Ayrıca kedileri ve sanat tarihi hakkında okuma yapmayı
              seviyorum.
            </AboutParagraph>
          </Flex>
        </AboutSection>
      </FlexRow>

      <Gif src="https://i.gifer.com/VeC.gif" alt="Cat Gif" />
    </StyledAbout>
  );
};

export default About;
