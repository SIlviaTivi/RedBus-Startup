import React from 'react';
import OperationItem from './Operation-item.js'

const operationdata = [{name:'Código de pago', code:'9125682'},
                 {name:'Total', total:'s/140.00'},
              {name:'Tu orden expirará', day:'3 Febr - 01:12 p.m.',img: 'assets/img/clock.jpg'}]
                

const Operation = () => (
    <OperationItem operation = {operationdata}/>
)
export default Operation


