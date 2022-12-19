
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import "../login.css"

export default function FormRegis({loginState}){
    const { register, handleSubmit, formState: { errors } } = useForm({
        criteriaMode: "all"
    })
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const submitFormLogin = async (values) => {
            console.log(values);
            //const response = await dispatch(login(values));
            // console.log("test Dang ki",response);
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
                    <input
                        type="text"
                        placeholder="Username"
                        required
                        {...register("username",{ required: true })}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        required
                        autoComplete="on"
                        name="password"
                        {...register("password",{ required: true })}
                    />
                    <input
                        type="password"
                        placeholder="Re-Password"
                        required
                        autoComplete="on"
                        name="Re-Password"
                        {...register("Re-Password",{ required: true })}
                    />
                    <input
                        type="text"
                        placeholder="Email"
                        required
                        {...register("email",{ required: true })}
                    />
                    <input
                        type="text"
                        placeholder="Address"
                        required
                        {...register("address",{ required: true })}
                    />
                    <input
                        type="text"
                        placeholder="Phone"
                        required
                        {...register("phone",{ required: true })}
                    />
                    <input type="phone" placeholder="Phone" />
                    
                    <button  >Sign Up</button>
                </form>
        </div>
    )
};
