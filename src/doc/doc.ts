import {Component, OnInit} from '@angular/core';
import {yellowSubmarine} from './yellowSubmarine';
import {changeSize} from './changeSize';
import {countWords} from './countWords'
import {imatge} from './imatge'


@Component({
  selector: 'app-doc',
  imports: [],
  templateUrl: './doc.html',
  styleUrl: './doc.css',
})
export class Doc implements OnInit{

  url = {webActual:  document.location.href};


  ngOnInit() {
    yellowSubmarine('amarillo')
    changeSize('tamany')
    countWords('contar_paraules');
    imatge("imatge")


  }

  protected readonly countWords = countWords;
}
