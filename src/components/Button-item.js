import React from 'react';

const Buttonitem = ({btnitem}) =>(
  <button className = "btn">{btnitem.map(e => <span key={e} {...e}>{e}</span>)}</button>
  
)
export default Buttonitem