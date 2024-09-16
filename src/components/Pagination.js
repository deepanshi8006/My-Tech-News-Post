import React from 'react'
import { useGlobalContext } from './Context'

const Pagination = () => {
  const{page,nbPages, prev,next}= useGlobalContext()
  return (
    <div className="container-fluid" style={{ maxWidth: "40vw" }} >
      <div className="d-flex justify-content-center align-items-center mx-5 "  >
    <button  className="btn btn-primary mx-3" style={{ maxHeight: "9vw" }} onClick={prev}>Prev</button>
    <p style={{ maxHeight: "14vw" }}>{page +1} of {nbPages}</p>
    <button className="btn btn-primary mx-3" style={{ maxHeight: "9vw" }} onClick={next}>Next</button>
    </div>
    </div>
  )
}

export default Pagination