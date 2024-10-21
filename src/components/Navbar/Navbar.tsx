import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import TerminalIcon from "@mui/icons-material/Terminal";
import { Link } from "react-router-dom";

const links = [
  { label: "about", hashLink: "/#about" },
  { label: "projects", hashLink: "/#projects" },
  { label: "experience", hashLink: "/#work" },
  { label: "contact", hashLink: "/#contact" },
];

const Logo = () => {
  return (
    <>
      <Box sx={{ mt: "4px" }}>
        <TerminalIcon sx={{ mr: 1 }}></TerminalIcon>
      </Box>
      <Box>
        <Typography
          variant="h6"
          noWrap
          sx={{
            mr: 2,
            fontWeight: 700,
            letterSpacing: "-1px",
          }}
        >
          eric g
        </Typography>
      </Box>
    </>
  );
};

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Mobile */}
          <Box
            sx={{
              alignItems: "center",
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {links.map(({ label, hashLink }) => (
                <MenuItem key={label} onClick={handleCloseNavMenu}>
                  <Link to={hashLink} style={{ color: "unset" }}>
                    <Typography textAlign="center">{label}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
            <Box
              width={"100%"}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Logo />
            </Box>
          </Box>

          {/* Normal Screen */}
          <Box
            sx={{
              alignItems: "center",
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            <Logo />
            {links.map(({ label, hashLink }) => (
              <Button
                key={label}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  textTransform: "lowercase",
                }}
              >
                <Link to={hashLink} style={{ color: "unset" }}>
                  {label}
                </Link>
              </Button>
            ))}
          </Box>

          <Box>
            <Button
              variant="contained"
              color="secondary"
              sx={{ textTransform: "lowercase" }}
            >
              <Link
                style={{ color: "unset" }}
                to="https://drive.google.com/file/d/1aM10tAyYcLHdz1toMGX1X9cXLzt8_ecT/view"
              >
                Resume
              </Link>
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
