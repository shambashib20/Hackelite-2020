import React from 'react'
import './App.css'

function loadScript(src) {
    return new Promise((resolve => {

        const script = document.createElement('script');
        script.src = 
        document.body.appendChild(script)
        script.onload = () => {
            resolve(true);
        }
        script.oneerror = () => {
            resolve(false);
        }
    })
}
const __DEV__ = 

if(document.domain === 'localhost') {
    //development

} else {
    //production
    //production
}



function App() {
    async function displayRazorpay() {
        const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

        if(!res) {
            alert('Razorpay has failed to load ')
        }
        var options = {
            key: "rzp_test_DQ41K5VHq5clHl",
            amount: "50000",
            currency: "INR",
            name: "Acme Cor",
            description: "Test Transaction",
            image: "logo.jpg",
            order_id: "order_9A33XWu170gUtm",
            handler: function (response){
                alert(response.razorpay_payment_id);
                alert(response.response_order_id);
                alert(response.razorpay_signature)
            },
            prefill: {
                "name": "Shambashib Majumdar",
                "email": "shambashibmajumdar2000@gmail.com",
                "contact": "8481914369"
            },
            notes: {
                "address": "Razorpay Corporate Office"
            },
            theme: {
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
