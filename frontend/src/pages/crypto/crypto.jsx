import React from 'react'
import { useState,useEffect } from 'react'
import Loader from '../../components/Loader/loader'
import { getCrypto } from '../../api/external'
import styles from './crypto.module.css'
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

console.log(crypto);
  return (
    <>
    {error ? <div>{error}</div>:
    <>
    {crypto.length===0 ? <Loader text="Crypto Page"/>
     : 
    
    <div>
    
    <table className={`table table-dark ${styles.back}`}>
  <thead className={styles.font}>
    <tr>
      <td >#</td>
      <td>Coin</td>
      <td>Symbol</td>
      <td>Price</td>
      <td>24h</td>
    </tr>
  </thead>
  <tbody>
    {/* <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr> */}

  {
    crypto.map((ele,ind,arr)=>(
      <tr key={ind}>
      <td className={styles.bold}>{ele.market_cap_rank}</td>
      <td> <div className={styles.logo}>
                <img src={ele.image} width={40} height={40} alt='nothing' /> {ele.name}</div>
                </td>
      <td>{ele.symbol}</td>
      <td>{ele.current_price}</td>
      <td>{ele.price_change_percentage_24h}</td>
      </tr>
    ))
  }


  </tbody>
</table>
    
    </div> }
    </>
}
    </>
  )
}

export default Crypto