import { Component, OnInit,  } from '@angular/core';
import { Router } from '@angular/router';
import { Personne } from 'src/app/interfaces/personne';
import { PersonneService } from 'src/app/services/personne.service';


@Component({
  selector: 'app-personnes',
  templateUrl: './personnes.component.html',
  styleUrls: ['./personnes.component.css']
})
export class PersonnesComponent implements OnInit {
  personnemodif: Personne;

  constructor(private personneService: PersonneService,private router: Router) { }
 
  personne: Personne = {};
  personnes: Array <Personne> = new Array <Personne>();


ngOnInit(): void {
    this.reloadData();
  }

reloadData(){
    this.personneService.getAll().subscribe(res => {
      this.personnes = res;
      });
  }

  ajouterPersonne(){
    this.personneService.addPerson(this.personne).subscribe(res => {
      this.reloadData();
    });

  }

  supprimerPersonne(id: number) {
    this.personneService.deletePerson(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
  updatePersonne(id: number){
    
    this.router.navigate(['update', id]);
  }

  //modifierPersonne(id: number) {
    //this.submitted= false;
    //this.personneService.updatePersonne(this.id,this.n)
    //console.log('La personne a modifier est : '+id);
    //this.personneService.getPersonneById(id);
    //console.log('La personne récupéré est: '+ this.personneService.getPersonneById(id));
    //console.log('Le nom de la personne récupéré est : '+ this.personne.nom);
    //console.log('Le prenom de la personne récupéré est : '+this.personne.prenom);
  //}
}
