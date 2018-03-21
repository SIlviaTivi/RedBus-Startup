import React from 'react';
import Paymentitem from './Payment-item.js'

const logoPayment = [{name:'bcp', link:'assets/img/logo/bcp.png', text:'Agentes y Bodegas Agencias'},
                     {name:'bbva',link:'assets/img/logo/bbva.png', text:'Agentes y Bodegas Agencias'},
                     {name:'interbank',link:'assets/img/logo/interbank.jpg', text:'Agentes y Bodegas Agencias'},
                     {name:'banbif',link:'assets/img/logo/banbif.png', text:'Agentes y Bodegas'},
                     {name:'full-carga',link:'assets/img/logo/full-carga.png', text:'Agentes y Bodegas'},
                     {name:'Scotiabanck',link:'assets/img/logo/Scotiabank.jpg', text:'Agentes y Bodegas Agencias'},
                     {name:'western',link:'assets/img/logo/western-union.png', text:'Agentes y Bodegas'},
                     {name:'Kasnet',link:'assets/img/logo/Kasnet.png', text:'Agentes y Bodegas'}]

const Payment = () =>(
<div>
  <Paymentitem logopayment={logoPayment}/>
</div>
)
export default Payment
