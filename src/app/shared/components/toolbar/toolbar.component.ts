import { Component, Input} from '@angular/core';
// import { ToolbarService } from '../../services/toolbar.service';
import { AuthGoogleService } from 'src/app/auth/auth-google.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent{

 @Input() user:boolean=false;

  constructor(public googleService:AuthGoogleService){
  }


  // getStatus(){

  //   console.log("Toolbar status from Toolbar.ts component :"+this.user);
  //   this.user=this.toolbarService.getStatus();
  // }

  
}
