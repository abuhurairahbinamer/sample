import React from 'react'
import { useState,useEffect } from 'react'
import Loader from '../../components/Loader/loader'
import { getCrypto } from '../../api/external'
const Crypto = () => {
    const [crypto,setCrypto]=useState([]);
    const [error,setError]=useState(null);

useEffect(()=>{

    // IIFE -> immedeately invoked function expression
    
    ( async function getcrypto(){
     let response = await getCrypto();
    //  console.log(response)
    if(response.name){
        setError(response.message)
        // console.log(error);
    }
     setCrypto(response); 

    })()

    return ()=>{ setCrypto([]);  
       setError(null)
    }

},[])

// console.log(crypto);
  return (
    <>
    {error ? <div>{error}</div>:
    <>
    {crypto.length===0 ? <Loader text="Crypto Page"/>
     : 
    
    <div>crypto page</div> }
    </>
}
    </>
  )
}

export default Crypto