import { fetchVillagers } from '../../services/animalCrossingApi';
import { useState, useEffect } from 'react';

export const useVillagersFetch = () => {
   const [loading, setLoading] = useState(false);
   const [villagers, setVillagers] = useState([]);

   useEffect(() => {
      fetchVillagers()
         .then(setVillagers)
      .finally(() => setLoading(false))
   }, [])

   return {loading, villagers}
}