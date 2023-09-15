import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import styles from './blogDetail.module.css'
import { getBlogById } from '../../api/internal'
const BlogDetail = () => {
    const params=useParams();
    const {id}=params;
    // or 
    // const id = params.id
    
    useEffect(()=>{
(async function getById(){
let response=await getBlogById(id);
console.log(response.data.blog);
})()
    },[id])
    
    

  return (
    
    <div>BlogDetail</div>
     
    )
}

export default BlogDetail