import React, { useContext } from 'react';
import { useVillageFetchById } from '../hooks/useVillagerFetchById';
import { ThemeContext } from '../state/ThemeContext';

function VillagerDetail({ match }) {
   const { villager, loading } = useVillageFetchById(match.params.id);
   
  const theme = useContext(ThemeContext);
   const darkMode = theme.state.darkMode;
   


  if (loading) return <h1>Loading...</h1>;
  else
    return (
      <div
        style={{
          height: '100vh',
        }}
      >
        <div
          style={
            darkMode
              ? {
                  backgroundColor: 'black',
                  color: 'white',
                  margin: 'auto',
                  marginTop: '50px',
                  width: '500px',
                  textAlign: 'center',
                  paddingTop: '20px',
                  paddingBottom: '20px',
                }
              : {
                  backgroundColor: `${villager.bubbleColor}`,
                  color: `${villager.textColor}`,
                  margin: 'auto',
                  marginTop: '50px',
                  width: '500px',
                  textAlign: 'center',
                  paddingTop: '20px',
                  paddingBottom: '20px',
                }
          }
        >
          <h1>{villager.villager}</h1>
          <img
            src={villager.villagerImage}
            alt={villager.villager}
            style={{
              borderRadius: '100px',
            }}
          />
          <p>{villager.personality}</p>
          <p>{villager.birthday}</p>
          <p>{villager.species}</p>
          <p>{villager.gender}</p>
          <p>{villager.hobby}</p>
          <p>{villager.catchPhrase}</p>
          <p>{villager.saying}</p>
        </div>
      </div>
    );
}

export default VillagerDetail;
