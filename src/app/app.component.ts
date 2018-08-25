import {Component, OnInit} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Web3Service} from './web3.service';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  myForm: FormGroup;

  items: BehaviorSubject<any> = new BehaviorSubject<any>([]);

  constructor(
    private web3service: Web3Service,
    private fb: FormBuilder
  ) {
    this.web3service.initProvider();
  }

  ngOnInit() {
    this.web3service.setValue('duppa', 2);

    const stringVal = new FormControl('');
    const numericVal = new FormControl('');
    this.myForm = new FormGroup({
      stringVal,
      numericVal
    });

    this.readVals();
  }

  submit() {
    console.log('submit', this.myForm);

    this.web3service.setValue(this.myForm.value.stringVal, this.myForm.value.numericVal)
      .then((res) => {
        console.log('val set res', res);
        this.readVals();
      });
  }

  get stringVal() {
    console.log('myForm', this.myForm.get('stringVal'));
    return this.myForm.get('stringVal');
  }

  get numericVal() {
    return this.myForm.get('numericVal');
  }

  private readVals() {
    this.web3service.readAll()
      .then(res => {
        console.log('read vals', res);
        this.items.next(res);
      });
  }
}
