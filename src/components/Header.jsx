import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { CgClose } from 'react-icons/cg'
import { Link } from 'react-router-dom'
import logo from '../assets/images/Ana10_icon.svg'
import NavBar from './NavBar'

const Header = () => {
    return (
        <header className="scrolled">
            <nav id="navigation__bar" className="container navigation__bar">

                <div className="logo">
                    <img width="60" src={logo} alt="" />
                </div>
                <NavBar />
                <div id="call__to__action" className=" call__to__action">
                    <Link to='/login' >Sign in / Sign up</Link>
                </div>

                {/* <div id="user__logged" className=" user__logged">
                </div> */}

                <div className="menu__toogle">
                    <GiHamburgerMenu className='mobile-nav-toggle nav__toogler' />
                    <CgClose className='desktop-nav-toggle nav__toogler' />
                </div>
            </nav>
        </header>
    )
}

export default Header
