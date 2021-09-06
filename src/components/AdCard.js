import React from "react";
import styled from "styled-components";
// import FbIcon from "../assets/facebookIcon.png";
import Arrow from "../assets/Vector1.png";

const Container = styled.div`
  height: 346px;
  width: 350px;
  background: #ffffff;
  box-shadow: 0px 10px 20px rgba(41, 41, 42, 0.07);
  border-radius: 0px;
  @media screen and (max-width: 540px) {
    margin-bottom: 15px;
  }
`;
const Title = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  /* identical to box height, or 133% */

  font-feature-settings: "salt" on, "liga" off;

  /* Text / Gray 900 */
  margin-left: 32px;
  margin-top: 51px;
  color: #18191f;
`;
const Para = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 26px;
  /* or 162% */
  margin-top: 12px;
  margin-left: 32px;
  font-feature-settings: "salt" on, "liga" off;

  /* Text / Gray 900 */

  color: #18191f;
`;

const ExploreButton = styled.div`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  /* identical to box height, or 133% */
  margin-left: 32px;
  cursor: pointer;
  font-feature-settings: "salt" on, "liga" off;
  display: flex;
  align-items: center;
  /* Primary */

  color: #0f6eff;
`;

const AdCard = ({ logo, title, content }) => {
  return (
    <Container>
      <img src={logo} style={{ marginTop: "41px", marginLeft: "32px" }} />
      <Title>{title}</Title>
      <Para>{content}</Para>
      <ExploreButton>
        Explore{" "}
        <img
          src={Arrow}
          style={{
            marginLeft: "7px",
            height: "9.333333015441895px",
            width: "14.666828155517578px",
          }}
        />
      </ExploreButton>
    </Container>
  );
};

export default AdCard;
