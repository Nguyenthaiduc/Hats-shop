import React from 'react'
import { Link } from 'react-router-dom'
import ReactComponent from "*.svg"
import Logo from '../../assets/crown.svg';
import './header.scss'
const Header: React.FC = () => {
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                {/* <Logo className="logo"/> */}
                <img className="logo" src={Logo} />
            </Link>
            <div className="options">
                <Link className="option" to="/shop">
                    SHOP
                </Link>
            </div>
        </div>
    )
}

export default Header