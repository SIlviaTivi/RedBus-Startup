import React from 'react';
<div></div>
const OperationItem = ({operation}) => (
  <div className='operation'>
    <div className='operation-block'>
      {operation.map(e=>
      
          <div key={e.name}{...e} className="block-operation">
          <div className="blocktotal">
            <img  className="clock" src={e.img} />
            <div className = {e.class1}><div >{e.namecode}</div> <div className = "fdcode" >{e.code}</div></div>
            <div className = {e.class2}><div className = "fdtotal" >{e.nametotal}</div><div>{e.total}</div></div>
            <div className = {e.class3}><div className = "fdorder" >{e.nameday}</div><div className = "fdday" >{e.day}</div></div>
          </div>
          </div>)

      }
    </div>
  </div>
)
export default OperationItem

