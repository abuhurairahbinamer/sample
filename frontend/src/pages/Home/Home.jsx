import React from 'react'
import { useState,useEffect } from 'react';
import { getNews } from '../../api/external';
import styles from './home.module.css'
const Home = () => {
  const [articles,setArticles]=useState([]);
  useEffect(()=>{ 
  // IIFE
  (async function newApiCall(){
let response= await getNews();
setArticles(response);
  }
  )()


  },[])
  console.log(articles)
  return (
    <div>Home

      {/* <button className='btn btn-primary'>helw</button> */}
<div className={styles.Scard}>
      {articles.map((ele,ind,arr)=>(

 <div key={ind}  className={`card ${styles.mb}`} style={{ width: '18rem'}} >
  <img src={ele.urlToImage} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{ele.title}</h5>
    <p className="card-text">{ele.content}</p>
    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
  </div>
</div> 
   ) )}

</div>


    </div>
  )
}

export default Home