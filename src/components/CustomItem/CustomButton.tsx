import React from 'react'
import './custom-button.scss'

interface Props {
  children?:React.ReactNode
  type?: string
  onClick?: any
}

const CustomButton : React.FC<Props>= ({children,onClick,type}) => {
  return (
   <button className="custom-button">
     {children}
   </button>
  )
}

export default CustomButton