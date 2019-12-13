import { Component, OnInit } from "@angular/core";
import { Product } from "../product/product.component";
import { select, Store } from "@ngrx/store";
import { GetItems } from "../store/actions";
import { cartState } from "../store/selectors";
import { AppState } from '../store/reducer';
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  items: Product[] = [];
  constructor(private store: Store<AppState>) {
    store.pipe(select(cartState)).subscribe(data =>{  this.items = data.items });
  }

  ngOnInit() {
    this.store.dispatch(new GetItems());
  }
}
