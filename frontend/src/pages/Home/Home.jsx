import React from 'react'
import { useState,useEffect } from 'react';
import { getNews } from '../../api/external';
import styles from './home.module.css'
import Loader from '../../components/Loader/loader';
const Home = () => {
  const [articles,setArticles]=useState([]);

  const handleClick=(url)=>{
window.open(url,"_blank")
  }
  useEffect(()=>{ 
  // IIFE
  (async function newApiCall(){
let response= await getNews();
setArticles(response);
  }
  )()



  //cleanup

  return ()=>{
   setArticles([]);
  }

  },[])
  console.log(articles)
  return (
    <>
{articles.length===0 ? <Loader text="homepage"/>
:

    <div className={styles.wrapper}>



<div className={styles.header}>Latest Articles</div>
      {/* <button className='btn btn-primary'>helw</button> */}
<div className={styles.Scard}>
      {articles.map((ele,ind,arr)=>(

 <div key={ind} onClick={()=>handleClick(ele.url)} className={`card ${styles.mb}`} style={{ width: '18rem'}} >
  <img src={ele.urlToImage} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{ele.title}</h5>
    <p className="card-text">{ele.content}</p>
    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
  
  </div>
  <br />
</div> 
   ) )}

</div>


    </div>


      }
      </>
  )
}

export default Home