import { connect } from 'react-redux';
// action
import { buyIceCream } from '../actions/iceCreamActions';

function IceCreamContainer(props) {
  return (
    <div>
      <h2>Number of Ice Creams - {props.numOfIceCreams}</h2>
      <button onClick={props.buyIceCream}>Buy IceCream</button>
    </div>
  );
}

// step number 1
const mapStateToProps = (state) => {
  return {
    numOfIceCreams: state.iceCream.numOfIceCreams,
  };
};

// step 2
const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => {
      dispatch(buyIceCream());
    },
  };
};

// step 3
export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
