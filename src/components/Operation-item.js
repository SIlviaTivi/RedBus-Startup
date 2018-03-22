import React from 'react';

const OperationItem = ({operation}) => (

  <div className='operation'>
    <br />
    <div >
      {/*     <div  className="inline-op"><img  className="clock" src={e.img} /></div> */}
      {operation.map(e=>
      
          <div key={e.name}{...e} className="block-operation">
          <div className="blocktotal">
              
                <div className = {e.class1}><div >{e.namecode}</div> <div className = "fdcode" >{e.code}</div></div>
             
            
                <div className = {e.class2}><div className = "fdtotal" >{e.nametotal}</div><div className = "fdcant" >{e.total}</div></div>
                </div>
                <div className = {e.class3}><div className = "fdorder" >{e.nameday}</div><div className = "fdday" >{e.day}</div></div>
      
          </div>)

      }
    </div>
  </div>
)
export default OperationItem

