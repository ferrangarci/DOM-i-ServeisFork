import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-doc',
  imports: [],
  templateUrl: './doc.html',
  styleUrl: './doc.css',
})
export class Doc implements OnInit{

  url = {webActual:  document.location.href};


  ngOnInit() {
    //this.url = document.location.href;

  }

}
