import React, { useContext } from 'react'
import { GlobalContext } from '../../../context/GlobalState'
import ChipUI  from './ChipUI';


const ChipList = () => {
  const { handleDeleteChip, handleClickChip, chips} = useContext(GlobalContext)
 
 

  let chip = chips.map((chip, i) => {
      return <ChipUI
      chip={chip} 
      key={i}
      handleDeleteChip={handleDeleteChip}
      handleClickChip={handleClickChip}
        />
  })


  return (
    <>
          {chip}
    </>
  )
}

export default ChipList
