import React from 'react';
// useDispatch and useSelector
import { useSelector, useDispatch } from 'react-redux';
import { buyCake } from '../actions/cakeActions';

export default function HooksCakeContainer() {
  const numOfCakes = useSelector((state) => state.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Num of Cakes - {numOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy cake</button>
    </div>
  );
}
