import React, { useState } from "react";
import { AppBar, Button, Tab, Tabs, Toolbar, Typography, useMediaQuery, useTheme, } from "@mui/material";
import mubot from '../../images/mubot-modified.png';
import DrawerComp from "./Drawer";
import { Link, useHistory, useLocation } from 'react-router-dom';
import Avatar from 'react-avatar';


const Header = () => {
  const [value, setValue] = useState(0,1,2,3);
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  return (
    <React.Fragment>
      <AppBar sx={{ background: "#063970" }}>
        <Toolbar>
          {/*<AddBusinessRoundedIcon sx={{ transform: "scale(2)" }} />*/}
          <Typography color='white' to="/" variant="h2" align="center">Mubot</Typography>
          <img src={mubot} alt="icon" height="60" />
          {isMatch ? (
            <>
              
              <DrawerComp />
            </>
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: "auto" }}
                indicatorColor="secondary"
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)+console.log(value)}
              >
                <Tab value="0"label="Home" component={Link} to="/"/>
                <Tab value="1"label="Documentation" component={Link} to="/doc"/>
                <Tab value="2"label="About Us" />
                <Tab value="3"label="Contact" />
                
              </Tabs>
              <Avatar size="50" round={true} name="Foo Bar" />
              <Button component={Link} to="/auth" sx={{ marginLeft: "10px" }} variant="contained">
                Sign In
                
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
