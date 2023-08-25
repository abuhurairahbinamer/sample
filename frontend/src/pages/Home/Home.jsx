import React from 'react'
import { useState,useEffect } from 'react';
import { getNews } from '../../api/external';
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
    <div>Home</div>
  )
}

export default Home