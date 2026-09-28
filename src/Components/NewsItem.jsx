import React from 'react'

export default function NewsItem(props) {
  return (
<div class="card">
  <img src={props.pic} style={{height:200}} class="card-img-top" alt="Article Image"/>
  <div class="card-body">
    <h5 class="card-title">{props.title}</h5>
    <div className='source d-flex justify-content-between'>
        <p>{props.source}</p>
        <p>{new Date(props.date).toLocaleDateString()}</p>
    </div>
    <p class="card-text">{props.description}</p>
    <a href={props.url} class="btn btn-secondary w-100">Read Full Article</a>
  </div>
</div>
  )
} 
