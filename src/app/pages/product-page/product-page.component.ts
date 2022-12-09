import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  title = 'angular course';
  // products$: Observable<IProduct[]>;
  loading = false;
  term = '';

  constructor(
    public productsService: ProductsService,
    public modalService: ModalService
  ) {}

  ngOnInit() {
    this.loading = true;
    // this.products$ = this.productsService.getAllProducts().pipe(
    //   tap(() => this.loading = false)
    // );
    this.productsService.getAllProducts().subscribe((products) => {
      // this.products = products;
      this.loading = false;
    });
  }
}
