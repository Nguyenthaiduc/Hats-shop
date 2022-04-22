import React from 'react'
import './menu-item.scss'

interface Props {
    title : string
    imageUrl:string
}

const MenuItem : React.FC<Props> = ({title,imageUrl}) => {
  return (
   
         <div className="menu-item">
          <div className="content">
            <h1 className="title">HATS</h1>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </div>
    
  )
}

export default MenuItem