import React from 'react';
import PaymentItem from './Payment-item';

 const Payment = ( {arraybank, onArtistClick } ) => (
  <ul className=" ank-detai col-md-4">
      {arraybank.map(bank => 
         <PaymentItem 
            key = {bank.payment}
            onClick = {() => onArtistClick(bank)}
            {...bank}
         />
      )} 
  </ul>
  ) 

export default Payment
