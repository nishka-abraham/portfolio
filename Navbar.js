import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MobilRightMenuSlider from '@material-ui/core/Drawer';
import {
  AppBar,
  Toolbar,
  ListItem,
  ListItemIcon,
  IconButton,
  ListItemText,
  Avatar,
  Divider,
  List,
  Typography,
  Box
} from "@material-ui/core";
import{
  ArrowBack,
  AssignmentInd,
  Home,
  Apps,
  ContactMail
} from "@material-ui/icons";
import avatar from "../avatar.png";

// CSS STYLES
const useStyles = makeStyles(theme=>({
  menuSliderContainer: {
    width: 250,
    background: "#dfe6e6",
    height: "100%"
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13)
  },
  listItem:{
    color: "black"
  }
}));

const menuItems = [
  {
    listIcon: <Home/>,
    listText: "Home",
  },
  {
    listIcon: <AssignmentInd/>,
    listText: "Resume",
  },
  {
    listIcon: <Apps/>,
    listText: "Portfolio",
  },
  {
    listIcon: <ContactMail/>,
    listText: "Contacts",
  }
]

const Navbar = () => {
  const classes = useStyles();
  const [state, setState] = useState({
    right: false
  });
  const toggleSlider = (slider, open) => () => {
    setState({...state, [slider]: open});
  }
  const sideList = slider =>(
    <Box className={classes.menuSliderContainer}
    component= "div"
    onClick={toggleSlider(slider,false)}
    >
    <Avatar className={classes.avatar} src={avatar} alt="Russel Crowe"/>
    <Divider />
    <List>
      {menuItems.map((lsItem, key)=>(
      <ListItem button key={key}>
        <ListItemIcon className={classes.listItem}>{lsItem.listIcon} </ListItemIcon>
        <ListItemText className={classes.listItem}
        primary={lsItem.listText} />
      </ListItem>
      ))}
    </List>
    </Box>
  )
  return(
    <>
    <Box component= "nav">
      <AppBar position ="static" style={{background: "#a7ccd3"}}>
        <Toolbar>
          <IconButton onClick={toggleSlider("right", true)}>
            <ArrowBack style={{color: "black"}}/>
          </IconButton>
          <Typography variant="h5" style={{color: "black"}}>Portfolio</Typography>
          <MobilRightMenuSlider
          open={state.right}
          onClose={toggleSlider("right", false)}
          >
            {sideList("right")}
          </MobilRightMenuSlider>
        </Toolbar>
      </AppBar>
    </Box>
    </>
  )
}
export default Navbar;
