import React from 'react';

const Buttonitem = ({btnitem}) =>(
  <button>

{btnitem.map(e=><span key={e.name}{...e}>{e}</span>)
  }
  </button>
  
)
export default Buttonitem