import React from 'react'
import styles from './Login.module.css'
import TextInput from '../../components/TextInput/textInput' 
import loginSchema from '../../schemas/loginSchema'
import {useFormik} from "formik"
const Login = () => {


const {values,touched,handleBlur,handleChange,errors}=useFormik({
  initialValues:{
    username:'',
    password:''
  },
  validationSchema:loginSchema
})
console.log("hellow");
  return (
<div className={styles.logoinWrapper}>

        <div className={styles.loginHeader}> Log in to Your account</div>
        <TextInput 
        type='text'
        value={values.username}
        name="username"
        onBlur={handleBlur}
        onChange={handleChange}
        placeholder='username'
        perror={errors.username && touched.username ? 1:undefined}
        errormessage={errors.username}
        />
        <TextInput
         type='password'
         value={values.password}
         name="password"
         onBlur={handleBlur}
         onChange={handleChange}
         placeholder='password'
         perror={errors.password && touched.password ? 1:undefined}
         errormessage={errors.password}
        />
        <button className={styles.logInButton}>Log In</button>

        <div className={styles.classForLast}>Don't have an account? <button className={styles.createAccount}>register</button></div>
</div>
  )
}

export default Login