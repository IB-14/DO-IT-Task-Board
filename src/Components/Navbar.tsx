import { useEffect, useState } from 'react';
import { Link, useResolvedPath, useMatch } from 'react-router-dom';
import HamburgerMenuIcon from '../assets/Icons/HamburgerMenuIcon';
import CloseIcon from '../assets/Icons/CloseIcon';

interface NavbarProps {
    children?: React.ReactNode,
    to: string
}

const Navbar: React.FC = () => {

    const [isDesktopView, checkDesktopView] = useState(window.innerWidth > 750);
    const [menuOpenStatus, setMenuOpenStatus] = useState(false);

    const updateDesktopView = () => {
        checkDesktopView(window.innerWidth > 750);
    }

    useEffect(() => {
        window.addEventListener("resize", updateDesktopView);
        return () => window.removeEventListener("resize", updateDesktopView);
      });

    function toggleMenuClick(): void { setMenuOpenStatus( !menuOpenStatus )}

    return (
        <div className='navbar-container flex justify-content-space-between align-items-center gap-2 w-100'>
            <div className='flex justify-content-space-between align-items-center'>
                <Link to="/">
                    <img src='/logos/DoItLogoLongReverse.svg' className='logo' alt="DoItLogo" />
                </Link>
            </div>
            <NavMenu />
        </div>
    );

    function NavMenu () {
        const NavMenu = isDesktopView ? <DesktopNavMenu /> : <MobileNavMenu />;
        return (
            NavMenu
        )
    }
    
    function DesktopNavMenu () {
        return (
            <div className='flex justify-content-space-between align-items-center gap-2'>
                <NavLinks />
            </div>
        )
    } 
    
    function MobileNavMenu () {
        const activeMobileMenu = menuOpenStatus ? 'mobile-nav-menu-active' : '';

        return (
            <div className='hamburger-menu'>
                <div className='hamburger-icon' onClick={toggleMenuClick}>
                    <HamburgerMenuIcon />
                </div>
                <div className={`mobile-nav-menu flex flex-d-column align-items-center ${activeMobileMenu}`}>
                    <div className='close-icon'>
                        <div onClick={toggleMenuClick}>
                            <CloseIcon />
                        </div>
                    </div>
                    <NavLinks />
                </div>
            </div>
        )
    }
    
    function NavLinks () {
        return (
            <>
                <CustomLink to="/tasklist">Tasks</CustomLink>
                <CustomLink to="/aboutus">About Us</CustomLink>
            </>
        )
    }

    function CustomLink ({ to, children, ...props } : NavbarProps) { 
        const resolvedPath = useResolvedPath(to);
        const isActive = useMatch({ path : resolvedPath.pathname, end : true });
        const activeLinkStatus = isActive? "active-nav-link" : "";
    
        return ( 
            <div className={`nav-link ${activeLinkStatus}`}> 
                <Link to={to} {...props} onClick={toggleMenuClick}> 
                    {children} 
                </Link> 
            </div>
        )
    }
};

export default Navbar;
