import React from 'react'
import styles from './navbar.module.css'
import { NavLink } from 'react-router-dom' 
import { useSelector } from 'react-redux'
import { useDispatch } from "react-redux";
import { resetUser } from '../../store/userSlice';
const Navbar = () => {
  const dispatch = useDispatch();
const handleSingout=()=>{
  dispatch(resetUser());
}


  const isAuthenticated=useSelector((state)=> state.users.auth);
  return (

    <>
    <nav className={styles.navbar}>
    <NavLink to='/' className={`${styles.logo} ${styles.inactiveStyle}`}>CoinBounce</NavLink>
    <NavLink className={({isActive}) => isActive ? styles.activeStyle:styles.inactiveStyle} to='/'>Home</NavLink>
    <NavLink className={({isActive}) => isActive ? styles.activeStyle:styles.inactiveStyle} to='/crypto'>cryptocurrencies</NavLink>
    <NavLink className={({isActive}) => isActive ? styles.activeStyle:styles.inactiveStyle} to='/blogs'>Blogs</NavLink>
    <NavLink className={({isActive}) => isActive ? styles.activeStyle:styles.inactiveStyle} to='/submit'>submit a blog</NavLink>
    {isAuthenticated ? <NavLink><button className={styles.logOutButton} onClick={handleSingout}>logout</button></NavLink>:
    <> 
    <NavLink className={({isActive}) => isActive ? styles.activeStyle:styles.inactiveStyle} to='/login'><button className={styles.login}>log in</button></NavLink>
    <NavLink className={({isActive}) => isActive ? styles.activeStyle:styles.inactiveStyle} to='/signup'><button className={styles.signup} >sing up</button></NavLink>
    </>
  }
    </nav>
    <div className={styles.seperator}>

    </div>

    </>
  )
}

export default Navbar