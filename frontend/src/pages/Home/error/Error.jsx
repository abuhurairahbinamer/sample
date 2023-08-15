import React from 'react'
import { Link } from 'react-router-dom'
import styles from './error.module.css'
const Error = () => {
  return (
    <div className={styles.error}>
    <div>
        Error 404 - Page Not found
        </div>
        <div>Go back to
             <Link to='/'>

             home
             </Link>
             </div>
    </div>

  )
}

export default Error