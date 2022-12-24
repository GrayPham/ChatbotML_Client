import React, {useState, useEffect } from 'react'
import axios from "axios";
import products from "../../products.json";
import userAPI from '../../../../api/user';
import { PayPalButtons } from '@paypal/react-paypal-js';
import { useSelector } from 'react-redux';
export default function Paypal({chatbot}){
    const [paidFor,setPaidFor] = useState(false)
    
    const [error,setError] = useState(null)
    
    const [user, setUser] = useState();

    useEffect(() => {
    const items = JSON.parse(localStorage.getItem('user'));

    if (items) {
        setUser(items);
        console.log(user);
    }
    }, []);

    const handleApprove = async (order) => {
        // Call backend function to fullfill order

        // if response is success 
        const data = {
            "paymentID": order.id,
            "userID": user.id,
            "botID": chatbot.id,
            "dateBought": order.create_time,
            "price": chatbot.price,
            "paymentMethod": "Paypal"
        }
        const payment = await userAPI.PaypalPaypment(data)
        console.log("Ket qua payment phia server",payment)
        setPaidFor(true);

        // Refresh user's account or Subscribe to status
        // if the response is error

    }
    if(user === null){
        // Display success message
        alert("You need login!")
    }
    if(paidFor){
        // Display success message
        alert("Thank you for your purchase!")
    }
    if(error){
        // Display error message
        alert(error)
    }
    if(chatbot.prices === "0"){
        return ;
    }
    return (
        <div className='paypal-button-container'>
            {/* <button onClick={handleClick} >  Thanh toan </button> */}
            <PayPalButtons 
                style={{
                    color: "black",
                    layout:"horizontal",
                    height: 48,
                    tagline: false,
                    shape: "pill"
                }}
                onClick={async (data,action)=>{
                            // if response is success 

                            // Validate on button click, client or server side
                            const hasAlreadyBoughtCourse = false; // api check san pham 
                            if(hasAlreadyBoughtCourse) {
                                setError("You already bought this chatbot!!!")
                                return action.reject()
                            }
                            else{
                                return action.resolve()
                            }
                }}
                createOrder={async (data, action) => {
                   return action.order.create({
                        purchase_units: [
                            {
                                description: chatbot.title,
                                amount:{
                                    value:  chatbot.price
                                }
                            }
                        ]

                   })
                }}
                onApprove={async (data, action) => {
                    const order = await action.order.capture();
                    console.log("Order: ", order)
                    handleApprove(order);
                }}
                onCancel={() => {
                    // Display cancel message
                }}
                onError={(err)=>{
                    setError(err);
                    console.error("PayPal Checkout onError: ", err)
                }}
            />
        </div>
    )
}