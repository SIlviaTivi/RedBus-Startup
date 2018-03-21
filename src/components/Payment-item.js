import React from 'react';

const PaymentItem = ({ payment, link,text, onClick }) => (
  <li onClick={onClick}>
    <div >
      <div>
        <img className = "img-fluid"
          src = {link}
          alt = {payment} 
        />
      </div>
      <div >
        <p>{text}</p>
      </div>
    </div>
  </li>
)

export default PaymentItem

