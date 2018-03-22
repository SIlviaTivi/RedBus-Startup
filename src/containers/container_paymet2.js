import { connect } from 'react-redux';
import Payment from '../components/Payment';
import { selectPayment } from '../actions/index';
import { bindActionCreators } from 'redux';

function mapStateToProps(state){
 return { arraybank : state.banks2 }
}



function mapDispatchToProps (dispatch){
  return bindActionCreators({ onArtistClick : selectPayment}, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Payment)