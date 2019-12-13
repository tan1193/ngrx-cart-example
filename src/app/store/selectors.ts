import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "./reducer";
import { Product } from '../product/product.component';

export const cartState = createFeatureSelector<AppState >("shop");


