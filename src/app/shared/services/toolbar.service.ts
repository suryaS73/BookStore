import { Injectable } from '@angular/core';
import { ToolbarComponent } from '../components/toolbar/toolbar.component';

@Injectable({
  providedIn: 'root'
})
export class ToolbarService {

  constructor(
  
  ) {
    console.log("Toolbar object created & status is :"+this.status);
   }

  status :boolean=false;
  getStatus(){
    // this.toolbar.user=true;s
    console.log("Toolbar status : "+this.status);
    return this.status;
  }
}
