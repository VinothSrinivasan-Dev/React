import axios from 'axios'
import { useEffect, useState } from 'react';
import './CheckoutPage.css'
import './checkout-header.css'
import { CheckoutHeader } from './CheckoutHeader';
import { OrderSummary } from './OrderSummary';
import { PaymentSummary } from './PaymentSummary';
//This makes axios available in the Console.
// - Then, you can try running axios.post('/api/reset') in the Console.
// window.axios = axios;

// More details:
// - Normally, we can't access values (like axios) outside of a file.
// - However, JavaScript has a built-in, global object called window
//   (this represents the browser window).
// - So one way to make a value accessible anywhere (including in the
//   Console), is to attach it to the window object. That's why we
//   do window.axios = axios;
// - Now, in the Console, we can run window.axios.post(...)
// - And JavaScript has another shortcut we can use. If we just type
//   "axios", this is a shortcut for "window.axios"
// - That's why the code window.axios = axios; lets us use "axios"
//   anywhere (including in the Conosle).



export function CheckoutPage({ cart, loadCart }) {

    const [deliveryOptions, setDeliveryOptions] = useState([]);
    const [paymentSummary, setPaymentSummary] = useState(null);


    useEffect(() => {
        const fetchDeliveryOptions = async () => {
            let response = await axios.get('/api/delivery-options?expand=estimatedDeliveryTime');

            setDeliveryOptions(response.data);
        }
        fetchDeliveryOptions();

    }, [])

    useEffect(() => {

        const getPaymentSummary = async () => {
            let response = await axios.get('/api/payment-summary');
  

            setPaymentSummary(response.data);
    
        }
        getPaymentSummary();
    }, [cart]);



    return (
        <>

            <title>Checkout</title>


            <CheckoutHeader />
            <div className="checkout-page">
                <div className="page-title">Review your order</div>

                <div className="checkout-grid">
                    <OrderSummary cart={cart} deliveryOptions={deliveryOptions} loadCart={loadCart} />

                    <PaymentSummary paymentSummary={paymentSummary} loadCart={loadCart} />
                </div>
            </div>
        </>
    )
}