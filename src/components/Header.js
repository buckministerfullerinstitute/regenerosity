import React from "react";
import Typography from "@material-ui/core/Typography";
import LogoImage from "../assets/logo.png";
import Box from "@material-ui/core/Box";
import { styled } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import {COLORS} from '../core/theme';

const Logo = styled("img")({
  width: "100px",
  marginRight: "10px"
});

const Header = () => (
  <Link href="/">
    <Box display="flex" alignItems="center" mb={2} mt={3}>
      <Logo src={LogoImage} />
      <Typography variant="h3" display="inline" style={{color: COLORS.green}}>
        ReGenerosity
      </Typography>
    </Box>

  </Link>
);

export default Header;
