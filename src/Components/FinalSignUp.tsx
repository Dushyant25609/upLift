import { FC } from "react";
import SignUp from "./Signup";

type FinalSignUpProps = {};

const FinalSignUp: FC<FinalSignUpProps> = () => {
    return (
        <div className="h-screen py-10 px-4">
            <SignUp/>
        </div>
    )
}

export default FinalSignUp;