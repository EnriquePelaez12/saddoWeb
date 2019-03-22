import { AuthService } from './../../../services/auth.service';
import { Product } from './../../../models/product';
import { Component, OnInit } from '@angular/core';

//service
import{ToastrService } from 'ngx-toastr'

//Clase del protuct

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  documentList: Product[];
  constructor(
    private productService: AuthService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.productService.getDocuments()
    .snapshotChanges()
    .subscribe(item=>{       
      //this.toastr.success('Operacion Exitosa!', 'Documento Agregado');

      this.documentList = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x ["$key"] = element.key;
        this.documentList.push(x as Product);
        
      })
    })

  }
  onEdit(product: Product){
    this.productService.selectedProduct = Object.assign({}, product);

  }
  onDelete($key: string){
  
    if(confirm('¿Esta seguro de Eliminarlo?')){
    this.productService.deleteProduct($key);
    this.toastr.success('Operacion Exitosa!', 'Producto Eliminado');
    }
  }

}
