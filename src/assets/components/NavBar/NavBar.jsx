import React from "react";
import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'
import fonts from '/src/assets/fonts/GlobalFonts.module.css'

export const NavBar = () => {
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
                            <img className={styles.navIcon} src="icons/home.svg" alt=""/>
                            Home
                        </Link>
                        <Link className={styles.navMainButton} to={"/about"}>
                            <img className={styles.navIcon} src="icons/about.svg" alt=""/>
                            About
                        </Link>
                        <Link className={styles.navMainButton} to={"/store"}>
                            <img className={styles.navIcon} src="icons/shop.svg" alt=""/>
                            Store
                        </Link>
                        <Link className={styles.navMainButton} to={"/reviews"}>
                            <img className={styles.navIcon} src="icons/reviews.svg" alt=""/>
                            Reviews
                        </Link>
                    </div>
                    <div>
                        <Link className={styles.navAccountButton} to={"/account#signin"}>Sign In</Link>
                        <Link className={styles.navAccountButton} to={"/account#login"}>Login</Link>
                    </div>
                </nav>
            </header>
        </>
    )
}