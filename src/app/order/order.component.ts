import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {
  defaultPayment : string = 'card';
  defaultDelivery : string = 'delivery';

  form! : FormGroup;
  deliveries = [{
    type: 'delivery',
    text: 'Delivery'
  }, {
    type: 'pickup',
    text: 'Pick Up'
  }];
  payments = [
    {
      type : 'cash',
      text : 'With Cash'
    },
    {
      type : 'card',
      text : 'With Card',
    },
  ];

  ngOnInit(){
    this.form = new FormGroup({
      user : new FormGroup({
        firstname : new FormControl('', [Validators.required]),
        lastname : new FormControl('', [Validators.required]),
        email : new FormControl('', [Validators.required, Validators.email]),
        phone : new FormControl('', [Validators.required, Validators.pattern('[0-9]{10}')]),
      }),
      delivery : new FormGroup({
        todelivery : new FormControl(''),
        adress : new FormControl('', [Validators.required]),
      }),
      payment : new FormGroup({
        topayment : new FormControl(''),
        cardnumber : new FormControl('', [Validators.required]),
      }),
    },);
  }

  formData = {}
  isSubmited : boolean = false;

  onSubmit() : void{
    this.isSubmited = true;
    this.formData = this.form.value;
  }
}
