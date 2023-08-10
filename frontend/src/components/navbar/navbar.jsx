import React from 'react'
import styles from './navbar.module.css'
import { NavLink } from 'react-router-dom'  
const Navbar = () => {
  const isAuthenticated=false;
  return (

    <>
    <nav className={styles.navbar}>
    <NavLink to='/' className={`${styles.logo} ${styles.inactiveStyle}`}>CoinBounce</NavLink>
    <NavLink className={({isActive}) => isActive ? styles.activeStyle:styles.inactiveStyle} to='/'>Home</NavLink>
    <NavLink className={({isActive}) => isActive ? styles.activeStyle:styles.inactiveStyle} to='/crypto'>cryptocurrencies</NavLink>
    <NavLink className={({isActive}) => isActive ? styles.activeStyle:styles.inactiveStyle} to='/blogs'>Blogs</NavLink>
    <NavLink className={({isActive}) => isActive ? styles.activeStyle:styles.inactiveStyle} to='/submit'>submit a blog</NavLink>
    {isAuthenticated ? <NavLink><button className={styles.logOutButton}>logout</button></NavLink>:
    <> 
    <NavLink className={({isActive}) => isActive ? styles.activeStyle:styles.inactiveStyle} to='/log-in'><button className={styles.login}>log in</button></NavLink>
    <NavLink className={({isActive}) => isActive ? styles.activeStyle:styles.inactiveStyle} to='/sign-up'><button className={styles.signup} >sing up</button></NavLink>
    </>
  }
    </nav>
    <div>

    </div>

    </>
  )
}

export default Navbar