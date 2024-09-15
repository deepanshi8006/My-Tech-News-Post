import React from 'react'
import { useGlobalContext } from './Context'


const Search = () => {
  const { query, searchItem } = useGlobalContext()
  return (
    <div className="container-fluid">
      <form className="d-flex justify-content-center" role="search" onSubmit={(e) => e.preventDefault()}>
        <input className=" me-2 rounded form-control m-4" style={{ maxWidth: "38vw" }} type="search" placeholder="Search Here" aria-label="Search"
          value={query}
          onChange={(e) => searchItem(e.target.value)}
        />
      </form>
    </div>
  )
}

export default Search 