import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  constructor(private productService:ProductService) { }
  product:Product[]=[];

  ngOnInit(): void {
    //this.productService.saveProduct();
    this.productService.fetchProducts().subscribe(data=>{
      this.product=data;
    })

  }

  toCart(index:number){
    this.productService.addToCart(index);
  }
}
