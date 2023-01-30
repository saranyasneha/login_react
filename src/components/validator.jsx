
const Validation=(values)=>{
 
    let errors={};
    let emailError={};
    if(!values.userName){
        errors.userName="User Name is required!!."
    }
   
    if (!values.password){
        errors.password="password is required!!."
    }else if(values.password.length<5){
        errors.password=<p>Password must be more than 5 characters</p>;
    }else if(values.password!=='12345'){
        errors.password="password is incorrect"
    }
   
    return errors;
    }

export default Validation;