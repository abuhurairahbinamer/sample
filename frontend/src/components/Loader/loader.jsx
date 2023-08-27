import {Rings} from 'react-loader-spinner'
import React from 'react'
import styles from './loader.module.css'
const Loader = ({text}) => {
  return (
    <div className={styles.loaderwrapper}>
       <h2>Loading {text}</h2>
       
       <Rings
  height="200"
  width="200"
  color="blue"
  radius="6"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  ariaLabel="rings-loading"
/>

        </div>
  )
}

export default Loader