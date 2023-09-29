import React from 'react'
import styles from './editBlog.module.css'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Loader from '../../components/Loader/loader'
//
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { getBlogById } from '../../api/internal'
import { editBlog } from '../../api/internal'
const EditBlog = () => {
 
  const author=useSelector((state)=>state.users._id)
  const navigate=useNavigate();
    const [data,setdata]=useState({
      blogId:"",
    author:author,
    title:"",
    content:"",
    photo:""
    })
    const [error,seterror]=useState(false);
    const [load,setLoad]=useState(false);
    const [photo,setPhoto]=useState("");
    // console.log(data);

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
    setPhoto(reader.result);
  };
}

 //
 const params=useParams();
//  console.log(params.id)
 
useEffect(()=>{

  (async function getById(){
let response=await getBlogById(params.id);
if(response.status===200){
  // console.log(response.data.blog);
  let s={
    blogId:response.data.blog._id,
    author:author,
    title:response.data.blog.title,
    content:response.data.blog.content,
    photo:""
  }
  
  setdata({...s});
  setPhoto(response.data.blog.photo)
// or  setdata(s);

}
  })();

},[params.id,author])


 //

const submit= async()=>{
  if(!data.title || !data.content){
    seterror(true);
  }
  
  else{
    
    seterror(false);
    setLoad(true)
  const r = await editBlog(data); 
    setLoad(false);
  if(r.status===200){
   navigate('/blogs');
  }
  
  // if(r.response && r.response.satus===401){
  //   console.log("hellow",r);
  // }

}
}

console.log(data);

  return (
    <div>
      <div className={styles.child}>
        {load? <Loader/>:""}
      <input placeholder='enter the title' value={data.title}  name='title' type="text" onChange={(e)=>{setdata((pre)=>({...pre,[e.target.name]:e.target.value}))}} className={`${styles.border}  ${styles.height}`} />
      {error && data.title===""? <p className={styles.back}>please enter title</p>:""}
      <textarea placeholder='enter the content' value={data.content}  name="content" id="" cols="30" rows="10" onChange={(e)=>{setdata((pre)=>({...pre,[e.target.name]:e.target.value}))}} className={styles.border}>
      </textarea>
      {error && data.content===""? <p className={styles.back}>please enter content</p>:""}
      <div>
        <span className={styles.fontsize}>Choose a photo</span>
      <input onChange={(e)=>getphoto(e)} name='photo' className={styles.file} type="file" accept='image/jpg, image/jpeg ,image/png' />
      {photo ? <img className={styles.image} src={photo} alt='blog'/> : ""}
      </div>
      {error && photo===""? <p className={styles.back}>please enter photo</p>:""}
<br /><br />
      <button className={styles.submit} onClick={()=>submit()}>submit</button>
<br /><br />
      </div>
    </div>
  )}



export default EditBlog