import React from 'react'

function movie(props) {
  return (
    <div>{props.fav.map((e,index)=><li key={index}>e</li>)}</div>
  )
}

export default movie