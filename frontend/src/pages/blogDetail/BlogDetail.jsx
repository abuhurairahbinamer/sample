import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import styles from './blogDetail.module.css'
import { getBlogById } from '../../api/internal'
import Loader from '../../components/Loader/loader'
import { getComments } from '../../api/internal'
import { useSelector } from 'react-redux'
import { PostComments } from '../../api/internal'
const BlogDetail = () => {
  const author=useSelector((state)=>state.users._id)
    const params=useParams();
    const {id}=params;

    // or 
    // const id = params.id
    
    const [blog,setBlog]=useState({});
    const [comments,setComments]=useState([]);
    const [pcomment,setpcomment]=useState("");
    const [load,setLoad]=useState(false);
    const [load1,setLoad1]=useState(false);
const submitHandler= async()=>{
  let obj={
    content:pcomment,
    blog:id,
    author
  }

  setLoad1(true);
  // sending data
    let response3 = await PostComments(obj);


  // calling comments
  let response2=await getComments(id);
  if(response2.status===200){
  setComments(response2.data.data)
  }
setpcomment("");
 setLoad1(false);

}

    useEffect(()=>{
(async function getById(){
  setLoad(true)
let response=await getBlogById(id);

if(response.status===200){
setBlog(response.data.blog)
// console.log(blog);   // -->it is showwing empty object as initialized 
}

let response1=await getComments(id);
if(response1.status===200){
setComments(response1.data.data)
}

setLoad(false)
})()
window.scrollTo(0, 0);
    },[id])
    
    // console.log(comments); 

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
          <br />
          {comments.length===0 &&(
            <>
            <p>no comments posted</p>
            <hr/>
            </>
            )}
        {comments.map((ele,ind,arr)=>(
          <div key={ind}>
          <div>{ele.authorUserName}</div>
          <div>{new Date(ele.createdAt).toDateString()}</div>
          <h4>{ele.content}</h4>
          <hr/>
          </div>
        ))}

          </div>
          <div className={styles.pol}>
            <div className={styles.Lstyle}>
            {load1? <Loader/> : ""}
            </div>
              <input className={styles.input} onChange={(e)=>setpcomment(e.target.value)} value={pcomment} type="text"  placeholder='post a comment'/>
              <button className={styles.post}  onClick={submitHandler} >Post</button>
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