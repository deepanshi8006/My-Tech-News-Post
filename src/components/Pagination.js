import React from 'react'
import { useGlobalContext } from './Context'

const Pagination = () => {
  const{page,nbPages, prev,next}= useGlobalContext()
  return (
    <div className="container-fluid" style={{ maxWidth: "50vw" }} >
      <div className="d-flex justify-content-center mx-5 " style={{ maxWidth: "38vw" }}>
    <a href="#" className="btn btn-primary mx-3" onClick={prev}>Prev</a>
    <p >{page +1} of {nbPages}</p>
    <a href="#" className="btn btn-primary mx-3" onClick={next}>Next</a>
    </div>
    </div>
  )
}

export default Pagination