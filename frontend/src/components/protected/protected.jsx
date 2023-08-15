import React from 'react'
import { Navigate } from 'react-router-dom'
const Protected = ({isAuth,children}) => {
  if(isAuth){
    return children
  }
  
  else{
return <Navigate to='/log-in' />
  }    

  
// else {
//     return(
//         <div>hellow</div>
//     )
// }
  
}

export default Protected