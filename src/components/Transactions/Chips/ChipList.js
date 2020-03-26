import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../../../context/GlobalState'
// import ChipUI  from './ChipUI';
import Chip from '@material-ui/core/Chip';
import { GiReceiveMoney } from "react-icons/gi";
import { TiDeleteOutline } from "react-icons/ti";

const ChipList = () => {
  const { handleDeleteChip, handleClickChip,searchItems, chips, hideChip, onChange} = useContext(GlobalContext)
 
 
  useEffect(() => {
    hideChip()// eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) 



  let chipped = searchItems.map((item, index) => {
      if(chips === false){
        debugger
          return(
            <div>
            {/* <Chip 
            label="Search Item to Pin"
            icon={<GiReceiveMoney />}
            variant="outlined" 
            size="small"
            onChange={hideChip} 
            // onDelete={handleDeleteChip}
            key={index} 
            />  */}
            </div>
            ) 
          }
          return (
            //   <ChipUI
            //   chip={chip} 
            //   key={i}
            //   handleDeleteChip={handleDeleteChip}
            //   handleClickChip={handleClickChip}
            //   />
              <Chip
              icon={<GiReceiveMoney />}
              variant="outlined"
              key={index}
              id={index}
              size="small"
              label={item || 'Search Item to Pin'}
              onClick={handleClickChip}
              onDelete={handleDeleteChip}
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
