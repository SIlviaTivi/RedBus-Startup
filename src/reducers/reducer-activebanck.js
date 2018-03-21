export default function (state = {
    payment:'BCP',link:'assets/img/logo/bcp.png', text:'Agentes y Bodegas Agencias', instruction:'Selecciona la opcion Pago de servicios > EMPRESAS > PAGOEFECTIVO > PAGOEFECTIVOSOLES.', instruction2: 'Ingresa tu código CIP:91256812 y sigue los pasos.'
    
  } , action){
    
    switch (action.type) {
      case 'BANK_SELECTED':
      return action.payload;
    }
    return state;
  
  }
  