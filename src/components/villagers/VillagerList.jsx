import React from 'react';
import { useVillagersFetch } from '../hooks/useVillagersFetch';
import Villager from './Villager';
import { Link } from 'react-router-dom';
import { Container, Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  themeDark: {
    backgroundColor: 'black',
    color: 'white',
    border: 'solid 1px white',
    margin: '5px'
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
  const pagedVillagersList = villagers.slice(((page - 1) * 24), (page * 24))
  

  const ePageDecrement = () => {
    setPage(prev => prev - 1);
  }
  const ePageIncrement = () => {
    setPage(prev => prev + 1);
  }

  if (loading) return <h1>Loading...</h1>;
  else
    return (
      <Container marginTop="10px">
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
              className={darkMode ? classes.themeDark : classes.themeLight}
              disabled
              style={{
                color: 'grey',
              }}
              onClick={ePageDecrement}
            >
              back
            </Button>
          ) : (
            <Button
              className={darkMode ? classes.themeDark : classes.themeLight}
              onClick={ePageDecrement}
            >
              back
            </Button>
          )}
          {page} / {Math.ceil(villagers.length / 24)}
          {page === Math.ceil(villagers.length / 24) ? (
            <Button
              className={darkMode ? classes.themeDark : classes.themeLight}
              disabled
              style={{
                color: 'grey',
              }}
              onClick={ePageIncrement}
            >
              next
            </Button>
          ) : (
            <Button
              className={darkMode ? classes.themeDark : classes.themeLight}
              onClick={ePageIncrement}
            >
              next
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
    );
}

export default VillagerList;
