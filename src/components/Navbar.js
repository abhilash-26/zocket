import React from "react";
import styled from "styled-components";
import LogoIcon from "../assets/zocketlogo.png";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

const Container = styled.div`
  height: 72px;
  width: 100%;

  display: flex;
  align-items: center;
  @media screen and (max-width: 540px) {
    flex-direction: column;
    height: auto;
  }
`;
const Logo = styled.img`
  margin-left: 11%;
  width: 150px;
  height: 48px;
  cursor: pointer;
`;

const NavLinkContainer = styled.div`
  margin-left: 28%;

  /* width: 500px; */
  display: flex;
  align-items: center;
  @media screen and (max-width: 1140px) {
    margin-left: 15%;
  }
  @media screen and (max-width: 1000px) {
    margin-left: 10%;
  }
  @media screen and (max-width: 540px) {
    flex-direction: column;
  }
`;
const StyledLink = styled.a`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  text-decoration: none !important;
  margin-right: 30px;
  color: #18191f;
`;
const NavButton = styled.button`
  height: 40px;
  width: 154px;
  border-radius: 6px;
  background: #0f6eff;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Navbar = () => {
  const history = useHistory();
  return (
    <Container>
      <Logo src={LogoIcon} onClick={() => history.push("/")} />
      <NavLinkContainer>
        <StyledLink href="#services">Services</StyledLink>
        <StyledLink href="#whyus">Why Us</StyledLink>
        <StyledLink href="#about">About</StyledLink>
        <StyledLink href="#services">Pricing</StyledLink>
        <StyledLink href="#contact">Contact</StyledLink>
        <NavButton>
          <StyledLink style={{ color: "white", marginRight: "0" }}>
            Get Early Access
          </StyledLink>
        </NavButton>
      </NavLinkContainer>
    </Container>
  );
};

export default Navbar;
