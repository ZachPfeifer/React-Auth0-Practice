import React from 'react'
import { FiSearch } from "react-icons/fi";
// import Chip  from './Chips/Chip';
import ChipUI  from './Chips/ChipUI';


export default function SearchBox(props) {
  return (
    <>

    <form className="row">
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
            <div
              type="submit"
              className="btn-sm"
              onClick={props.handleInput}
              disabled><FiSearch/></div>
            </div>
          </ div>
         {/* FIXME CONSTRUCTION CHIPs */}
         {/* <Chip/> */}
         <ChipUI/>
        </span>
      <div className="form-check form-check-inline d-flex align-items-baseline">
        <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
        <label className="form-check-label" for="inlineCheckbox1">Negitive Amount</label>
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
