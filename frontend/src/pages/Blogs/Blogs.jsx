import React from 'react'
import { getAllBlogs } from '../../api/internal';
import { useState,useEffect } from 'react'
import styles from './Blogs.module.css'
import Loader from '../../components/Loader/loader';
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom'
import { resetUser } from '../../store/userSlice';
const Blogs = () => {
    const [blogs,setBlogs]=useState([]);
    const [load,setLoad]=useState(false);
    const dispatch = useDispatch();
    const navigate= useNavigate();

    const detail=(id)=>{
    //  alert(id);
    navigate(`/detail/${id}`)
    }

useEffect(()=>{
    
(async function getBlogs(){
    setLoad(true);
let response=await getAllBlogs();
console.log(response.status);
if(response.status===200){
    setBlogs(response.data.blogs);
}

 if(response.response && response.response.status===401){  // if you dont write response.response before &&  and only write response.response.status===401 then it will throw error
console.log(response.response.status)
        dispatch(resetUser());
        navigate('/login')
}
setLoad(false)
})();

},[navigate,dispatch])

console.log(blogs);
  return (
    <>
{load ? <Loader text="Blogs"/> :
    <div className={styles.parent}>
        <br /><br />

    {blogs.map((ele,ind,arr)=>(
<div onClick={()=>detail(ele._id)} className={styles.child} key={ind}>
    <h1>{ele.title}</h1>
<img className={styles.forimage} src={ele.photo} alt='man' />
<p>{ele.content}</p>

</div>        
    ))}
    </div>
    }
    </>
  )
}

export default Blogs