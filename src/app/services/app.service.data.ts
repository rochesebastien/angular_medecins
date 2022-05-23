import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Injectable()
 export class DataService {
    // private  urlDomaine :  string = "localhost/Année 2/Semestre 2/API/api/visiteur";
    private  urlDomaine :  string = "http://restgsb.wikiwebagnes.fr/restGSB";
     constructor(private http: HttpClient) {}
    public connexion( loginIn : string, mdpIn : string ){
         let url :string = this.urlDomaine + "/connexion?login=" + loginIn + "&mdp=" + mdpIn;
        let req = this.http.get(url);
         return req;
     }
     public chargerMedecins(nomMedecin : string){
      let url :string = this.urlDomaine + "/medecins?nom="+nomMedecin;
        let req = this.http.get(url);
         return req;
    }

    public dernierRapport(idMedecin : number){
      let url :string = this.urlDomaine + "/rapport?id="+idMedecin;
        let req = this.http.get(url);
         return req;
    }
}
