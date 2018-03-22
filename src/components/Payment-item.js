import React from 'react';

const PaymentItem = ({ payment, link,textpe, onClick }) => (
  <li onClick={onClick}>
    <div >
      <div>
        <img className = "img-fluid"
          src = {link}
          alt = {payment} 
        />
      </div>
      <div >
        <p>{textpe}</p>
      </div>
    </div>
  </li>
)

export default PaymentItem

