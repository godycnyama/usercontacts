import React , { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import PeopleIcon from '@material-ui/icons/People';
import Logo from './logo.svg';


const drawerWidth = 240;
export const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolbar: theme.mixins.toolbar,
  title: {
    flexGrow: 1,
  },
  menuItemContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  }
}));

const Layout = ({children}) => {
  const history = useHistory();
  const [drawerOpen, setDrawerOpen] = useState(null);

  const ToggleDrawer = () => {
    if(drawerOpen){
      setDrawerOpen(false);
    } else {
      setDrawerOpen(true);
    }
  }

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Hidden mdUp>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick = {ToggleDrawer}>
              <MenuIcon />
            </IconButton>
          </Hidden>
          <img src={Logo} alt="Logo" width="150" height="55"/>
          <Typography variant="h6" className={classes.title}>
            My Users
          </Typography>
        </Toolbar>
      </AppBar>
      <Hidden smUp>
        <Drawer
          open={drawerOpen}
          onClose={() => {setDrawerOpen(false)}}
          className={classes.drawer}
          variant="temporary"
          classes={{
            paper: classes.drawerPaper,
          }}
          style={{zIndex: 1099}}
        >
          <div className={classes.toolbar} />
              <MenuItem onClick={() => { setDrawerOpen(false); history.push('/')}}>
                <div className={classes.menuItemContainer}>
                  <div>
                    <ListItemIcon>
                      <PeopleIcon/>
                    </ListItemIcon>
                  </div>
                  <div>
                    <ListItemText
                      primary="Users"
                    />
                  </div>
                </div>
              </MenuItem>
        </Drawer>
      </Hidden>
      <Hidden smDown>
        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
            paper: classes.drawerPaper,
            }}
        >
            <div className={classes.toolbar} />
              <MenuItem onClick={() => { setDrawerOpen(false); history.push('/')}}>
                <div className={classes.menuItemContainer}>
                  <div>
                    <ListItemIcon component="div">
                      <PeopleIcon/>
                    </ListItemIcon>
                  </div>
                  <div>
                    <ListItemText
                      primary="Users"
                    />
                  </div>
                </div>
              </MenuItem>
        </Drawer>
      </Hidden>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
}

export default Layout