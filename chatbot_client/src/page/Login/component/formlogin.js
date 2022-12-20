
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../../reducers/userSlice';
import "../login.css"

export default function Formlogin(loginState){
    const { register, handleSubmit, formState: { errors } } = useForm({
        criteriaMode: "all"
    });
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const submitFormLogin = async (values) => {
        if(loginState.loginState === true){

            console.log(values);
            const response = await dispatch(login(values));
            console.log("test",response);
            if(response.payload){
            navigate("/")
            }
            else{
            alert("Wrong password or login");
            }
            
        }

      };
    return (
    <div class="form-container sign-in-container">
        <form onSubmit={handleSubmit(submitFormLogin)}>
            <h1>Sign in</h1>
            <div class="social-container">
                <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
            </div>
            <span>or use your account</span>
            <input className='inputlogin'
                type="text"
                placeholder="Username"
                required
                {...register("username",{ required: true })}
            />
            <input className='inputlogin'

            type="password"
            placeholder="Password"
            required
            autoComplete="on"
            name="password"
            {...register("password",{ required: true })}
            />
            <a href="#">Forgot your password?</a>
            <button className='button_Login' type="submit">Sign In</button>
        </form>
    </div>
    )
};
