import './styles.css';
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import UserContext from '../../../context/userContext';

export const LoginPage =() => {

    const [mode, setMode] = useState("login");
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const globalState = useContext(UserContext);

    const login = async(formVals) => {
        try {
            const auth = getAuth();

            const loginUser = await signInWithEmailAndPassword (
                auth,
                formVals.user,
                formVals.password
            );
            globalState.initUserData(formVals.username, formVals.screenName);
            navigate("/home");
        } catch (error) {
            console.log(error);
        }
    }

    const createNewUser = async(formVals) => {
        const formattedData = {
            fields: {
                dateJoined: {
                    timestampValue: new Date()
                },
                username: {
                    stringValue: formVals.username
                },
                screenName: {
                    stringValue: formVals.screenName
                }
            }
        }

        try {
            const response = await fetch("https://firestore.googleapis.com/v1/projects/final-assignment-3e1d7/databases/(default)/documents/users/",
            {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify(formattedData)
            });

        } catch (error) {
            console.log(error);
        }
    }
    const signup = async(formVals) => {
        const auth = getAuth();
        try {
            const signupUser = await createUserWithEmailAndPassword(auth, formVals.user, formVals.password);
            createNewUser(formVals);
            globalState.initUserData(formVals.username, formVals.screenName);
            navigate("/home");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='login'>
            {mode === "login" && (
                <form className='login-form' onSubmit={handleSubmit(login)}>
                    <h2>Log In</h2>
                    <input type='email' name='user' required {...register("user")} placeholder='Email'/>
                    <input type='password' name='password' required placeholder='Password' {...register("password")}/>
                    <input type='submit' value='Login'/> <br/>
                    <p>Don't have an account?</p><button onClick={()=> setMode("signup")}>Sign Up</button>
                </form>
            )}

            {mode === "signup" && (
                <form className='signup-form' onSubmit={handleSubmit(signup)}>
                    <h2>Sign Up</h2>
                    <input type='email' name='user' required {...register("user")} placeholder='Email'/>
                    <input type='password' name='password' required placeholder='Password' {...register("password")}/>
                    <input type='password' name='password' required placeholder='Confirm Password' {...register("passwordConfirm")}/>
                    <input type='submit' value='Login'/> <br/>
                    <p>Already have an account?</p><button onClick={()=> setMode("login")}>Log In</button>
                </form>
            )}
        </div>
    )
}