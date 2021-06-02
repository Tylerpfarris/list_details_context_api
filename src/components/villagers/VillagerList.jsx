import React, { useContext } from 'react';
import { useVillagersFetch } from '../hooks/useVillagersFetch';
import Villager from './Villager';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../state/ThemeContext';
function VillagerList() {
  const { villagers, loading } = useVillagersFetch();
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  if (loading) return <h1>Loading...</h1>;
  else
    return (
      <div
      >
        <ul aria-label="villager-list">
          {villagers.map((villager) => (
            <li key={villager.villagerId}>
              <Link to={`details/${villager.villagerId}`}>
                <Villager {...villager} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
}

export default VillagerList;
