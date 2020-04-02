import React, { useContext } from 'react'
import { GlobalContext } from '../../../context/GlobalState'
// import ChipUI  from './ChipUI';
import Chip from '@material-ui/core/Chip';
import { GiReceiveMoney } from "react-icons/gi";
import { TiDeleteOutline } from "react-icons/ti";

const ChipList = () => {
  const { handleDeleteChip, handleClickChip, searchItems, chips} = useContext(GlobalContext)
 
 

  let chipped = searchItems.map((item, index) => {
      if(chips === false){ //Pinned.length>0
        debugger
          return(
            <div>
            {/* <Chip 
            label="Search Item to Pin"
            icon={<GiReceiveMoney />}
            variant="outlined" 
            size="small"
            key={index} 
            />  */}
            </div>
            ) 
          }
          return (
              // <ChipUI
              // chip={item} 
              // key={index}
              // id={index}
              // size="small"
              // handleDeleteChip={handleDeleteChip}
              // handleClickChip={handleClickChip}
              // />
              <Chip
              icon={<GiReceiveMoney />}
              variant="outlined"
              key={index}
              id={item}
              size="small"
              label={item || 'Search Item to Pin'}
              onClick={handleClickChip}
              onDelete={handleDeleteChip}
              // onDelete={handleDeleteChip(item)}
              
              deleteIcon={<TiDeleteOutline/>}
              />
              )

  })


  return (
    <>
          {chipped}
    </>
  )
}

export default ChipList
