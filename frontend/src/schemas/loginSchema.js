import * as yup from 'yup';
const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,25}$/;
const loginSchema=yup.object().shape({
    username:yup.string().min(5).max(30).required("username is please required"),
    password:yup.string().min(8).max(25).matches(passwordPattern,{message:"use lower case, upper case and digit"}).required()
})

export default loginSchema