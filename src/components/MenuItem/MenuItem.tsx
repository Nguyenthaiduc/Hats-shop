import React from 'react'
import './menu-item.scss'

interface Props {
    title : string
    imageUrl:string
    size : string | undefined
}

const MenuItem : React.FC<Props> = ({title,imageUrl,size}) => {
  return (
   
         <div className={`${size} menu-item`} >
             <div 
             className='background-image'
             style = {{backgroundImage : `url(${imageUrl})`}}
             
             />
          <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </div>
    
  )
}

export default MenuItem