import React from 'react'
import styles from './footer.module.css'
const Footer = () => {
  return (
    <p className={styles.footer}>&copy;Coin Bounce {new Date().getFullYear()}</p>
  )
}

export default Footer