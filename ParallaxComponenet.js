import React from "react";
import styled from "styled-components";

const StyledDiv = styled("div")`
  position: relative;
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-image: url("https://images.pexels.com/photos/2707756/pexels-photo-2707756.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
`;

const StyledText = styled("h4")`
  position: absolute;
  top: 50%;
  left: 50%;
  color: #fff;
  font-size: 40px;
`;

export const ParallaxComponent = ({ img, text }) => {
  return (
    <StyledDiv img={img}>
      <StyledText>{text}</StyledText>
    </StyledDiv>
  );
};
