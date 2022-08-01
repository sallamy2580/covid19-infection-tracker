import React from 'react'

function News(props) {

  return (
    
        <div className="card card1">
        <img src={props.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <a target="_black" id="news-link" href={props.url} className="btn btn-primary">Article Link</a>
        </div>
      </div>
      
  )
}

export default News