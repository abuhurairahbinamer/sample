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
} catch (error) {

    return error;
}

return response;
}