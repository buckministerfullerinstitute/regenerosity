import React from "react";
import Container from "@material-ui/core/Container";
import { styled } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import LogoImage from '../assets/logo.png';
import { COLORS } from "../core/theme";

const Title = styled(Typography)({
  fontFamily: "Mukta Malar, sans-serif",
  fontSize: "10rem",
  textTransform: "uppercase",
  color: COLORS.green
});
const Subtitle = styled(Typography)({});

const Wrapper = styled(Container)({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center"
});

const Logo = styled('img')({})

const Hero = () => (
  <Wrapper>
    <Logo src={LogoImage}/>
    <Title variant="h1">
      Regenerosity
    </Title>
    <Subtitle paragraph variant="h4">
      Connection + Capital for Community-led Regenerative Projects.
    </Subtitle>
    <Button variant="contained">Explore our Community</Button>
  </Wrapper>
);

export default Hero;
