
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from 'react';
import "./login.css"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { login } from '../../reducers/userSlice';

import Formlogin from './component/formlogin';
import FormRegis from "./component/formregis";



export default function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // const { register, handleSubmit, formState: { errors } } = useForm({
    //     criteriaMode: "all"
    // });

    const [loginState, setLoginState] = useState(true);
    const [className, setClasName] = useState('container')
    const handleClick = () => {
        setClasName("container right-panel-active")
        setLoginState(false)
    };
    const handleClickLogin = () => {
        setClasName("container")
        setLoginState(true)
    };
    // const submitFormLogin = async (values) => {
    //     if(loginState === true){
    //         console.log(values);
    //         const response = await dispatch(login(values));
    //         console.log("test",response);
    //         if(response.payload){
    //         navigate("/")
    //         }
    //         else{
    //         alert("Wrong password or login");
    //         }
    //     }
    //     else{
    //         setLoginState(true);
    //         className = 'container';
    //     }
    //   };

    return (
        <div className="login-body">

            <div class={className} id="container">
                <FormRegis loginState={loginState}/>
                <Formlogin loginState={loginState}/>
                <div class="overlay-container">
                    <div class="overlay">
                        <div class="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button onClick={handleClickLogin} class="ghost button_Login" id="signIn">Sign In</button>
                        </div>
                        <div class="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start journey with us</p>
                            <button  onClick={handleClick} class="ghost button_Login" >Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}