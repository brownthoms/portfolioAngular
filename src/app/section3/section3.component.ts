import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section3',
  templateUrl: './section3.component.html',
  styleUrls: ['./section3.component.css']
})
export class Section3Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  btnvoir = "Voir";
  title = "Mon parcours";
  part1 = "Formations";
  part2 = "Expériences professionelle";
  part3 = "Diplômes";
  onglet1 = "Accueil";
  onglet2 = "A Propos";
  onglet3 = "Projets";
  onglet5 = "Contact";

}
