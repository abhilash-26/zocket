import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 220px;
  width: 540px;
  border: 1px solid red;
  background: #ffffff;
  box-shadow: 0px 10px 20px rgba(41, 41, 42, 0.07);
  margin-right: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 540px) {
    margin-bottom: 15px;
  }
`;

const Title = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  /* identical to box height, or 156% */

  text-align: center;
  font-feature-settings: "salt" on, "liga" off;

  /* Text / Gray 900 */

  color: #18191f;
`;
const ContentContainer = styled.div`
  width: 80%;
  @media screen and (max-width: 540px) {
    width: 95%;
    margin-top: -10px;
  }
`;
const Content = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  /* or 171% */

  text-align: center;
  font-feature-settings: "salt" on, "liga" off;

  /* Text / Gray 900 */

  color: #18191f;
`;

const ReviewCard = () => {
  return (
    <Container>
      <Title>Incredibly Amazing!</Title>

      <ContentContainer>
        <Content>
          Zocket made a huge difference in just a few weeks of using it. Their
          ad copy helped take our business to the next level and the support
          they offered during our association was top-notch. If you’re looking
          to elevate your brand or business, Zocket is your go-to site!
        </Content>
      </ContentContainer>
    </Container>
  );
};

export default ReviewCard;
