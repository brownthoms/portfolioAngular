import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.css']
})
export class Section2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title = "Mes projets";
  onglet1 = "Accueil";
  onglet2 = "A Propos";
  onglet4 = "Parcours";
  onglet5 = "Contact";
}
