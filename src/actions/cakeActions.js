import { BUY_CAKE } from '../constants/cakeTypes';

export const buyCake = (number = 1) => {
  return {
    type: BUY_CAKE,
    payload: number, //send additional info to the reducer
  };
};
