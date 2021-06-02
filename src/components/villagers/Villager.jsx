import React, { useContext } from 'react';
import { ThemeContext } from '../state/ThemeContext';
import {
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
  Typography,
} from '@material-ui/core';
import { makeStyles} from '@material-ui/core/styles';

function Villager({
  villager,
  catchPhrase,
  villagerImage,
}) {

  const useStyles = makeStyles({
    root: {
      width: 200,
     
    },
    media: {
      height: 175,
    },
     themeDark: {
        backgroundColor: 'black',
      color: 'white',
    },
     themeLight: {
        backgroundColor: 'white',
      color: 'black',
    },
  });

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const classes = useStyles();
   return (
     
       <Card className={classes.root}>
         <CardActionArea>
           <CardMedia
             className={classes.media}
             image={villagerImage}
             title={villager}
           />
           <CardContent
             className={darkMode ? classes.themeDark : classes.themeLight}
           >
             <Typography gutterBottom variant="h5" component="h2">
               {villager}
             </Typography>
             <Typography
               className={darkMode ? classes.themeDark : classes.themeLight}
               variant="body2"
               color="textSecondary"
               component="p"
             >
               {catchPhrase}
             </Typography>
           </CardContent>
         </CardActionArea>
       </Card>

   );
}

export default Villager;
