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
            "name": "Acme Corp",
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": "order_9A33XWu170gUtm",
            "handler": function (response){
                alert(response.razorpay_payment_id);
                alert(response.response_order_id);
                alert(response.razorpay_signature)
            },
            "prefill": {
                "name": "Gaurav Kumar",
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

            
        }
    }
}