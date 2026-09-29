import React from 'react'

export default function NewsItem(props) {
  return (
<div className="card">
  <img src={props.pic} style={{height:200}} className="card-img-top" alt="Article Image"/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <div className='source d-flex justify-content-between'>
        <p>{props.source}</p>
        <p>{new Date(props.date).toLocaleDateString()}</p>
    </div>
    <p className="card-text">{props.description}</p>
    <a href={props.url} className="btn btn-secondary w-100">Read Full Article</a>
  </div>
</div>
  )
} 
