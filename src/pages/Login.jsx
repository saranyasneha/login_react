import React, {useEffect, useState} from "react";
import {toast} from "react-toastify"
import facebook from "../components/images/facebook.png";
import google from "../components/images/google.png";
import Validation from "../components/validator";
import {useNavigate} from 'react-router-dom';

const Login=()=>{

const navigate=useNavigate(); 

    const [values,setValues]=useState({
        userName:"",
        email:"",
        password:"",

    });
    const [errors,setErrors]=useState({});
    const [emailError,setEmailError]=useState(false);
    const handleChange=(event)=>{
        setValues({
            ...values,[event.target.name]:event.target.value,
        }) 
        setErrors(Validation(values));    
        if(values.email.match(/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/)) {
            setEmailError(false);
        }else{
            setEmailError(true)
        }                                                                                                                                  
    }
    useEffect(()=>{
        if(localStorage.getItem('auth')) navigate('/studentsMarkDetails');
    },[])
   const formSubmitter=(event)=>{
       event.preventDefault();
       setErrors(Validation(values));       
    if(values.email<=0){
        setEmailError(true)
    }
       if(values.email=='admin@gmail.com'&&values.password=='12345'){
        navigate('/studentsMarkDetails');
        localStorage.setItem('auth',true);
       }else if((values.email!=='admin@gmail.com'&&values.email!=='student@gmail.com')||(values.password!=='12345'&&values.password!=='11111')) {
        toast.warning("You are not an Authenticated person");
       }
       
     if(values.email=='student@gmail.com'&&values.password=='11111'){
        navigate('/studentsMarks');
     }     
       
};
    
   return (
    <div className="login_container">
        <div className="app-wrapper">
            <div>
                <h2 className="title">Login</h2>
            </div>
          
            <form className="form-wrapper" >
                <div className="name">
                    <label className="label">User Name</label>
                    <input 
                    type="text"
                     className="input" 
                     name="userName" 
                     onChange={handleChange}
                     /> {errors.userName &&values.userName.length<=0?<p className="error">{errors.userName}</p>:""}
                </div>
                <div className="email">
                    <label className="label">Email</label>
                    <input 
                    type="email" 
                    className="input"  
                    name="email"
                    onChange={handleChange}
                    />
                    {emailError? <p className="error">Invalid Email id</p> :""}
                </div>
                <div className="password">
                    <label className="label">Password</label>
                    <input 
                    type="password" 
                    className="input" 
                    name="password" 
                    onChange={handleChange}/>
                   {errors.password &&values.password.length<5?<p className="error">{errors.password}</p>:""}
                </div>
                     
                <div>
                    <button className="submit" onClick={formSubmitter}>LOGIN</button>
                </div>
                
            </form>
            <div className="msg">
                <p>Or SignUp Using</p>
            </div>
            <div className="social">
                <img src={facebook} className="facebook" />
                <img src={google} className="google"/>
            </div>
        </div>
    </div>
    );
}
export default Login;