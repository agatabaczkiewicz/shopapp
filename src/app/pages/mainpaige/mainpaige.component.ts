import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { RestService } from 'src/app/rest.service';
import { Iproducts } from 'src/app/data/iproducts';
import { PRODUCTS } from 'src/app/mocks/mock-product';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-mainpaige',
  templateUrl: './mainpaige.component.html',
  styleUrls: ['./mainpaige.component.css']
})
export class MainpaigeComponent implements OnInit {

  public products: any[] = [];

  constructor(private toastr: ToastrService,
    private restService: RestService,
    private productService: ProductService
  ) { }


  ngOnInit(): void {
    // this.getProductsFromServer();
    // console.log(this.products)

  }

  ngOnChanges():void {
    // this.getProductsFromServer();
    // console.log(this.products)
  }

  getProductsFromServer() {
    this.restService.getProductsRequest()
      .subscribe(
        response => {
          if (response != null) {
            console.log(response);
            //this.products = response;
            this.productService.saveProductsFromResponse(response);
          }
          else {
            this.toastr.error('Wrong');
          }
        },
        (error) => {              //Error callback
          this.toastr.error('Wrong data!');

        }
      )



  }

}
