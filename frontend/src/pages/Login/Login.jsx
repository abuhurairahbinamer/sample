import React from 'react'
import styles from './Login.module.css'
import TextInput from '../../components/TextInput/textInput' 
import loginSchema from '../../schemas/loginSchema'
import {useFormik} from "formik"
import { login } from '../../api/internal'
import {setUser} from '../../store/userSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
// import { Navigate } from 'react-router-dom'
const Login = (props) => {  // by me
const navigate= useNavigate();
const dispatch=useDispatch();
// console.log(process.env.REACT_APP_INTERNAL_API_PATH);
// console.log("hellow world",props.auth)
useEffect(() => {
 
  if(props.auth){     // by me
    navigate('/')
    // or
    // return <Navigate to='/'/>  //you can,t use it
  }
}, [navigate,props.auth]);

const [error,setError]=useState('')

const handleLogin = async ()=>{
// alert();
  let data={
    username:values.username,
    password:values.password
  }
// console.log(data);

const response=await login(data)
// console.log(response);

if(response.status===200){

//1. setUser
const user={
  _id:response.data.user._id,
  email:response.data.user.email,
  username:response.data.user.username,
  auth:response.data.auth
}
dispatch(setUser(user))
//2. redirect->homepage
navigate('/')
}

else if(response.code==='ERR_BAD_REQUEST'){
  // display error message
setError(response.response.data.message)


}

else{   // by me
  setError(response.message);
}

}




const {values,touched,handleBlur,handleChange,errors}=useFormik({
  initialValues:{
    username:'',
    password:''
  },
  validationSchema:loginSchema
})

// console.log("hellow");

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
        <button  className={styles.logInButton} disabled={errors.username || errors.password || !values.username || !values.password} onClick={()=>handleLogin()} >Log In</button>

        <div className={styles.classForLast}>Don't have an account? <button className={styles.createAccount} onClick={ ()=>navigate('/signup')} >register</button>
        {error!=="" ? <p className={styles.errorMessage}>{error}</p> :""}
        
        </div>
</div>
  )
}

export default Login