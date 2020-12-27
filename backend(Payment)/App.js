import React from 'react'
import './App.css'

function loadRazorpay() {
    function showRazorpay() {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js'
        document.body.appendChild(script)
        script.onload = display
        var options = {
            "key": "YOUR_KEY_ID",
            "amount": "50000",
            "currency": "INR",
            "name": "Acme Cor",
            "description": "Test Transaction",
            "image": "logo.jpg",
            "order_id": "order_9A33XWu170gUtm",
            "handler": function (response){
                alert(response.razorpay_payment_id);
                alert(response.response_order_id);
                alert(response.razorpay_signature)
            },
            "prefill": {
                "name": "Shambashib Majumdar",
                "email": "shambashibmajumdar2000@gmail.com",
                "contact": "99999999999"
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#F37524"
            }
        };
        var rzp1= new Razorpay(options);
            
    }
    return (
        <div className="App">
            <header>
            <img src={logo} classname="App-logo" alt="logo" />
            <a 
            className="App-link"
            onClick={showRazorpay}
            target="_blank"
            rel="noopener no refferer">
                Donate $5
            </a>
            </header>

        </div>
    )
}
