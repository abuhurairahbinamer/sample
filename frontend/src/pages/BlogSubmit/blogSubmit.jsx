import React from 'react'
import styles from './blogSubmit.module.css'
import { useState } from 'react'
import { submitABlog } from '../../api/internal'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Loader from '../../components/Loader/loader'
const BlogSubmit = () => {
  const author=useSelector((state)=>state.users._id)
  const navigate=useNavigate();
    const [data,setdata]=useState({
      author:author,
      title:"",
      content:"",
      photo:""
    })
    const [error,seterror]=useState(false);
    const [load,setLoad]=useState(false);
    console.log(data);

const getphoto=(e)=>{
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onloadend = () => {
    setdata((pre)=>(
      {
        ...pre,
       [e.target.name]:reader.result
      }
    ))
  };
}


const submit= async()=>{
  if(!data.title || !data.content || !data.photo){
    seterror(true);
  }
  
  else{
    
    seterror(false);
    setLoad(true)
  const r = await submitABlog(data); 
    setLoad(false);
  if(r.status===201){
   navigate('/');
  }
  
  // if(r.response && r.response.satus===401){
  //   console.log("hellow",r);
  // }

}
}


  return (
    <div>
      <div className={styles.child}>
        {load? <Loader/>:""}
      <input placeholder='enter the title' name='title' type="text" onChange={(e)=>{setdata((pre)=>({...pre,[e.target.name]:e.target.value}))}} className={`${styles.border}  ${styles.height}`} />
      {error && data.title===""? <p className={styles.back}>please enter title</p>:""}
      <textarea placeholder='enter the content' name="content" id="" cols="30" rows="10" onChange={(e)=>{setdata((pre)=>({...pre,[e.target.name]:e.target.value}))}} className={styles.border}>
      </textarea>
      {error && data.content===""? <p className={styles.back}>please enter content</p>:""}
      <div>
        <span className={styles.fontsize}>Choose a photo</span>
      <input onChange={(e)=>getphoto(e)} name='photo' className={styles.file} type="file" />
      {data.photo ? <img className={styles.image} src={data.photo} alt='blog'/> : ""}
      </div>
      {error && data.photo===""? <p className={styles.back}>please enter photo</p>:""}
<br /><br />
      <button className={styles.submit} onClick={()=>submit()}>submit</button>
<br /><br />
      </div>
    </div>
  )}

export default BlogSubmit