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
        response= await api.post("/blog",data)
    } catch (error) {
        console.log("hellow",error)
        return error;
    }
    return response;
}


export const getBlogById=async (id)=>{
let response;
try {
    response = await api.get(`/blog/${id}`)
} catch (error) {
    return error;
}
return response;
}


export const getComments=async (id)=>{
let response;
try {
    response=await api.get(`/comment/${id}`)
} catch (error) {
    return error;
}

return response;


}




export const PostComments=async (data)=>{
    let response;
    try {
        response=await api.post(`/comment`,data)
    } catch (error) {
        return error;
    }
    
    return response;
    
    
    }

export const blogDelete= async (id)=>{
let response;
try {
    response = await api.delete(`/blog/${id}`)
} catch (error) {
    return error
}

return response


}


export const editBlog = async(data)=>{
let response;
try {
 response=await api.put('/blog',data)   
} catch (error) {
    return error;
}

return response;

}




    
    


