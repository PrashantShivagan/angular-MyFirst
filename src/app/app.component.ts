import { Component } from '@angular/core';
import { Coursedata } from "./coursedata";
@Component({
  selector: 'my-app',
  template: `
  <h1>My First app</h1>
  <ul *ngFor= "let alldata of CData">
  <li>{{alldata}}</li>
  </ul>
  <hr/>
  <ul *ngFor= "let data of PData">
  <li>{{data}}</li>
  </ul>
  `
})
export class AppComponent  {
  public CData: string[]
  public PData: string[]
  constructor(private data:Coursedata){
    this.CData = this.data.getcoursedata();
    this.PData = this.data.getproductdata();
  }
}