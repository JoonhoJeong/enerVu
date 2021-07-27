import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import DashBoard from "./DashBoard/DashBoard.js";
import MenuDrawer from "./MenuDrawer.js";


const useStyles = makeStyles((theme) => ({
    HomeOwner: {
      display: 'flex',
      backgroundColor: '#eeeeee',
    },
  }));

function HomeOwner() {
    const classes = useStyles();

    return (
        <div className={classes.HomeOwner}>
            <MenuDrawer />
            <DashBoard />
        </div>
    )
}

export default HomeOwner
