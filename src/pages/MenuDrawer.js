import React from 'react';
import clsx from 'clsx';
import MenuList from './MenuList';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';




const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  MenuDrawer: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    backgroundColor: '#313238',
    color: '#EEEEEE',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  iconColor: {
    color: '#AAAAAA'
  },
  chip: {
    backgroundColor: '#313238',
    color: '#EEEEEE',
    borderColor: '#EEEEEE',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));


function MenuDrawer() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawer = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.MenuDrawer}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <IconButton
            className={classes.iconColor}
            aria-label="open drawer"
            onClick={handleDrawer}
            edge="start"
          >
          <MenuIcon />
        </IconButton>
        <Divider />
          {open ? 
            <div>
              <p>Hello!</p>
              <p>David K.</p>
              <div 
              style={{
                display:'inline-block',
                padding: '2px',
                borderColor: '#AAAAAA',
                border: '1px solid',
                borderRadius: '30%/100%'}}
              onClick={()=>{console.log('jjh')}}>
              Sign Out
              </div>
              {/* <Chip className={classes.chip} label="Sign Out" variant="outlined" clickable /> */}
            </div> 
            : 'LG EnerVu'}
        <Divider />
        <MenuList />
      </Drawer>
    </div>
  );
}

export default MenuDrawer


