import { ActionsUnion, ActionTypes } from './actions';
import { Product } from '../product/product.component';


export interface AppState {
  cart: Array<Product>;
  items: Array<Product>;
} 
export const initialState :AppState = {
  items: [],
  cart: []
};

export function ShopReducer(state = initialState, action: ActionsUnion) {
  switch (action.type) {
    case ActionTypes.LoadSuccess:
      return {
        ...state,
        items: [...action.payload]
      };

    case ActionTypes.Add:
      return {
        ...state,
        cart: [...state.cart, action.payload]
      };

    case ActionTypes.Remove:
      return {
        ...state,
        cart: [...state.cart.filter(item => item.name !== action.payload.name)]
      };

    default:
      return state;
  }
}