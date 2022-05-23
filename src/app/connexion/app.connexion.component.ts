import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/app.service.data';

@Component({
  selector: 'my-connexion',
  templateUrl: 'app.connexion.html',
  styleUrls: ['app.connexion.css']
})
export class ConnexionComponent {
  titre : string = "Connexion";
  login : string = "";
  mdp : string = "";
  lblMessage : string = "";
  estCache : boolean = true;
  visiteur:any;

  constructor (private dataService: DataService, private router : Router ){}
    valider():void{
      // Fait la connexion avec le Rest, Login : aribiA | mdp : aaaa
    this.dataService.connexion(this.login,this.mdp)
    .subscribe(
    (data)=>
    {this.visiteur = data
      // Connecté
      this.estCache = true;
      // Renvoie vers l'accueil
      this.router.navigate(['accueil']);
    },
    (error)=>{
      this.estCache = false;
      this.lblMessage = "erreur";
    }
    );
    }
  //   }
  // constructor(private router : Router){

  // }
  }
