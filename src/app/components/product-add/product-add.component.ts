import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,FormControl,Validators} from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  productAddForm:FormGroup;
  constructor(private formBuilder:FormBuilder,private productServic:ProductService,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createProductAddForm();
  }


  createProductAddForm(){
      this.productAddForm=this.formBuilder.group({
        productName:["",Validators.required],
        unitPrice:["",Validators.required],
        unitsInStock:["",Validators.required],
        categoryId:["",Validators.required]
      })
  }

  add(){
    if(this.productAddForm.valid){
      let productModel=Object.assign({},this.productAddForm.value)
      this.productServic.add(productModel).subscribe(response=>{
        console.log(response);
        this.toastrService.success(response.message,"Başarılı")
      },responseError=>{
        console.log(responseError)
        this.toastrService.error(responseError.error)
      });
      
    }
    else{
        this.toastrService.error("Formunuz eksik","Dikkat")
    }

  }

}