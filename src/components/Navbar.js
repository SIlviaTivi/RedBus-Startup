import React from 'react';
import Navbaritem from './Navbar-item';

const Navbar = ({Title}) => {
return (
  <div>
   {Title.map(e=> <Navbaritem titlestring={e} key = {e}/>)}

  </div>
  )
}
export default Navbar

