import React from 'react'
import './custom-button.scss'

interface Props {
  children?:React.ReactNode
  type: string
  value : string
}

const CustomButton : React.FC<Props>= ({children,type,value}) => {
  return (
   <button className="custom-button">
     {children}
   </button>
  )
}

export default CustomButton