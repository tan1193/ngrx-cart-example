import { Component, OnInit } from "@angular/core";
import { Product } from "../product/product.component";
import { Store, select } from "@ngrx/store";
import { cartState } from "../store/selectors";
import { AppState } from '../store/reducer';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  constructor(private store: Store<AppState>) {
    store.pipe(select(cartState)).subscribe(data => {
      this.cart = data.cart;
    });
  }
  cart: Product[] = [];
  ngOnInit() {}
}
