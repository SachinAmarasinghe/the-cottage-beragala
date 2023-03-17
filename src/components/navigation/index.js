import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React, { useState } from 'react'
import * as styles from '../navigation/styles.module.sass'

const Navigation = () => {
    const [showMenu, setShowMenu] = useState(false)

    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }
    return (

        <div className={styles.Nav}>
            {/* desktop view  */}
            <nav className={styles.NavDesktop}>
                <Link to='/'>Home</Link>
                <Link to='/'>Amenities</Link>
                <Link to='/'>Gallery</Link>
                <div className={styles.logoSpace}>
                    <div className={styles.logo}>
                        <StaticImage src='../../images/Logo.png' />
                    </div>
                </div>
                <Link to='/'>Activities</Link>
                <Link to='/'>Directions</Link>
                <Link to='/'>Contact</Link>
            </nav>
            {/* mobile view */}
            <div className={`${styles.NavMobile} ${showMenu ? styles.show : styles.hide}`}>
                <div className={styles.NavMobile_Navbar}>
                    <div className={styles.logo}>
                        <StaticImage src='../../images/LogoText.png' />
                    </div>
                    <button onClick={toggleMenu}>
                        {showMenu ? <StaticImage src='../../images/close.svg' /> : <StaticImage src='../../images/menu.svg' />}
                    </button>
                </div>
                <div className={styles.NavMobile_Links}>
                    <Link to='/'>Home</Link>
                    <Link to='/'>Amenities</Link>
                    <Link to='/'>Gallery</Link>
                    <Link to='/'>Activities</Link>
                    <Link to='/'>Directions</Link>
                    <Link to='/'>Contact</Link>
                </div>
            </div>
        </div>



    )
}

export default Navigation