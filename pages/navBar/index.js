import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import GitHubIcon from "@mui/icons-material/GitHub";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { Container } from "@mui/system";
import { Divider, IconButton } from "@mui/material";

const pages = ["Home", "About", "Projects", "Skills"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{ background: "transparent", color: "red" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "black",
              textDecoration: "none",
            }}
          >
            <Image src="/business.svg" alt="Vercel Logo" width={50} height={50} />
          </Typography>
          <Box sx={{display: "flex"}} gap={2}>
            <a href="https://github.com/" target="_blank">
              <GitHubIcon
                sx={{
                  "& svg": {
                    fontSize: 50,
                    fill: "black",
                  },
                }}
              />
            </a>
            <a href="https://github.com/" target="_blank">
              <Image
                src="/gitlab.svg"
                alt="Picture of the author"
                width={25}
                height={25}
              />
            </a>
            <a href="https://github.com/" target="_blank">
              <Image
                src="/facebook.svg"
                alt="Picture of the author"
                width={25}
                height={25}
              />
            </a>
            <a href="https://github.com/" target="_blank">
              <Image
                src="/linkin.png"
                alt="Picture of the author"
                width={25}
                height={25}
              />
            </a>
          </Box>
       
        </Toolbar>
      </Container>
      <Divider></Divider>
    </AppBar>
  );
};
export default ResponsiveAppBar;
