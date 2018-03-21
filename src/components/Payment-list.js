import React from 'react';
import Paymentitem from './Payment-item';

const Paymentlist = ({ logopayment }) => (
  <div>

    {logopayment.map(e =>
      <Paymentitem key={e.name}
      {...e}
      />
      )}
  </div>
)
export default Paymentlist
