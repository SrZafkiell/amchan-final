import React from "react";
import { Link } from 'react-router-dom'
import { useState } from "react";
import styles from './NavBar.module.css'
import fonts from '/src/assets/fonts/GlobalFonts.module.css'

export const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <header>
                <nav className={styles.navBar}>
                    <div>
                        <Link className={styles.logo} to={"/"}>
                            <img src="logo-v2.png" />
                        </Link>
                    </div>
                    <div className={styles.navCenter}>
                        <Link className={styles.navMainButton} to={"/"}>
                            <img className={styles.navIcon} src="icons/home.svg" alt="" />
                            Home
                        </Link>
                        <Link className={styles.navMainButton} to={"/about"}>
                            <img className={styles.navIcon} src="icons/about.svg" alt="" />
                            About
                        </Link>
                        <Link className={styles.navMainButton} to={"/store"}>
                            <img className={styles.navIcon} src="icons/shop.svg" alt="" />
                            Store
                        </Link>
                        <Link className={styles.navMainButton} to={"/reviews"}>
                            <img className={styles.navIcon} src="icons/reviews.svg" alt="" />
                            Reviews
                        </Link>
                    </div>
                    <div>
                        <Link className={styles.navAccountButton} to={"/account#signin"}>Sign In</Link>
                        <Link className={styles.navAccountButton} to={"/account#login"}>Login</Link>
                    </div>
                </nav>
                <div className={styles.mobileNavBar}>
                    <div className={styles.mobileNavBarLogo}>
                        <Link className={styles.logo} to={"/"}>
                            <img src="logo-v2.png" />
                        </Link>
                    </div>
                    <div className={styles.navMobileContent}>
                        <img src="/icons/menu.svg" alt="Mobile Menu" className={styles.mobileMenuIcon} onClick={toggleMenu} />
                    </div>
                </div>
                <nav className={isOpen ? styles.menuOpen : styles.menuClose}>
                    <Link className={styles.mobileNavButton} to={"/"} onClick={toggleMenu}>
                        <img className={styles.navIcon} src="icons/home.svg" alt="" />
                        Home
                    </Link>
                    <Link className={styles.mobileNavButton} to={"/about"} onClick={toggleMenu}>
                        <img className={styles.navIcon} src="icons/about.svg" alt="" />
                        About
                    </Link>
                    <Link className={styles.mobileNavButton} to={"/store"} onClick={toggleMenu}>
                        <img className={styles.navIcon} src="icons/shop.svg" alt="" />
                        Store
                    </Link>
                    <Link className={styles.mobileNavButton} to={"/reviews"} onClick={toggleMenu}>
                        <img className={styles.navIcon} src="icons/reviews.svg" alt="" />
                        Reviews
                    </Link>
                    <Link className={styles.mobileNavButton} to={"/account#signin"} onClick={toggleMenu}>
                        <img className={styles.navIcon} src="icons/log-out.svg" alt="" />
                        Sign In
                    </Link>
                    <Link className={styles.mobileNavButton} to={"/account#login"} onClick={toggleMenu}>
                        <img className={styles.navIcon} src="icons/log-in.svg" alt="" />
                        Login
                    </Link>
                    <div className={styles.mobileNavButton} onClick={toggleMenu}>
                        <img className={styles.navIcon} src="icons/cancel.svg" alt="Close menu" />
                        Close menu
                    </div>
                </nav>
            </header>
        </>
    )
}