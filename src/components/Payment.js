import React from 'react';
import PaymentItem from './Payment-item';

 const Payment = ( {arraybank, onBankClick } ) => (
  <div className=" ank-detai">
      {arraybank.map(bank => 
         <PaymentItem 
            key = {bank.payment}
            onClick = {() => onBankClick(bank)}
            {...bank}
         />
      )} 
  </div>
  ) 

export default Payment
