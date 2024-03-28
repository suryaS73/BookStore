import { Component } from '@angular/core';
import { CounterService } from 'src/app/shared/services/counter.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(public counterService:CounterService){}

  public increaseCounter(){
    this.counterService.incCounter();
  }

  public decreaseCounter(){
    this.counterService.decCounter();
  }
}
