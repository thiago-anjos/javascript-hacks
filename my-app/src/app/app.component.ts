import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  public contentReady:boolean = false;
  
  ngOnInit(){
    this.checkList()
  }

  checkList(){
      setTimeout(() => {
        this.contentReady = true;
      }, 5000);
  }

}
