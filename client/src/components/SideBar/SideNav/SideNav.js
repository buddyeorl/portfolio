import React, { useState } from 'react';
import './SideNav.css';
import { useHistory, useLocation, Link } from "react-router-dom";

//custom hooks
import useWindowsSize from '../../../hooks/Dimms/useWindowSize';



const SideNavMobile = ({ location, history, onClick = () => { return } }) => {
    const handleLinkClick = (path) => {
        if (location.pathname !== path) {
            history.push(path);
            onClick();
        } else {
            console.log('same path');
        }

    }
    return (
        <nav style={{ margin: '70px 0px 0px 0px' }}>
            <Link onClick={(e) => { e.preventDefault(); handleLinkClick('/projects') }} className='sideNavLinkMobile' style={{ fontWeight: location.pathname === '/projects' ? '700' : '400' }} to='/projects'>Projects</Link>
            <Link onClick={(e) => { e.preventDefault(); handleLinkClick('/resume') }} className='sideNavLinkMobile' style={{ fontWeight: location.pathname === '/resume' ? '700' : '400' }} to='/resume'>CV</Link>
            <Link onClick={(e) => { e.preventDefault(); handleLinkClick('/contact') }} className='sideNavLinkMobile' style={{ fontWeight: location.pathname === '/contact' ? '700' : '400' }} to='/contact'>Contact</Link>
        </nav>
    )
}

const SideNav = ({ onClick = () => { return } }) => {
    const [width, height] = useWindowsSize();
    const history = useHistory();
    const location = useLocation();


    console.log('location', location)

    const handleLinkClick = (path) => {
        if (location.pathname !== path) {
            history.push(path);
        } else {
            console.log('same path');
        }

    }

    return (
        width > 980 ?
            <nav style={{ margin: '70px 0px 0px 0px', fontSize: '16px' }}>
                <Link onClick={(e) => { e.preventDefault(); handleLinkClick('/projects') }} className='sideNavLink' style={{ fontWeight: location.pathname === '/projects' ? '700' : '400' }} to='/projects'>Projects</Link>
                <Link onClick={(e) => { e.preventDefault(); handleLinkClick('/resume') }} className='sideNavLink' style={{ fontWeight: location.pathname === '/resume' ? '700' : '400' }} to='/resume'>CV</Link>
                <Link onClick={(e) => { e.preventDefault(); handleLinkClick('/contact') }} className='sideNavLink' style={{ fontWeight: location.pathname === '/contact' ? '700' : '400' }} to='/contact'>Contact</Link>
            </nav>
            :
            <SideNavMobile onClick={onClick} location={location} history={history} />
    )
}

export default SideNav;
