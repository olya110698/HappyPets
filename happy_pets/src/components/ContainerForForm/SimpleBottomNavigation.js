import React from 'react';
import { makeStyles } from '@material-ui/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
// import container_forSearch from "../../img/background_for_form.jpg";


// const container_forSearch = styled.div`
//   position: absolute;
//   width: 100%;
//   border-radius: 30px 0 0 30px;
//   -webkit-backdrop-filter: blur(50px);
//   backdrop-filter: blur(50px);
//   top: 0;
//   left: 0px;
//   width: calc(100% - 1300px);
//   height: 100%;
//   background: rgba(0, 0, 0, 0.01);
// `;
const useStyles = makeStyles({
  root: {
    width: 500,
  },
});
export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    > 
      <BottomNavigationAction label="Dog" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Cat" icon={<FavoriteIcon />} />
    </BottomNavigation>
   
  );
}
