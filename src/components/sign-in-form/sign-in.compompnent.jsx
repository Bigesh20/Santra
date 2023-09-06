import { useState } from "react";
import {signInWithGooglePopup, signInAuthUserWithEmailAndPassword} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import './sign-in-form.styles.scss'
import Button from "../button/button.component";


const defaultFormFields = {
    email: '',
    password: '',
}

const SignIn = () => {
const [formFields, setFormFields] = useState(defaultFormFields);
const {email, password} = formFields;
const resetFormFields = () => {
    setFormFields({...defaultFormFields});
};
const signInWithGoogle =async () => {
const {user} = await signInWithGooglePopup();
}
const handleSubmit = async (event) => {
    event.preventDefault();
   
    try {
        const {user} = await signInAuthUserWithEmailAndPassword (email, password);
        resetFormFields();
    }
   
    
    catch (error){}
}

 const handleChange = (event) => {
    const {name, value} = event.target;
    setFormFields ({...formFields, [name]: value})
 }
    return(
        <div className="sign-up-container">
            <h2> Already have account </h2>
            <span>Sign in with email & password</span>

            <form onSubmit={handleSubmit}>

                <FormInput 
                label ="Email"
                type= 'text' 
                required 
                onChange= {handleChange} 
                name = 'email' 
                value = {email} />

                <FormInput 
                label ="Password"
                type= 'text' 
                required 
                onChange= {handleChange} 
                name = 'password' 
                value = {password} />
            
             <div className="buttons-container">
             <Button buttonType='inverted' type = 'submit'>Sign In</Button>
             <Button buttonType = 'google' type='button' onClick ={signInWithGoogle} >Google Sign In</Button>
                </div>   

                
            </form> 
        </div>

    )
};

export default SignIn;