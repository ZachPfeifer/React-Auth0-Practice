import React from 'react'
import { FiSearch } from "react-icons/fi";

export default function SearchBox(props) {
  return (
    <form className="row ">
      <label htmlFor="search-input" className="col-10 mx-auto">
        <span className="mr-1">
          Search Bar:
      </span>
        <div className="input-group">
          <input
            className="form-control form-control-lg"
            type="text"
            placeholder="Search Item by Name or Id"
            name="search-input"
            onChange={props.handleInput}
          />
          <div className="input-group-append">
            <div
              type="submit"
              className="btn btn-outline-secondary"
              onClick={props.handleInput}
              disabled><FiSearch/></div>
          </div>
        </ div>
      </label>
    </form>
  )
}
