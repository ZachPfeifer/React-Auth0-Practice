import React from 'react'
import { FiSearch } from "react-icons/fi";
import ChipList  from './Chips/ChipList';


export default function SearchBox(props) {
  return (
    <>

    <form onSubmit={props.handleInput} className="row" >
      <label htmlFor="search-input" className="col-10">
        <span className="ml-3 mb-2">
          Search Transactions:
      </span>
      <span className="col-12">
        <div className="input-group ml-3 input-group-sm d-flex align-items-center">
          <input
            className="form-control form-control-sm "
            type="text"
            placeholder="Search Transactions"
            name="search-input"
            onChange={props.handleInput}
            />
          <div className="input-group-append">
            <button
              type="submit"
              className="btn-sm btn-search"
              onClick={props.handleInput}
              disabled
              ><FiSearch/></button>
            </div>
          </ div>
         {/* FIXME CONSTRUCTION CHIPs */}
         <div className="d-flex justify-content-center mt-1">
         <ChipList/>
         </div>
        </span>
      <div className="form-check form-check-inline d-flex align-items-baseline">
        <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
        <label className="form-check-label" htmlFor="inlineCheckbox1">Negitive Amount</label>
        </div>
        <div className="form-check form-check-inline">
        <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
        <label className="form-check-label">Positive Amount</label>
      </div>

      </label>
    </form>

              </>
  )
}
