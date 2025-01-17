import React from "react";
import {
  FooterContainer,
  LinksContainer,
  TopLinkS,
  BottomLinks,
  SocialContainer,
  SvgContainer,
  Links,
  Img,
  FollowContainer,
  ImgContainer,
  Title,
  FollowUs,
  IconContainer,
  FollowIcons,
  FirstPng,
} from "./FooterElements";
import { FaFacebookF,FaTwitter,FaInstagram,FaLinkedinIn,FaPinterestP } from "react-icons/fa";
import Logo from "../../../assets/images/logo2.png";
import First from "../../../assets/images/footer/first.svg"
import Second from "../../../assets/images/footer/second.svg"
import Third from "../../../assets/images/footer/third.svg"
import Fourth from "../../../assets/images/footer/fourth.svg"
const Footer = () => {
  return (
    <FooterContainer>
      <LinksContainer>
        <TopLinkS>
          <Links to="/">About Us</Links>
          <Links to="/">Press Releases</Links>
          <Links to="/">Terms of Services</Links>
          <Links to="/">Privacy</Links>
          <Links to="/">Contact Us</Links>
        </TopLinkS>
        <BottomLinks>
          <Links to="/">Research</Links>
          <Links to="/">Help</Links>
          <Links to="/">Careers</Links>
          <Links to="/">Blog</Links>
          <Links to="/">Our Story</Links>
        </BottomLinks>
      </LinksContainer>
      <SocialContainer>
        <ImgContainer>
          <Img src={Logo} alt="logo" />
          <Title>
            Real<span>Et</span>
          </Title>
        </ImgContainer>
        <FollowContainer>
          <FollowUs>Follow Us</FollowUs>
          <IconContainer>
            <FollowIcons href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </FollowIcons>
            <FollowIcons href="https://twitter.com/home" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </FollowIcons>
            <FollowIcons href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </FollowIcons>
            <FollowIcons href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </FollowIcons>
            <FollowIcons href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
              <FaPinterestP />
            </FollowIcons>
          </IconContainer>
        </FollowContainer>
      </SocialContainer>
      <SvgContainer>
        <FirstPng src={First} alt="first-footer-img"/>
        <FirstPng src={Second} />
        <FirstPng src={Third} />
        <FirstPng src={Fourth}/>
      </SvgContainer>
    </FooterContainer>
  );
};

export default Footer;
