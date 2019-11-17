
import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import PeopleRoundedIcon from '@material-ui/icons/PeopleRounded';
import CalendarTodayRoundedIcon from '@material-ui/icons/CalendarTodayRounded';
import PowerSettingsNewRoundedIcon from '@material-ui/icons/PowerSettingsNewRounded';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ImageAvatars from './component/Items/Avatar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Profile from './component/Profile';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Student from './component/Student';
import Dashboard from './component/Dashboard';
import HomeIcon from '@material-ui/icons/Home';
import Location from './component/Location';
import DeleteTable from './component/delete'
import TabsWrappedLabel from './component/TabComponent';



const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  search: {
    float: 'right',
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
}));

function App() {
  const classes = useStyles();

  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" noWrap>
              Schedule Management System
                    </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
          anchor="left"
        >
          <ImageAvatars />
          {/* Logged in user name and role */}
          {/* <div className={classes.toolbar} /> */}
          <Divider />
          <List>
            <Link style={{ width: '100%', textDecoration: 'none', display: 'inline-flex', }} to="/dashboard">
              <ListItem button >
                <ListItemIcon><HomeIcon /></ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItem>
            </Link>
            <Link style={{ width: '100%', textDecoration: 'none', display: 'inline-flex', }} to="/profile">
              <ListItem button >
                <ListItemIcon><AccountCircleRoundedIcon /></ListItemIcon>
                <ListItemText primary="Profile" />
              </ListItem>
            </Link>
            <Link style={{ width: '100%', textDecoration: 'none', display: 'inline-flex' }} to="/student">
              <ListItem button >
                <ListItemIcon><PeopleRoundedIcon /></ListItemIcon>
                <ListItemText primary="Student" />
              </ListItem>
            </Link>
            <Link style={{ width: '100%', textDecoration: 'none', display: 'inline-flex' }} to="/location">
              <ListItem button >
                <ListItemIcon><LocationOnIcon /></ListItemIcon>
                <ListItemText primary="Location" />
              </ListItem>
            </Link>
            <Link style={{ width: '100%', textDecoration: 'none', display: 'inline-flex', }} to="/logout">
              <ListItem button >
                <ListItemIcon><PowerSettingsNewRoundedIcon /></ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItem>
            </Link>
          </List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Switch>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/student">
              <Student />
            </Route>
            <Route path="/location">
              <Location />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/teacher">
              <TabsWrappedLabel />  
            </Route>
            

            

          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App