import { connect } from 'react-redux';
import IntructionPay from '../components/Introduction-pay';


//Esta funcion representa el enlace de redux con react
function mapStateToProps(state){
  return { dataInstruction : state.activebank }
 }


 export default connect(mapStateToProps)(IntructionPay)
