import React, { useContext } from 'react';
import {Route, Switch} from 'react-router-dom'
import Header from '../header/Header';
import { ThemeContext } from '../state/ThemeContext';
import VillagerDetail from '../villagers/VillagerDetail';
import VillagerList from '../villagers/VillagerList';


export default function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={
        darkMode
          ? {
              backgroundColor: 'black',
              color: 'white',
              height: '100%',
            }
          : {
              backgroundColor: 'white',
              color: 'black',
              height: '100%',
            }
      }
    >
      <Header />
      <Switch>
        <Route exact path="/" component={VillagerList} />
        <Route exact path="/details/:id" component={VillagerDetail} />
      </Switch>
    </div>
  );
}
