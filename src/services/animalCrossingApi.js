export const fetchVillagers = async () => {
   const res = await fetch(`https://acnhapi.com/v1a/villagers`);
   const villagers = await res.json();
   // const villagersArr = Object.keys(villagers).map(key => {
   //    return villagers[key]
   // });

   return villagers.map((villager) => ({
      villagerId: villager.id,
      villager: villager.name['name-USen'],
      // personality: villager.personality,
      // birthday: villager['birthday-string'],
      // species: villager.species,
      // gender: villager.gender,
      // hobby: villager.hobby,
      catchPhrase: villager['catch-phrase'],
      villagerImage: villager.image_uri,
      bubbleColor: villager['bubble-color'],
      textColor: villager['text-color'],
      // saying: villager.saying,
   })) 
}

export const fetchVillagerById = async(id) => {
   const res = await fetch(`https://acnhapi.com/v1/villagers/${id}`);
   const villager = await res.json();
   return ({
      villagerId: villager.id,
      villager: villager.name['name-USen'],
      personality: villager.personality,
      birthday: villager['birthday-string'],
      species: villager.species,
      gender: villager.gender,
      hobby: villager.hobby,
      catchPhrase: villager['catch-phrase'],
      villagerImage: villager.image_uri,
      bubbleColor: villager['bubble-color'],
      textColor: villager['text-color'],
      saying: villager.saying,
   })
}