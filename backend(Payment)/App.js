import React from 'react'
import './App.css'

function App() {
    function showRazorpay() {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js'
        document.body.appendChild(script)
        var options = {
            "key": "YOUR_KEY_ID",
            "amount": "50000",
            
        }
    }
}