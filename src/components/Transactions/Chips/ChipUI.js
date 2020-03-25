import React,{useContext} from 'react';
import { GlobalContext } from '../../../context/GlobalState'
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import { GiReceiveMoney } from "react-icons/gi";
import { TiDeleteOutline } from "react-icons/ti";

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));

export default function SmallOutlinedChips() {
    const { handleDeleteChip, handleClickChip, chips} = useContext(GlobalContext)


  const classes = useStyles();

 

  return (
    <div className={classes.root}>
      <Chip variant="outlined" size="small" label="Chips"/>
      
      <Chip
        icon={<GiReceiveMoney />}
        variant="outlined"
        size="small"
        label={chips}
        onClick={handleClickChip}
        onDelete={handleDeleteChip}
        deleteIcon={<TiDeleteOutline/>}
      />
     
    </div>
  );
}