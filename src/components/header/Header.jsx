import React, { useContext } from 'react';
import Switch from '@material-ui/core/Switch';
import AppBar from '@material-ui/core/AppBar';
import { ThemeContext } from '../state/ThemeContext';
import { Container, Grid, makeStyles, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'white',
  },
  toggleTheme: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  themeDark: {
    backgroundColor: 'black',
    color: 'white',
  },
  themeLight: {
    backgroundColor: 'white',
    color: 'black',
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
      <AppBar
        position="sticky"
        className={darkMode ? classes.themeDark : classes.themeLight}
      >
        <Container>
          <Typography>
            <Grid component="label" container alignItems="center" spacing={1}>
              <Grid item>Light</Grid>
              <Grid item>
                <Switch
                  className={classes.toggleTheme}
                  onChange={handleThemeChange}
                  name="themeToggle"
                  inputProps={{ 'aria-label': 'theme-toggle' }}
                />
              </Grid>
              <Grid
                item
                className={darkMode ? classes.themeDark : classes.themeLight}
              >
                Dark
              </Grid>
            </Grid>
          </Typography>
        </Container>
        <Container>
          <Typography variant="h6" className={classes.title}>
            <Link
              className={darkMode ? classes.themeDark : classes.themeLight}
              style={{ textDecoration: 'none' }}
              to="/"
            >
              Home
            </Link>
          </Typography>
        </Container>
      </AppBar>
    </div>
  );
};

export default Header;
