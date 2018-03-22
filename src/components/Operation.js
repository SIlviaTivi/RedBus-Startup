import React from 'react';
import OperationItem from './Operation-item.js';

const operationdata = [{namecode:'Código de pago', code:'9125682', class1:'blk1'},
                 {nametotal:'TOTAL', total:'s/140.00', class2:'blk2'},
              {nameday:'Tu orden expirará', day:'3 Febr - 01:12 p.m.',img: 'assets/img/clock.jpg', class3:'blk3'}]
                

const Operation = () => (
    <div  >
    <OperationItem  operation = {operationdata}/>
    </div>
)
export default Operation


