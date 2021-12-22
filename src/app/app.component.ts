import {Component, OnInit} from '@angular/core';
import {FormControl,Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'untitled5';
  fnControll: FormControl = new FormControl;
  lnControll: FormControl = new FormControl;
  saControll: FormControl = new FormControl;
  sa2Controll: FormControl = new FormControl;
  cControll: FormControl = new FormControl;
  spControll: FormControl = new FormControl;
  pzControll: FormControl = new FormControl;
  pControll: FormControl = new FormControl;
  eControll: FormControl = new FormControl;
  ngOnInit(){
    this.fnControll = new FormControl('',[Validators.required]);
    this.lnControll = new FormControl('',[Validators.required]);
    this.saControll = new FormControl('',[Validators.required]);
    this.sa2Controll = new FormControl('',[Validators.required]);
    this.cControll = new FormControl('',[Validators.required]);
    this.spControll = new FormControl('',[Validators.required]);
    this.pzControll = new FormControl('',[Validators.required]);
    this.pControll = new FormControl('',[Validators.required,Validators.maxLength(13)]);
    this.eControll = new FormControl('');

    this.pControll.statusChanges.subscribe((status) =>console.log(status));
  }
  addUser(value: string, value2: string, value3: string, value4: string, value5: string, value6: string, value7: string, value8: string, value9: string) {
    console.log(value,value2,value3,value4,value5,value6,value7,value8,value9);
  }
}
