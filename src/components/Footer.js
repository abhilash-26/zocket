import React from "react";
import styled from "styled-components";
import ZLogo from "../assets/zocketlogo.png";
import Insta from "../assets/instagramicon.png";
import twitter from "../assets/twitter.png";
import youtube from "../assets/youtube.png";
import { Link } from "react-router-dom";
import send from "../assets/sendicon.png";

const Container = styled.div`
  width: 100%;
  height: 352px;
  left: 0px;
  display: flex;
  top: 3920px;
  margin-top: 68px;
  border: 1px solid #cacaca;
  box-sizing: border-box;
  @media screen and (max-width: 540px) {
    flex-wrap: wrap;
    height: auto;
  }
`;
const FirstBox = styled.div`
  margin-left: 12.99%;
  margin-top: 50px;
`;
const CopyRight = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  font-feature-settings: "salt" on, "liga" off;
  color: #606062;
`;
const SocialMediaBox = styled.div``;

const SecondBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20%;
  margin-top: 50px;
  @media screen and (max-width: 540px) {
    margin-left: 40px !important;
    margin-top: 15px;
  }
`;

const Title = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  /* identical to box height, or 150% */

  font-feature-settings: "salt" on, "liga" off;

  color: #525252;
`;
const StyledLink = styled(Link)`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 26px;
  /* identical to box height, or 162% */
  text-decoration: none !important;
  font-feature-settings: "salt" on, "liga" off;

  color: #606062;
`;
const Send = styled.div`
  height: 10px;
  width: 10px;
  background-image: url(${send});
`;
const InputField = styled.input`
  height: 40px;
  width: 255px;
  border-radius: 6px;
  background: #0f6eff;
  opacity: 0.2;
  border: none;
  padding-left: 12px;
  ::placeholder {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    /* identical to box height, or 171% */

    font-feature-settings: "salt" on, "liga" off;
    z-index: 4;
    color: black;
  }
  @media screen and (max-width: 540px) {
    width: 150px;
  }
`;
const RowWrapper = styled.div``;

const Footer = () => {
  return (
    <Container>
      <FirstBox>
        <img src={ZLogo} />
        <CopyRight>Copyright © 2021 Zocket.</CopyRight>
        <CopyRight>All rights reserved</CopyRight>
        <SocialMediaBox>
          <img src={Insta} style={{ marginRight: "16px" }} />
          <img src={twitter} style={{ marginRight: "16px" }} />
          <img src={youtube} />
        </SocialMediaBox>
      </FirstBox>
      <SecondBox>
        <Title>Company</Title>
        <StyledLink>About Us</StyledLink>
        <StyledLink>Blog</StyledLink>
        <StyledLink>ContactUs</StyledLink>
        <StyledLink>Pricing</StyledLink>
        <StyledLink>Testimonials</StyledLink>
      </SecondBox>
      <SecondBox style={{ marginLeft: "100px" }}>
        <Title>Support</Title>
        <StyledLink>Help Center</StyledLink>
        <StyledLink>Terms of service</StyledLink>
        <StyledLink>Legal</StyledLink>
        <StyledLink>Privacy policy</StyledLink>
        <StyledLink>Status</StyledLink>
      </SecondBox>
      <SecondBox style={{ marginLeft: "100px" }}>
        <Title
          style={{ color: "#0F6EFF", fontWeight: "600", fontSize: "20px" }}
        >
          Get Early Acess
        </Title>
        <RowWrapper>
          <InputField placeholder="your email address" />
          <img
            src={send}
            style={{
              height: "16.5px",
              width: "16.5px",
              marginLeft: "-30px",
              marginBottom: "-5px",
              cursor: "pointer",
              zIndex: "100",
            }}
            onClick={() => alert("clicked")}
          />
        </RowWrapper>
      </SecondBox>
    </Container>
  );
};

export default Footer;
