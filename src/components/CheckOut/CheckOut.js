import React, { useState } from 'react';
import './CheckOut.css'
const Checkout = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [creadcartData, setCreadcartData] = useState({
    name: '',
    cardNumber: '',
    expirationDate: '',
    cvv: ''
  });
  const [customerWebsite, setCustomerWebsite] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleCreadcartDataChange = (event) => {
    setCreadcartData({creadcartData,[event.target.name]: event.target.value});
  };

  const handleCustomerWebsiteChange = (event) => {
    setCustomerWebsite(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (selectedOption === ''&&customerWebsite === '' ) {
        alert('Please complete this form');
      }
    else if (selectedOption === '') {
      alert('Please select a payment method');
    }
    else if (customerWebsite === '') {
        alert('Please enter your location');
    
    } else if (selectedOption === 'creadcart') {
      if (
        creadcartData.name === '' ||
        creadcartData.cardNumber === '' ||
        creadcartData.expirationDate === '' ||
        creadcartData.cvv === ''
      ) 
      {
        alert('Please enter all Creadcart data');
      }
       else
        {
        alert ('Creadcart data entered successfully Client Location: ' + customerWebsite);
       // alert(' Client Location: ' + customerWebsite);
        }
    } 
    else if (selectedOption === 'paypal') {
      alert('Was selected Paypal  Client Location: ' + customerWebsite);
      //alert();
    } 
    else if (selectedOption === 'cash') {
      
      alert('Was selected CashClient Location: ' + customerWebsite);
      //alert(' Client Location: ' + customerWebsite);
    }
    
  };

  return (
    <div >
      <form onSubmit={handleSubmit}>
      <div className='checkout_form'>
          <label>
            Location :
            <input  className="input_checkbox"type="text" value={customerWebsite} onChange={handleCustomerWebsiteChange}/>
          </label>
        </div>

        <div className='checkout_form'>
          <label>
            <p>Choose the payment method</p>
            <input type="radio" value="creadcart" checked={selectedOption === 'creadcart'} onChange={handleOptionChange} />
            Creadcart
          </label>
        </div>
        {selectedOption === 'creadcart' && (
          <div className='checkout_form'>
            <label>
              Your Name:
              <input  className="input_checkbox" type="text" name="name" value={creadcartData.name} onChange={handleCreadcartDataChange} />
            </label>
          </div>
        )}
        {selectedOption === 'creadcart' && (
          <div className='checkout_form'>
            <label>
            Card Number:
              <input className="input_checkbox" type="text" name="cardNumber" value={creadcartData.cardNumber} onChange={handleCreadcartDataChange} />
            </label>
          </div>
        )}
        {selectedOption === 'creadcart' && (
          <div className='checkout_form'>
            <label>
            Expiry Date:
              <input className="input_checkbox" type="text" name="expirationDate" value={creadcartData.expirationDate} onChange={handleCreadcartDataChange} />
            </label>
          </div>
        )}
        {selectedOption === 'creadcart' && (
          <div className='checkout_form'>
            <label>
              CVV:
              <input className="input_checkbox" type="text" name="cvv" value={creadcartData.cvv} onChange={handleCreadcartDataChange} />
            </label>
          </div>
        )}
       
        <div className='checkout_form'>
          <label>
            <input type="radio" value="paypal" checked={selectedOption === 'paypal'} onChange={handleOptionChange} />
            Paypal
          </label>
        </div>
        <div className='checkout_form'>
          <label>
            <input type="radio" value="cash" checked={selectedOption === 'cash'} onChange={handleOptionChange} />
            Cash
          </label>
        </div>
        <button  className="button_checkout"type="submit">Check Out</button>
      </form>
    </div>
  );
};

export default Checkout;