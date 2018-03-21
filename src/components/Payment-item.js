import React from 'react';

const Paymentitem = ({logopayment}) =>(
  <div>
    {logopayment.map(e=>
      <div key={e.name}{...e}><a href="#"><img src={e.link} title={e.name}/><br/>{e.text}</a></div>)
  }
  </div>
)
export default Paymentitem
