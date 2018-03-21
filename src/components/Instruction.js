import React from 'react';
import InstructionItem from './Instruction-item.js'

const instructiondata = [{payment:'BCP', text1:'Selecciona la opcion Pago de servicios > EMPRESAS > PAGOEFECTIVO > PAGOEFECTIVOSOLES.', text2: 'Ingresa tu código CIP:91256812 y sigue los pasos.'},
                         {payment:'BBVA', text1:'Selecciona la opcion Pago de servicios > De intituciones y Empresas > Busca por nombre > PAGOEFECTIVO > PAGOEFECTIVOSOLES', text2: 'Ingresa tu código CIP:91256812 y sigue los pasos.'},
                         {payment:'Interbank', text1:'Selecciona la opcion Pago a Instituciones o Empresas > Empresa : PAGOEFECTIVO > Servicios : PAGOEFECTIVO.', text2: 'Ingresa tu código CIP:91256812 y sigue los pasos.'},
                         {payment:'Banbif', text1:'Selecciona la opcion Pagos > Otras instituciones > Otros > Busca por Empresa/Sercivio: PAGOEFECTIVO > Selecciona: PAGOEFECTIVOSOLES', text2: 'Ingresa tu código CIP:91256812 y sigue los pasos.'},
                         {payment:'Scotiabank', text1:'Selecciona la opcion Pago de servicios > EMPRESAS > PAGOEFECTIVO > PAGOEFECTIVOSOLES.', text2: 'Ingresa tu código CIP:91256812 y sigue los pasos.'},
                         {payment:'Banbif', text1:'Selecciona la opcion Pago de servicios > Busca por Empresa > PAGOEFECTIVO > Selecciona la empresa PAGOEFECTIVO.', text2: 'Ingresa tu código CIP:91256812 y sigue los pasos.'},
                         {payment:'FullCarga', text1:'Indica que vas a realizar un pago en la empresa PAGOEFECTIVO', text2: 'Indica el codigo CIP: 9123682 y el importe a pagar en soles', text3: 'Encuentra a FullCarga en Bodegas Farmacias, cambinas de Internet y Locutorios.'},
                         {payment:'WESTERNUNION', text1:'Indica que vas a realizar un pago a la empresa PAGOFECTIVO', text2: 'Ingresa tu código CIP:91256812 y sigue los pasos.'},
                         {payment:'KASNET', text1:'Indica que vas a realizar un pago a la empresa PAGOFECTIVO', text2: 'Ingresa tu código CIP:91256812 y sigue los pasos.'},
           
           
            ]
                

const Instruction = () => (
    <InstructionItem instruction = {instructiondata}/>
)
export default Instruction


