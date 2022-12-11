import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Login.css';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { login } from '../../reducers/userSlice';
export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm({
      criteriaMode: "all"
  });
  const onSubmit = data => {

    console.log(data);
  }
    const submitForm = async (values) => {
      console.log(values);
      const response = await dispatch(login(values));
      console.log("test",response);
      if(response.payload){
        navigate("/")
      }
      else{
        alert("Wrong password or login");
      }
      
    };
  return(
    <div className="Login">
      <form className="Login-form" onSubmit={handleSubmit(submitForm)}>
        <h3>Đăng nhập</h3>

        <input
          className="Login-input"
          type="text"
          placeholder="Username"
          required
          {...register("username",{ required: true })}
        />

        <input
          className="Login-input"
          type="password"
          placeholder="Password"
          required
          autoComplete="on"
          name="password"
          {...register("password",{ required: true })}
        />

        <button
          type="submit"
          className="Login___btn-submit"
          // disabled={!formState.isValid}
        >
          Đăng nhập
        </button>
      </form>
    </div>
  )
}