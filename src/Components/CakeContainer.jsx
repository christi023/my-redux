import { connect } from 'react-redux';
// action
import { buyCake } from '../actions/cakeActions';

function CakeContainer(props) {
  return (
    <div>
      <h2>Number of Cakes - {props.numOfCakes}</h2>
      <button onClick={props.buyCake}>Buy cake</button>
    </div>
  );
}

// step number 1
const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

// step 2
const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => {
      dispatch(buyCake());
    },
  };
};

// step 3
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
