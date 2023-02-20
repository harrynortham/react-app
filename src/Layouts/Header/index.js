//import logo from "./../../logo.svg";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

export default function Header() {
  const { isAuthenticated, logout, loginWithRedirect } = useAuth0();

  //move each button into own file with loading
  // if (isLoading) {
  //   return <div>Loading ...</div>;
  // }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/">React</Link>
          </Typography>

          {isAuthenticated ? (
            <div>
              <Button color="inherit">
                {" "}
                <Link to="/dashboard">Dashboard</Link>
              </Button>
              <Button
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
                color="inherit"
              >
                Logout
              </Button>
            </div>
          ) : (
            <div>
              <Button color="inherit">
                {" "}
                <Link to="/register">Register</Link>
              </Button>
              <Button onClick={() => loginWithRedirect()} color="inherit">
                Login
              </Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
