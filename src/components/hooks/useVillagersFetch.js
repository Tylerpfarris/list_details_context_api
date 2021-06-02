import { fetchVillagers } from '../../services/animalCrossingApi';
import { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../state/ThemeContext';


export const useVillagersFetch = () => {
   const [page, setPage] = useState(1)
   const [loading, setLoading] = useState(false);
   const [villagers, setVillagers] = useState([]);
   const theme = useContext(ThemeContext);
   const darkMode = theme.state.darkMode;

   useEffect(() => {
      fetchVillagers()
         .then(setVillagers)
      .finally(() => setLoading(false))
   }, [page])

   return {loading, villagers, page, setPage, darkMode}
}