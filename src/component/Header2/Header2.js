// import * as React from 'react';
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
// import styles from "../Header2/header2.module.css"
// import { Link } from "react-router-dom";

// export default function BasicButtons() {
//   return (
//     <Stack spacing={2} direction="row">
//         <div className={styles.header2Container} >
//           <div className={styles.header2ContainerDev}>
//         <Link to="/about"> {" "}

//       {/* <Button className={styles.header2ContainerTitle} variant="text"> */}
//         <div className={styles.header2ContainerTitle}>Haqqımızda</div>
//         {/* </Button> */}
//             {" "} </Link>
//       {/* <Button variant="text"> */}
//         <div className={styles.header2ContainerTitle}>Layihələr</div>
//         {/* </Button> */}
//       {/* <Button variant="text"> */}
//         <div className={styles.header2ContainerTitle}>Tərəfdaşlar</div>
//         {/* </Button> */}
//       {/* <Button variant="text"> */}
//         <div className={styles.header2ContainerTitle}>Xidmətlər</div>
//         {/* </Button> */}
//       {/* <Button variant="text"> */}
//         <div className={styles.header2ContainerTitle}>Təlim və Tədris</div>
//         {/* </Button> */}
//       {/* <Button variant="text"> */}
//         <div className={styles.header2ContainerTitle}>Əlaqə</div>
//         {/* </Button> */}
//         </div>
//         </div>
//     </Stack>
//   );
// }

import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import styles from "../Header2/header2.module.css";
// import theme from "../../themes/theme.js"
const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      {/* <Typography variant="h6" sx={{ my: 2 }}>
        INBIT
      </Typography> */}
      {/* <Divider /> */}
      <List>
      <div
            // sx={{ display: { xs: "none", sm: "block" } }}
            // className={styles.header2Box}
          >
            <Link className={styles.header2TitleSm} to="/about">
              {" "}
              <div>Haqqımızda</div>{" "}
            </Link>
            <Link className={styles.header2TitleSm} to="/project">
              {" "}
            <div>Layihələr</div>
            </Link>
            <Link className={styles.header2TitleSm} to="/partner">
              {" "}
              <div>Tərəfdaşlar</div>
            </Link>
            <Link className={styles.header2TitleSm} to="/service">
              {" "}
              <div>Xidmətlər</div>
            </Link>
            <Link className={styles.header2TitleSm} to="/about">
              {" "}
              <div>Təlim/Tədris</div>
            </Link>
            <Link className={styles.header2TitleSm} to="/contact">
              {" "}
              <div>Əlaqə</div>
            </Link>
          </div>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;


  return (
    <Box className={styles.header2Container1} sx={{ display: "flex" }}>
      <CssBaseline />
      {/* <AppBar component="nav"> */}
      <div className={styles.header2Container2}>
        <IconButton
        className={styles.Header2Icon}
          // color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon className={styles.Header2Icon}/>
        {/* <DehazeIcon /> */}
        </IconButton>
        {/* <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            MUI
          </Typography> */}
        <Box
          className={styles.header2Box}
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          {/* navItems.map(item) =>  */}
          {/* <Button sx={{ color: '#fff' }}> */}
          {/* {item} */}
          {/* </Button> */}
          <div
            sx={{ display: { xs: "none", sm: "block" } }}
            className={styles.header2Box}
          >
            <Link  to="/about">
              {" "}
              <div className={styles.header2Title}>Haqqımızda</div>{" "}
            </Link>
            <Link  to="/project">
              {" "}
              <div className={styles.header2Title}>Layihələr</div>{" "}
            </Link>
            <Link  to="/partner">
              {" "}
              <div className={styles.header2Title}>Tərəfdaşlar</div>{" "}
            </Link>
            <Link  to="/service">
              {" "}
              <div className={styles.header2Title}>Xidmətlər</div>{" "}
            </Link>
            <Link  to="/about">
              {" "}
              <div className={styles.header2Title}>Təlim/Tədris</div>{" "}
            </Link>
            <Link  to="/contact">
              {" "}
              <div className={styles.header2Title}>Əlaqə</div>{" "}
            </Link>
          </div>
        </Box>
      </div>
      {/* </AppBar> */}
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
