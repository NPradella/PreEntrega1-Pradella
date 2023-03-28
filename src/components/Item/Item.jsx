import React from 'react'

const Item = ({item}) => {
    
  return (
    <div>
        <h3>{item.title}</h3>
        <img src={item.image} alt="" width="200" height="200"/>
        <h4>{item.description}</h4>
        <h5>{item.price}</h5>
     </div>
  )
}

export default Item