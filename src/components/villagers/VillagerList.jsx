import React from 'react';
import { useVillagersFetch } from '../hooks/useVillagersFetch';
import Villager from './Villager';
import { Link } from 'react-router-dom';
import { Container, Button, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  themeDark: {
    backgroundColor: 'black',
    color: 'white',
    border: 'solid 1px white',
    margin: '5px',
  },
  themeLight: {
    backgroundColor: 'white',
    color: 'black',
    border: 'solid 1px black',
    margin: '5px',
  },
}));
function VillagerList() {
  const classes = useStyles();
  const { villagers, loading, page, setPage, darkMode } = useVillagersFetch();
  const pagedVillagersList = villagers.slice((page - 1) * 24, page * 24);

  const ePageDecrement = () => {
    setPage((prev) => prev - 1);
  };
  const ePageIncrement = () => {
    setPage((prev) => prev + 1);
  };

  if (loading) return <h1 data-testid="loading">Loading...</h1>;
  else return (
    <Container>
      <Container
        style={{
          marginTop: '20px',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {page === 1 ? (
          <Button
            data-testid="back-button-disabled"
            className={darkMode ? classes.themeDark : classes.themeLight}
            disabled
            style={{
              color: 'grey',
            }}
            onClick={ePageDecrement}
          >
            <Typography>back</Typography>
          </Button>
        ) : (
          <Button
            data-testid="back-button"
            className={darkMode ? classes.themeDark : classes.themeLight}
            onClick={ePageDecrement}
          >
            <Typography>back</Typography>
          </Button>
        )}
        <Typography data-testid="page-counter">
          {page} / {Math.ceil(villagers.length / 24)}
        </Typography>

        {page === Math.ceil(villagers.length / 24) ? (
          <Button
            data-testid="next-button-disabled"
            className={darkMode ? classes.themeDark : classes.themeLight}
            disabled
            style={{
              color: 'grey',
            }}
            onClick={ePageIncrement}
          >
            <Typography>next</Typography>
          </Button>
        ) : (
          <Button
            data-testid="next-button"
            className={darkMode ? classes.themeDark : classes.themeLight}
            onClick={ePageIncrement}
          >
            <Typography>next</Typography>
          </Button>
        )}
      </Container>
      <ul
        aria-label="villager-list"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'row',
          listStyle: 'none',
        }}
      >
        {pagedVillagersList.map((villager) => (
          <li
            key={villager.villagerId}
            style={{
              margin: '10px',
            }}
          >
            <Link
              style={{ textDecoration: 'none', textAlign: 'center' }}
              to={`details/${villager.villagerId}`}
            >
              <Villager {...villager} />
            </Link>
          </li>
        ))}
      </ul>
  </Container>
    )
}

export default VillagerList;
