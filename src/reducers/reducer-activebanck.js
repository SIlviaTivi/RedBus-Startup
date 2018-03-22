
 export default function (state = {payment:'BCP',link:'assets/img/logo/bcp.png', intbi1:'Selecciona la opción Pago de servicios > EMPRESAS > PAGOEFECTIVO > SOLES', intbi2:'Ingresa tu código CIP: 9125682 y sigue los pasos'}, action){
    
    switch (action.type) {
      case 'BANK_SELECTED':
      return action.payload;
    }
    return state;
  
  }

 