import { Component, OnInit } from '@angular/core';
import { WebsocketService } from './websocket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'projectsio';

  constructor(private websocketservice : WebsocketService){

  }

  ngOnInit(){
    this.websocketservice.listen('test').subscribe((data) => {
      console.log(data)
    })
  }
}
