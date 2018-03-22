import React from 'react';

const Footeritem = ({footertitle}) => (
  <footer className='center'>
  {footertitle.map(e=>
      <span key={e.name}{...e}>{e.name}<a href="#"><span className='footer2'>{e.email}</span><img  src={e.link} className={e.class}/></a></span>)
  }
  </footer>
)
export default Footeritem
