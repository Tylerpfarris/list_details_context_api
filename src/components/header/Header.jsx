import React, { useContext } from 'react';
import Switch from '@material-ui/core/Switch';
import AppBar from '@material-ui/core/AppBar';
import { ThemeContext } from '../state/ThemeContext';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
      flexGrow: 1,
      backgroundColor: 'white'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const classes = useStyles();
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleThemeChange = () => {
    if (darkMode) {
      theme.dispatch({ type: 'LIGHTMODE' });
    } else {
      theme.dispatch({ type: 'DARKMODE' });
    }
  };
  return (
    <div className={classes.root}>
      <AppBar position="sticky">
        <Switch
          onChange={handleThemeChange}
          name="themeToggle"
          inputProps={{ 'aria-label': 'theme-toggle' }}
        />
      </AppBar>
    </div>
  );
};

export default Header;
