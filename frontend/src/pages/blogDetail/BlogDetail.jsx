import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import styles from './blogDetail.module.css'
import { getBlogById } from '../../api/internal'
import Loader from '../../components/Loader/loader'

const BlogDetail = () => {
    const params=useParams();
    const {id}=params;
    const [blog,setBlog]=useState({});
    const [load,setLoad]=useState(false);
    // or 
    // const id = params.id
    

    useEffect(()=>{
(async function getById(){
  setLoad(true)
let response=await getBlogById(id);

if(response.status===200){
setBlog(response.data.blog)
// console.log(blog);   // -->it is showwing empty object as initialized 
}
setLoad(false)
})()
    },[id])
    
    // console.log(blog); 

  return (
    <>
    {load ? <Loader/> :
    <div className={styles.parent}>
      <div className="fluid-container">
        <div className="row">
        <div className={`col-md-6 ${styles.child}`}  >
          <div className={styles.police}>
          <h3>{blog.authorName}</h3>
          <p>@ {blog.authorUsername +" on "+ new Date(blog.createdAt).toDateString()}</p>
          <img src={blog.photo} width="300px" height={300} alt="forgotten" />
          <p>{blog.content}</p>
          </div>
          <div className={styles.last}><button className={styles.edit}>Edit</button> <button className={styles.delete}>delete</button></div>
       <br /><br /><br />
        </div>
        <div className="col-md-6">
          <div className={styles.like}>
             
        

          </div>
          <div className={styles.pol}>
              <input className={styles.input} type="text"  placeholder='post a comment'/>
              <button className={styles.post}>Post</button>
              <br /><br /><br />
            </div>

          
        </div>
        </div>
      </div>
      </div>
      }
      </>
    )
}

export default BlogDetail