import React, { useState } from "react";
import styled from "styled-components";
import dotIcon1 from "../assets/icon1.png";
import dotIcon2 from "../assets/icon2.png";
import svg1 from "../assets/Illustration.png";
import { NavButton } from "../style/styled";
import AdCard from "./AdCard";
import GLogo from "../assets/google1.png";
import ILogo from "../assets/Instagram.png";
import FLogo from "../assets/facebookIcon.png";
import svg2 from "../assets/Illustration1.png";
import svg3 from "../assets/Illustration2.png";
import svg4 from "../assets/Illustration3.png";
import Semi from "../assets/semi.png";
import ReviewCard from "./ReviewCard";
import SubscriptionBox from "./SubscriptionBox";
import Footer from "./Footer";
import axios from "axios";

/*
Styled components for css
*/

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 540px) {
    padding: 10px;
  }
`;
const HeroSection = styled.div`
  display: flex;

  @media screen and (max-width: 540px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
    padding-left: 5px;
  }
`;
const HeroContentWrapper = styled.div`
  width: 513px;
  @media screen and (max-width: 540px) {
    width: 95%;
  }
`;
const HeroTitle = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 65px;
  line-height: 75px;
  color: #18191f;
  margin-top: 93px;
  margin-bottom: 17px;
  @media screen and (max-width: 540px) {
    font-size: 25px;
    line-height: 30px;
    /* margin-left: 30px; */
    margin-top: 20px;
  }
`;
const HeroPara = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;
  margin-top: 0px;
  color: #505050;
  margin-bottom: 35px;
  @media screen and (max-width: 540px) {
    font-size: 15px;
    width: 90%;
  }
`;
const EmailBox = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  @media screen and (max-width: 540px) {
    width: 100%;
  }
`;
const Input = styled.input`
  height: 40px;
  width: 68%;
  outline: none;
  padding-left: 16px;
  background: #f4f5f4;
  border: none;
  border-radius: 6px 0px 0px 6px;
  @media screen and (max-width: 540px) {
    width: 60%;
  }
`;
const Button = styled(NavButton)`
  color: white;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: center;
  height: 42px;
  border-radius: 0 6px 6px 0;
`;
const Services = styled.div`
  height: 590px;
  width: 80%;
  /* border: 1px solid red; */

  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 140px;
  @media screen and (max-width: 540px) {
    height: auto;
    margin-top: 20px;
    width: 95%;
  }
`;
const Title = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 64px;
  margin-top: 0;

  font-feature-settings: "salt" on, "liga" off;

  /* Text / Gray 900 */

  color: #18191f;
  @media screen and (max-width: 540px) {
    font-size: 28px;
    height: auto;
  }
`;
const AdCardConatiner = styled.div`
  width: 100%;
  display: flex;
  height: auto;
  justify-content: space-around;
  @media screen and (max-width: 540px) {
    flex-direction: column;
  }
`;
const WhyUsContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 540px) {
    width: 100%;
  }
`;

const WhyUsContentContainer = styled.div`
  display: flex;
  justify-content: space-around;

  /* width: 507px; */
  margin-top: ${(props) => props.marginTop};
  @media screen and (max-width: 540px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
  }
`;

const WhyUsSubContainer = styled.div`
  width: 45%;

  @media screen and (max-width: 540px) {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;
const WhyUsContentTitle = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 40px;

  line-height: 54px;

  font-feature-settings: "salt" on, "liga" off;

  color: #18191f;
  @media screen and (max-width: 540px) {
    font-size: 18px;
  }
`;

const WhyUsContentPara = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 32px;

  font-feature-settings: "salt" on, "liga" off;

  color: #18191f;
  @media screen and (max-width: 540px) {
    font-size: 14px;
  }
`;
const HearItFromThem = styled.div`
  padding-top: 50px;
  width: 100%;
  background-image: url(${Semi});
  background-repeat: no-repeat;
  background-position-x: 95%;
  background-position-y: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const CardContainer = styled.div`
  display: flex;

  border: 1px solid red;
  flex-direction: row;

  @media screen and (max-width: 540px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Picture = styled.img`
  @media screen and (max-width: 540px) {
    width: 70%;
    height: 200px;
  }
`;
const Dots = styled.img`
  @media screen and (max-width: 540px) {
    margin-top: 10px !important;
  }
