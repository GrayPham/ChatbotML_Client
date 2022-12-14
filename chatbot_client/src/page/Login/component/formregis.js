
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import userAPI from '../../../api/user';
import "../login.css"

export default function FormRegis({loginState}){
    const { register, handleSubmit, formState: { errors } } = useForm({
        criteriaMode: "all"
    })
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const submitFormLogin = async (values) => {
            console.log(values);
            const response = await userAPI.register(values);
            alert("Sign Up Success",response);
            // if(response.payload){
            // navigate("/")
            // }
            // else{
            // alert("Wrong password or login");
            // }


      };
    return (
        <div class="form-container sign-up-container">
                <form onSubmit={handleSubmit(submitFormLogin)}>
                <h1>Create Account</h1>
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
                    <input className='inputlogin'
                        type="password"
                        placeholder="Re-Password"
                        required
                        autoComplete="on"
                        name="Re-Password"
                        {...register("re_password",{ required: true })}
                    />
                    <input className='inputlogin'
                        type="text"
                        placeholder="Email"
                        required
                        {...register("email",{ required: true })}
                    />
                    <input className='inputlogin'
                        type="text"
                        placeholder="Address"
                        required
                        {...register("address",{ required: true })}
                    />
                    <input className='inputlogin'
                        type="text"
                        placeholder="Phone"
                        required
                        {...register("phone",{ required: true })}
                    />
                    
                    
                    <button  className='button_Login' >Sign Up</button>
                </form>
        </div>
    )
};
