import React from "react";
import Container from "@material-ui/core/Container";
import { styled } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";

import BackgroundImage from "../assets/images/eco-town.jpeg";
import LogoImage from "../assets/logo.png";
import { COLORS } from "../core/theme";

const Title = styled(Typography)({
  fontFamily: "Montserrat, sans-serif",
  fontSize: "8rem",
  fontWeight: "bold",
  color: COLORS.green
});
const Subtitle = styled(Typography)({
  colors: COLORS.dark,
  fontSize: "1.6rem",
  marginLeft: "6px"
});

const Wrapper = styled(Container)({
  minHeight: "90vh",
  marginBottom: "10vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundImage: `url(${BackgroundImage})`,
  backgroundPosition: "bottom center",
  backgroundRepeat: "no-repeat",
  backgroundColor: "white"
});

const Logo = styled("img")({
  width: "200px",
  marginBottom: "30px"
});

const CtaButton = styled(Button)({
  backgroundColor: COLORS.red,
  fontSize: "2rem",
  color: "white",
  marginTop: "200px",
  textDecoration: 'none!important',
  '&:hover':{
    backgroundColor: COLORS.green
  }
});

const Hero = () => (
  <Wrapper>
    <Box display="flex" alignItems="center">
      <Logo src={LogoImage} />
      <Box ml={2}>
        <Title variant="h2">
          ReGenerosity
        </Title>
        <Subtitle paragraph variant="h5">
          Connection + Capital for Community-led Regenerative Projects.
        </Subtitle>
      </Box>

    </Box>
    <Link component={CtaButton} href="/projects" variant="contained">Explore our Community</Link>
  </Wrapper>
);

export default Hero;
