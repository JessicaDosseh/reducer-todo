import React from 'react';

export const initialState = {
      id: 0,
      item: 'Add Todo Items!', 
      completed: false,
}; 

export const todoReducer = (state, action) => {
  switch(action.type) {
    default: 
    return state; 
  }; 
};