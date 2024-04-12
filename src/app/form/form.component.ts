import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  form! : FormGroup;
  answers = [{
    type: 'yes',
    text: 'Да'
  }, {
    type: 'no',
    text: 'Нет'
  }];

  ngOnInit(){
    this.form = new FormGroup({
      user : new FormGroup({
        email : new FormControl('',[Validators.required, Validators.email]),
        pass : new FormControl('', [Validators.required]),
      }),
      settings : new FormGroup({
        lang : new FormControl(''),
        answ : new FormControl(''),
      }),
    },);
  }

  onSubmit() : void{
    console.log('submit');
    console.log(this.form);

  }
}
