import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo';

  data: any;
  isHome: boolean = true;

  update(d: any){
    this.data = d;
  }

  removeHome(){
    this.isHome = !this.isHome;
  }
}
