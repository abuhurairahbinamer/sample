import React from 'react'
import { useState } from 'react'
import styles from './signUp.module.css'
import TextInput from '../../components/TextInput/textInput'
import signUpSchema from '../../schemas/signUpSchema'
import { useFormik } from 'formik'
import { setUser } from '../../store/userSlice'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { signup } from '../../api/internal'
const SignUp = () => {
  const navigate=useNavigate();
  const dispathch=useDispatch();
  const [error,setError]=useState('');

 const handleSignUp= async() =>{
const data={
  name:values.name,
  username:values.username,
  email:values.email,
  password:values.password,
  confirmPassword:values.confirmPassword
}
   
   const response=await signup(data);
   if(response.status===201){
    //setUser
    const user={
      _id:response.data.user._id,
      email:response.data.user.email,
      username:response.data.user.username,
      auth:response.data.auth
    }
    dispathch(setUser(user));
    // redirect to home

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



 const {values, touched, handleBlur, handleChange, errors} =useFormik({
initialValues:{
  name:'',
  username:'',
  email:'',
  password:'',
  confirmPassword:''

},
validationSchema : signUpSchema   
 })

  return (
    <>
    <br /><br />
     <div className={styles.signInWrapper}>
      <div className={styles.signInHeader}>
        Create An  Account
        </div>
        <TextInput
        type="text"
        name="name"
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="name"
        perror={touched.name && errors.name ? 1 : ""}
        errormessage={errors.name}
        />
        <TextInput
              type="text"
              name="username"
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="username"
              perror={touched.username && errors.username ? 1 : undefined}
              errormessage={errors.username}
        
        />
        <TextInput
             type="text"
             name="email"
             value={values.email}
             onChange={handleChange}
             onBlur={handleBlur}
             placeholder="email"
             perror={touched.email && errors.email ? 1 : undefined}
             errormessage={errors.email}
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
        <TextInput 
             type='password'
             value={values.confirmPassword}
             name="confirmPassword"
             onBlur={handleBlur}
             onChange={handleChange}
             placeholder='confirm password'
             perror={errors.confirmPassword && touched.confirmPassword ? 1:undefined}
             errormessage={errors.confirmPassword}
        /> 

        <button className={styles.signUpButton} onClick={handleSignUp}>sign Up</button>
       <br />
        <span>Already have an account <button className={styles.login} onClick={()=>{navigate('/login')}}>Log in</button></span>
        {error!=="" ? <p className={styles.errorMessage}>{error}</p> :""}
    </div>
    <br /><br />
    </>
  )
}

export default SignUp