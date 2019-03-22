import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {ToastrService } from 'ngx-toastr';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private productService: AuthService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.productService.getDocuments();
    this.resetForm();//talvez falte codigo aqui
  }


  onSubmit(productForm: NgForm){
    if(productForm.value.$key == null)
    this.productService.insertDocument(productForm.value)
    
    else
    this.productService.updateProduct(productForm.value);

    this.resetForm(productForm);
    this.toastr.success('Operacion Exitosa!');

  }


  resetForm(productForm?: NgForm)
  {
    if(productForm != null)
    productForm.reset();
    this.productService.selectedProduct = new Product();
  }

}
