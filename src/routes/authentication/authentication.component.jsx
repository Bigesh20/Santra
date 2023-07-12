
import SignUp from "../../components/sign-up-form/sign-up.compompnent";
import SignIn from "../../components/sign-in-form/sign-in.compompnent";
import './authentication.styles.scss'
const Authentication = () => {



    return (
        <div className="authentication-container">
            <SignIn />
            <SignUp />
            </div>
    )
}

export default Authentication;