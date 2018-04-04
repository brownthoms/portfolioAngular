import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section4',
  templateUrl: './section4.component.html',
  styleUrls: ['./section4.component.css']
})
export class Section4Component implements OnInit {

    onglet1 = "Accueil";
    onglet2 = "A Propos";
    onglet3 = "Projets";
    onglet4 = "Parcours";
    
  constructor() { }

  ngOnInit() {
  }

}
