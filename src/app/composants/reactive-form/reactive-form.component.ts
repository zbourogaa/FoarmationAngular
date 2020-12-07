import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder,FormArray } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
import { Personne } from 'src/app/classes/personne';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  personnes: any = [];
  nomPattern = "^[A-Z][a-z]{2,10}";
  personneForm = this.fb.group({
    id: [null],
    nom: ['doe'],
    prenom: ['', [Validators.required, Validators.minLength(2)]],
    adresse: this.fb.group({
      rue: [''],
      ville: [''],
      codePostal: ['']
    }), 
    sports: this.fb.array([this.fb.control('') ])
  });
  /*
  personneForm = new FormGroup({
    id: new FormControl('', Validators.required),
    nom: new FormControl('', [Validators.required, Validators.pattern(this.nomPattern)]),
    prenom: new FormControl('', [Validators.required, this.checkPrenomValidator]),
    adresse: new FormGroup({
      rue: new FormControl(''),
      ville: new FormControl(''),
      codePostal: new FormControl('')
      })
  });
*/
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    //this.personneForm.setValue({nom:'toto',prenom: 'bobo',id:1})
  }
  //  supprimerPersonne(personne: Personne) {
  //    const index: number = this.personnes.indexOf(personne);
  //    this.personnes.splice(index, 1);
  //  }
  afficherTout() {
    this.personnes.push({ ...this.personneForm.value });
    console.log(this.personneForm.value);
  }

  ajouterSport() {
    this.sports.push(this.fb.control(''));
    }
    supprimerSport(i: number) {
    
      this.sports.removeAt(i);
    }
  checkPrenomValidator(control: FormControl) {
    const str: string = control.value;
    if (str[0] >= 'A' && str[0] <= 'Z') {
      return null;
    } else {
      return { erreur: 'Prenom non valide' };
    }
  }
  get nom() {
    return this.personneForm.get('nom');
  }
  get id() {
    return this.personneForm.get('id');
  }
  get prenom() {
    return this.personneForm.get('prenom');
  }
  get sports() {
    return this.personneForm.get('sports') as FormArray;
  }  
}
