import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/app.service.data';

@Component({
  selector: 'my-medecins',
  templateUrl: 'app.medecins.html',
  styleUrls: ['app.medecins.css'],
})
export class MedecinsComponent {
  nomMedecin: string = '';
  medecin: any;
  departement:string ="";
  tel:string = "";
  spe:string = "";
  id : any;
  lesMedecins: any;
  lesRapports : any;
  estCacheMenu : boolean = true;
  constructor(private dataService: DataService,private router : Router) {}

  charger(): void {
    this.lesMedecins = this.dataService.chargerMedecins(this.nomMedecin).subscribe(
      (data) => {
        this.lesMedecins = data;
      },
      (error) => {
        this.lesMedecins = 'Erreur';
        this.estCacheMenu = true;
      }
    );
  }

  derniersRapports(idMedecin : number): void {
    this.lesRapports = this.dataService.dernierRapport(idMedecin);
    console.log(idMedecin)
  }
  majMedecin(): void {
    // A compléter
  }

  selectionner(med: any): void {
    this.estCacheMenu = false;
    this.medecin = med.nom;
    this.departement = med.departement;
    this.tel = med.tel;
    this.spe = med.specialitecomplementaire;
    this.id = med.id;
  }
}
