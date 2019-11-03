import React, { Fragment } from "react";
import { styled } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import { COLORS } from "../core/theme";
import Hero from "./Hero";

import SectionOneImage from "../assets/images/personal-growth.svg";
import SectionTwoImage from "../assets/images/networking.svg";
import SectionThreeImage from "../assets/images/success.svg";
import SectionFourImage from "../assets/images/growth.svg";

const Wrapper = styled("div")(({ theme }) => ({
  minHeight: "100vh",
  maxWidth: "100vw",
  overflowX: "hidden",
  color: COLORS.dark,
  backgroundColor: 'white'
}));

const Section = styled(Box)(({ theme }) => ({
  minHeight: "50vh",
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(10),
  "& img": {
    width: "100%"
  },
  display: "flex",
  alignItems: "center"
}));

const SectionText = styled(Typography)(({ theme }) => ({
  //textShadow: '2px 2px rgba(0,0,0,0.5)'
}));


const SectionOne = styled(Section)({
  //backgroundColor: COLORS.purple
});

const SectionTwo = styled(Section)({
  //backgroundColor: COLORS.red
});

const SectionThree = styled(Section)({
  //backgroundColor: COLORS.green
});

const SectionFour = styled(Section)({
 // backgroundColor: COLORS.purple
});



const SectionImage = styled("img")(({ theme }) => ({
}));

const HomePage = () => {
  return (
    <Wrapper>
      <Hero />
<Container maxWidth="lg">
      <SectionOne>
        <Grid
          container
          spacing={2}
          justify="center"
          alignItems="center"
          alignContent="center"
        >
          <Grid item sm={12} md={6}>
            <Container>
              <Paper component={Box} p={2} elevation={4}>
                <SectionImage src={SectionOneImage} />
              </Paper>
            </Container>

          </Grid>
          <Grid item sm={12} md={6}>
            <Container>
              <SectionText variant="h5">
                We help nurture the potential of community-led initiatives to regenerate eco-social systems while growing the capacity of donors to enable transformation.
              </SectionText>
            </Container>
          </Grid>
        </Grid>
      </SectionOne>

      <SectionTwo>
        <Grid
          container
          spacing={2}
          justify="center"
          alignItems="center"
          alignContent="center"
        >

          <Grid item sm={12} md={6}>
            <Container>
              <SectionText variant="h5">
                As the climate and ecological emergency unravels, projects that aim to restore the health of their ecosystems and communities are emerging all around the world.
              </SectionText>
            </Container>
          </Grid>
          <Grid item sm={12} md={6}>
            <Container>
              <Paper component={Box} p={2} elevation={4}>
                <SectionImage src={SectionTwoImage} />
              </Paper>
            </Container>

          </Grid>
        </Grid>
      </SectionTwo>

      <SectionThree>
        <Grid
          container
          spacing={2}
          justify="center"
          alignItems="center"
          alignContent="center"
        >
          <Grid item sm={12} md={6}>
            <Container>
              <Paper component={Box} p={2} elevation={4}>
                <SectionImage src={SectionThreeImage} />
              </Paper>
            </Container>

          </Grid>
          <Grid item sm={12} md={6}>
            <Container>
              <SectionText variant="h5">
                There is need to scale impact and shift capital to unlock the potential of community-led initiatives regenerating eco-social systems and growing the capacity of donors to enable transformation.
              </SectionText>
            </Container>
          </Grid>
        </Grid>
      </SectionThree>

      <SectionFour>
        <Grid
          container
          spacing={2}
          justify="center"
          alignItems="center"
          alignContent="center"
        >
         
          <Grid item sm={12} md={6}>
            <Container>
              <SectionText variant="h5">
                There is need to scale impact and shift capital to unlock the potential of community-led initiatives regenerating eco-social systems and growing the capacity of donors to enable transformation.
              </SectionText>
            </Container>
          </Grid>
          <Grid item sm={12} md={6}>
            <Container>
              <Paper component={Box} p={2} elevation={4}>
                <SectionImage src={SectionFourImage} />
              </Paper>
            </Container>
          </Grid>
        </Grid>
      </SectionFour>
      </Container>
    </Wrapper>
  );
};

export default HomePage;
