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
import { blogDelete } from '../../api/internal'
import { useNavigate } from 'react-router-dom'
const BlogDetail = () => {
  const naviagte=useNavigate();
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

const deleteBlog=async (id)=>{
// alert(id)
let response=await blogDelete(id)
if(response.status===200){
naviagte('/blogs')
}
}

const submitHandler= async()=>{
  let obj={
    content:pcomment,
    blog:id,
    author
  }

  setLoad1(true);
  // sending data
     await PostComments(obj);


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

else if(response.response && response.response.data && response.response.data.message==='IDError' ){
  naviagte('/*')
}

// else if( response.response && response.response.status===401 ){
  // console.log(response)
  // naviagte('/login')
// }




let response1=await getComments(id);
if(response1.status===200){
setComments(response1.data.data)
}



console.log(response);

setLoad(false)
})()
window.scrollTo(0, 0);
    },[id,naviagte])
    
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
         {blog.authorId===author && <div className={styles.last}><button className={styles.edit} onClick={()=>{naviagte(`/editBlog/${blog._id}`)}} >  Edit</button> <button onClick={()=>deleteBlog(blog._id)} className={styles.delete}>delete</button></div>}
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