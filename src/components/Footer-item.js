import React from 'react';

const Footeritem = ({footertitle}) => (
  <footer>
  {footertitle.map(e=>
      <span key={e.name}{...e}>{e.name}<a href="#"><span>{e.email}</span><img src={e.link} className="sizeimg"/></a></span>)
  }
  </footer>
)
export default Footeritem