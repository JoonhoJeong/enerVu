import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DvrIcon from '@material-ui/icons/Dvr';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HelpIcon from '@material-ui/icons/Help';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  iconColor: {
    color: '#AAAAAA'
  },
  openList: {
    backgroundColor: '#232429',
  },
}));

function MenuList() {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <div>
      <List>
        <ListItem
          button
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
        >
          <ListItemIcon className={classes.iconColor}><DvrIcon /></ListItemIcon>
          <ListItemText primary='SN Library' />
          
        </ListItem>
        {selectedIndex === 1 &&
          <List className={classes.openList}>
            <ListItem>
              <ListItemText primary='Dashboard' />
            </ListItem>
            <ListItem>
              <ListItemText primary='Monitoring' />
            </ListItem>
            <ListItem>
              <ListItemText primary='System Info' />
            </ListItem>
          </List>
        }
        <ListItem
          button
          selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}
        >
          <ListItemIcon className={classes.iconColor}><AccountCircleIcon /></ListItemIcon>
          <ListItemText primary='Account' />
        </ListItem>
        {selectedIndex === 2 &&
          <List className={classes.openList}>
            <ListItem>
              <ListItemText primary='My Info' />
            </ListItem>
          </List>
        }
        <ListItem
          button
          selected={selectedIndex === 3}
          onClick={(event) => handleListItemClick(event, 3)}
        >
          <ListItemIcon className={classes.iconColor}><HelpIcon /></ListItemIcon>
          <ListItemText primary='Support' />
        </ListItem>
      </List>
      {selectedIndex === 3 &&
        <List className={classes.openList}>
            <ListItem>
              <ListItemText primary='FAQ' />
            </ListItem>
            <ListItem>
              <ListItemText primary='Terms & Privacy' />
            </ListItem>
            <ListItem>
              <ListItemText primary='Contact' />
            </ListItem>
          </List>
        }
    </div>
  )
}

export default MenuList
