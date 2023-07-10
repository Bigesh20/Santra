import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import SignUp from "../../components/sign-up-form/sign-up.compompnent";

const SignIn = () => {

const logGoogleUser =async () => {
    const {user} = await signInWithGooglePopup();
   const userDocRef = await createUserDocumentFromAuth(user);
}

    return (
        <div><h1>
            Sign In Page
            </h1>
            <button onClick = {logGoogleUser}>Google SignIn</button>
            <SignUp />
            </div>
    )
}

export default SignIn;