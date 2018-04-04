import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    PrenomNom = "THOMAS ARAUJO";
    info = "Développeur en Formation";
    mail = "thomas.araujo87@gmail.com";
    recrutez = "Recrutez moi";
    onglet1 = "Accueil";
    onglet2 = "A Propos";
    onglet3 = "Projets";
    onglet4 = "Parcours";
    onglet5 = "Contact";

    // public ngOnInit(){
    //     $(document).ready(function() {
    //         $(".but1").click(function(){
    //     		$(".parc").css("display", "none");
    //     		$(".show").addClass("animated fadeInLeft").html("<div class=\"container-fluid textevoir\"><div>2018-2017 - Actuellement en stage de formation developpeur web chezAformac</div><div>2017/2016 - BTS FED option génie climatique</div><div>2016/2013 - Bac Pro Technicien de Maintenance des Systèmes Energétiques et Climatiques</div></div><div><button class=\"btn btn-dark retour\">Retour</button></div>");
    //     		$(".retour").click(function() {
    //     				$(".show").empty();
    //     				$(".parc").css("display", "block")
    //     		});
    //     	});
    //     	$(".but2").click(function(){
    //     		$(".parc").css("display", "none");
    //     		$(".show").addClass("animated fadeInLeft").html("<div class=\"container-fluid textevoir\"><div>INNODEC - 2 semaines - Opérateur de moussage en Intérim</div><div>SL THERMIQUE - 1 an - Alternant Génie climatique</div><div>ENGIE HOME SERVICES - 7 semaines - Stagiaire Technicien de maintenance énergétique</div><div>DEVAINE SERVICES - 4 semaines - Stagiaire Technicien de maintenance énergétique</div></div><div><button class=\"btn btn-dark retour\">Retour</button></div>");
    //     		$(".retour").click(function() {
    //     				$(".show").empty();
    //     				$(".parc").css("display", "block")
    //     		});
    //     	});
    //     	$(".but3").click(function(){
    //     		$(".parc").css("display", "none");
    //     		$(".show").addClass("animated fadeInLeft").html("<div class=\"container-fluid textevoir\"><div>2016 - Bac Pro Technicien de Maintenance des Systèmes Energétiques et Climatiques</div><div>2015 - BEP Maintenance des Systèmes Energétiques et Climatiques</div><div>2011- Diplôme National du Brevet</div></div<div><button class=\"btn btn-dark retour\">Retour</button></div>")
    //     		$(".retour").click(function() {
    //     				$(".show").empty();
    //     				$(".parc").css("display", "block")
    //     		});
    //     	});
    //
    //     });
    // }

}
