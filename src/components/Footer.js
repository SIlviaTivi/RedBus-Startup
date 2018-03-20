import React from 'react';
import Footeritem from './Footer-item.js'

const footertitle = [{name:'Instrucciones Vía', link:'assets/img/logo/print.jpg'},
                    {name:'Ayuda:', email:'contacto@redbus.pe'},
                     {name:'Pago Vía', link:'assets/img/logo/pagoefectivo.png'}]

                    

const Footer = () =>(
    <div>
       <Footeritem footertitle = {footertitle}/>
    </div>
)
export default Footer