import React from 'react';
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

export default function SmallOutlinedChips(props) {


  const classes = useStyles();
console.log(props);


  return (
    <div className={classes.root}> 
        <Chip
           icon={<GiReceiveMoney />}
           variant="outlined"
           key={props.index}
           id={props.index}
           size="small"
           label={props.chip || 'Search Item to Pin'}
           onClick={props.handleClickChip}
          //  onDelete={props.handleDeleteChip(props.index)}
           deleteIcon={<TiDeleteOutline/>}
           />
     
    </div>
  );
}