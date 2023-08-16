import React from 'react'
import { Link } from 'react-router-dom'
import styles from './error.module.css'
const Error = () => {
  return (
    <div className={styles.error}>
    <div className={styles.errorheader}>
        Error 404 - Page Not found
        </div>
        <div className={styles.errrobody}>Go back to
             <Link to='/' className={styles.homelink}>

             home
             </Link>
             </div>
    </div>

  )
}

export default Error