import React from "react";
import styled from "styled-components";
import BGmask from "../assets/bgmask.png";
import svg5 from "../assets/Illustration 4.png";
import { NavButton } from "../style/styled";

const Container = styled.div`
  background-image: url(${BGmask});
  background-repeat: no-repeat;
  width: 77%;
  height: 288px;
  margin-top: 100px;
  display: flex;
  @media screen and (max-width: 540px) {
    width: 100%;
    height: auto;
    padding-bottom: 20px;
  }
`;

const ContentContainer = styled.div`
  width: 517px;
  margin-left: 10.99%;
  @media screen and (max-width: 540px) {
    width: 200px;
  }
`;
const Title = styled.p`
  font-family: Poppins;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 54px;
  letter-spacing: 0em;
  text-align: left;
  color: #ffffff;
  @media screen and (max-width: 540px) {
    font-size: 15px;
  }
`;
const Button = styled(NavButton)`
  background-color: #0a286b;
  color: white;
  height: 51px;
  border-radius: 0px 6px 6px 0px;
  @media screen and (max-width: 540px) {
    border-radius: 6px;
  }
`;
const RowWrapper = styled.div``;
const Input = styled.input`
  padding-left: 10px;
  width: 248px;
  height: 48px;
  background: #f4f5f7;
  border: none;
  border-radius: 6px 0px 0px 6px;

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 0px;
  @media screen and (max-width: 540px) {
    width: 200px;
    border-radius: 6px;
    margin-bottom: 10px;
  }
`;
const Picture = styled.img`
  margin-left: 16%;
  width: 175px;
  height: 160px;
  @media screen and (max-width: 540px) {
    height: 100px;
    width: 100px;
    margin-left: 2%;
  }
`;

const SubscriptionBox = () => {
  return (
    <Container>
      <Picture
        src={svg5}
        style={{
          marginTop: "78px",
        }}
      />
      <ContentContainer>
        <Title>Be one of the first to know when we launch!</Title>
        <RowWrapper>
          <Input placeholder="your email address" />
          <Button>Get Early Acess</Button>
        </RowWrapper>
      </ContentContainer>
    </Container>
  );
};

export default SubscriptionBox;
