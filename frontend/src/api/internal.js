import axios from "axios";

const api=axios.create({
    baseURL:process.env.REACT_APP_INTERNAL_API_PATH,
    withCredentials:true,  // for cookies communication
    headers:{
     "Content-Type":"application/json"
    }
})

// console.log(process.env.REACT_APP_INTERNAL_API_PATH);
export const login = async (data) => {
let response;
try {
    
    response = await api.post('/login',data)
    // return response; you can also write here
} catch (error) {

    return error;
}

return response;
}


export const signup = async(data)=>{

let response;
try {
    response= await api.post('/register',data) 
} catch (error) {
    return error
}
 
return response;


}

export const signOut= async()=>{
    try {
        
        await api.post('/logout')
        
    } catch (error) {
        return error;
    }

}


export const getAllBlogs=async()=>{
let response;
    try {
        response=await api.get('/blog/all')
    } catch (error) {
        return error
    }

    return response;
}


export const submitABlog = async (data) =>{
    let response;
    try {
        response= api.post("/blog",data)
    } catch (error) {
        return error;
    }
    return response;
}

