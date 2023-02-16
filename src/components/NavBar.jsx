import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {

    const navlinks = [
        {
            to: '/',
            name: 'Home'
        },
        {
            to: '/about',
            name: 'About me',
        },
        {
            to: 'skills',
            name: 'Skills',
        },
        {
            to: 'portfolio',
            name: 'Portfolio',
        },
        {
            to: 'blogs',
            name: 'Blogs',
        },
        {
            to: 'contact',
            name: 'Contact me',
        }
    ]
    return (
        <div id="navbar" className='navbar'>

            {
                navlinks.map((link, index) => {
                    return <Link to={link.to} key={index} className="nav__link"> {link.name} </Link>
                })
            }

        </div>
    )
}

export default NavBar
