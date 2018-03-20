import React from 'react';

const OperationItem = ({operation}) => (
  <footer>
  {operation.map(e=>
      <span key={e.name}{...e}>
      <img className='sizeimg' src={e.img} className="sizeimg"/>{e.name}<a href="#"><span>{e.code}</span><span>{e.total}</span></a>
      </span>)
  }
  </footer>
)
export default OperationItem

