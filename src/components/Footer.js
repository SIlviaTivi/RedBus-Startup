import React from 'react';
import Footeritem from './Footer-item.js'

const footertitle = [{name:'Instrucciones Vía', link:'assets/img/logo/print.jpg', class:'footer1'},
                    {name:'Ayuda:', email:'contacto@redbus.pe', class:'footer2'},
                    {name:'Pago Vía', link:'assets/img/logo/pagoefectivo.png', class:'footer3'}]

                    

const Footer = () =>(
    <div>
       <Footeritem footertitle = {footertitle}/>
    </div>
)
export default Footer