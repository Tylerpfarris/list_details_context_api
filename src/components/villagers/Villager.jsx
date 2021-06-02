import React, { useContext } from 'react'
import { ThemeContext } from '../state/ThemeContext'


function Villager({ villagerId, villager, catchPhrase, villagerImage, bubbleColor, textColor }) {
   const theme = useContext(ThemeContext);
   const darkMode = theme.state.darkMode;
   return (
      <div style={
         darkMode ? {
            backgroundColor: 'black',
            color: 'white'
         } : {
         backgroundColor: bubbleColor,
         color: textColor,
         
      }}>
         <img src={villagerImage} alt={`${villager}-${villagerId}`} />
         <h2>{villager}</h2>
         <p>{catchPhrase}</p>
    </div>
   )
}

export default Villager
