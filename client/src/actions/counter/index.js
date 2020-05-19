import { INCREMENT, DECREMENT } from '../types';

// These are our action creators are functions that just returns an object
// The object that an action creators should MUST HAVE a type property.

export const increment = () => {
  return {
    type: INCREMENT
  };
};


export const decrement = () => {
  return {
    type: DECREMENT
  };
};
