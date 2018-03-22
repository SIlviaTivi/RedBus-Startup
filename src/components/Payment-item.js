import React from 'react';

const PaymentItem = ({ payment, link,textpe, onClick }) => (
  <a onClick={onClick}>
    
      <span>
        <img className = "img-fluid"
          src = {link}
          alt = {payment} 
        />      
      </span>
      {textpe}
  </a>
)

export default PaymentItem

