import { Component, OnInit } from '@angular/core';
import { ImportsModule } from './imports';
import { Product } from '@/domain/product';
import { ProductService } from '@/service/productservice';
@Component({
    selector: 'table-single-selection-demo',
    templateUrl: 'table-single-selection-demo.html',
    standalone: true,
    imports: [ImportsModule],
    providers: [ProductService]
})
export class TableSingleSelectionDemo implements OnInit{
    products!: Product[];

    selectedProduct!: Product;

    metaKey: boolean = true;

    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.productService.getProductsMini().then((data) => {
            this.products = data;
        });
    }
}