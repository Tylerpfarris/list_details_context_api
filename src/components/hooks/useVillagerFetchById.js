import { fetchVillagerById } from '../../services/animalCrossingApi';
import { useState, useEffect } from 'react';

export const useVillageFetchById = (id) => {
   const [loading, setLoading] = useState(false);
   const [villager, setVillager] = useState([]);

   useEffect(() => {
      fetchVillagerById(id)
         .then(setVillager)
      .finally(() => setLoading(false))
   }, [])

   return {loading, villager}
}