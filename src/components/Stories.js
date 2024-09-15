import React from 'react'
import { useGlobalContext } from './Context'

const Stories = () => {
  const { hits, isLoading, removeItem } = useGlobalContext()

  if (isLoading) {
    return (<>
      <h1 className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}> Loading..</h1>
    </>)
  }
  return (

    <div className="container " style={{ maxWidth: "50vw" }} >
      {hits.map((currPost) => {
        const { title, author, objectID, url, num_comments } = currPost
        return (
          <div className='card bg-light-subtle border rounded-3 p-1 m-2 shadow-lg' key={objectID}>
            <div className="card-body">
              <h2 > {title}</h2>
              <p > By <span> {author}</span> | <span> {num_comments}</span> comments </p>
              <div className="d-flex justify-content-between">
                <a href={url} target="_blank" className="btn btn-outline-primary btn-sm ">Read More</a>
                <a href="#" onClick={() => removeItem(objectID)} className="btn btn-outline-danger btn-sm ">Remove</a>
              </div>
            </div>
          </div>
        )
      })}

    </div>
  )
}

export default Stories