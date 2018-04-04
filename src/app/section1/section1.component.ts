import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.css']
})
export class Section1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  bjr = "Bonjour !";
  texte1 = "Je m'apelle Thomas, j'ai 20 ans. Je suis actuellement en formartion Développeur Web chez Aformac à Limoges. Cette formation a pour but de nous faire obtenir un titre professionel de niveau BTS.";
  texte2 = "Au cours de cette formation nous apprenons différents languages de programation :";
  techno = "HTML5, CSS3, Sass, Bootstrap, Javascript, Jquery, PHP7, MySQL, Wordpress et Angular5"
  texte3 = "Le domaine du developpement web et un domaine qui m'attire beaucoup. Mon objectif et de décrocher mon titre professionel et grace a cette formation est de devenir développeur front-end et utiliser principalment le javascript.";
  onglet1 = "Accueil";
  onglet3 = "Projets";
  onglet4 = "Parcours";
  onglet5 = "Contact";
}