`;
const Homepage = () => {
  const [email, setEmail] = useState("");
  /*
  api call axios
  */
  const handleSendMail = async () => {
    try {
      const result = await axios({
        method: "post",
        url: "",
        data: email,
      });
    } catch (error) {}
  };
  return (
    <Container>
      <Dots
        src={dotIcon1}
        style={{
          marginLeft: "53%",
          marginTop: "45px",
          height: "15px",
          width: "15px",
        }}
      />
      <Dots
        src={dotIcon2}
        style={{
          marginTop: "53px",
          height: "30px",
          width: "30px",
        }}
      />
      <HeroSection>
        <HeroContentWrapper>
          <HeroTitle>FACEBOOK ADS IN 30 SECONDS</HeroTitle>
          <HeroPara>
            Create stunning ad copy incredibly fast and skyrocket your digital
            business.
          </HeroPara>
          <EmailBox>
            <Input placeholder="Your email address" />
            <Button>Get Early Access</Button>
          </EmailBox>
        </HeroContentWrapper>
        <Picture src={svg1} />
      </HeroSection>
      <Services id="services">
        <Title>Tailor-made Services</Title>
        <AdCardConatiner>
          <AdCard
            logo={FLogo}
            title={"Facebook Ads"}
            content={
              "With custom audience targeting and personalized ad campaigns, your business is sure to acquire leads."
            }
          />
          <AdCard
            logo={GLogo}
            title={"GoogleAds"}
            content={
              "We offer industry research paired with PPC monitoring and A/B testing to ensure you get an improved ROI."
            }
          />
          <AdCard
            logo={ILogo}
            title={"Instagram Ads"}
            content={
              "Right from design & content strategy to profile management and everything in between, we’ve got you covered."
            }
          />
        </AdCardConatiner>
      </Services>
      <WhyUsContainer id="whyus">
        <Title>Why Us</Title>
        <WhyUsContentContainer>
          <Picture src={svg2} />
          <WhyUsSubContainer>
            <WhyUsContentTitle>Localised Ad Campaigns</WhyUsContentTitle>
            <WhyUsContentPara>
              With Zocket’s localised ad campaigns, you’re sure to drive
              customers to your physical store. Online business listings,
              geo-tagging, and ads are some of the many things we help
              businesses get started with. You can rest assured that you’ll
              leave a positive brand image on your customers as your business
              flourishes, making it easier for you to build long-lasting
              customer relationships locally.
            </WhyUsContentPara>
          </WhyUsSubContainer>
        </WhyUsContentContainer>
        <WhyUsContentContainer marginTop="151px">
          <WhyUsSubContainer>
            <WhyUsContentTitle>Get More Calls and Enquiries</WhyUsContentTitle>
            <WhyUsContentPara>
              When you use Zocket, you can expect calls pouring in with
              enquiries about your business. Our exceptional outreach strategies
              and business profile optimization techniques will catch the eye of
              prospects. With organic leads taken care of by Zoket, all you’d
              have to worry about is converting your leads to customers.
            </WhyUsContentPara>
          </WhyUsSubContainer>
          <Picture src={svg3} />
        </WhyUsContentContainer>
        <WhyUsContentContainer marginTop="151px">
          <Picture src={svg4} />
          <WhyUsSubContainer>
            <WhyUsContentTitle>No Expertise Required</WhyUsContentTitle>
            <WhyUsContentPara>
              Zocket is completely beginner friendly and doesn’t require any
              previous marketing expertise to use. Built with an aim to make
              marketing easier for small businesses, Zocket is powered by AI and
              will provide done-for-you content while you can take care of other
              important things in your business. With easy-to-follow guides, it
              doesn’t get better than this.
            </WhyUsContentPara>
          </WhyUsSubContainer>
        </WhyUsContentContainer>
      </WhyUsContainer>
      <HearItFromThem id="about">
        <Title>Hear It From Them</Title>
        <CardContainer>
          <ReviewCard />
          <ReviewCard />
          {/* <ReviewCard /> */}
          {/* <ReviewCard />
          <ReviewCard />
          <ReviewCard /> */}
        </CardContainer>
      </HearItFromThem>
      <SubscriptionBox id="contact"></SubscriptionBox>
      <Footer />
    </Container>
  );
};

export default Homepage;
