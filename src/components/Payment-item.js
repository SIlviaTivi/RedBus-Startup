import React from 'react';

const Paymentitem = ({ link, text, name }) => (
    <div className="artist-list">
      <div>
        <img 
          src = {link}
          alt = {name} 
        />
      </div>
      <div className="media-body">
        <p>{text}</p>
      </div>
    </div>
  
)
export default Paymentitem
