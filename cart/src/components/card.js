import React from 'react'
import productList from './Products.json'

const Card = () => {
  return (
    <div>
        {productList.map((elm,i)=>{
            <div key = {i}>
                <h3>{elm.title}</h3>
                {console.log(elm.title)}
            </div>
        })}

    </div>
  )
}

export default Card