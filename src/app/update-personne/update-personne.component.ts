import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Personne } from '../classes/personne';
import { PersonneService } from '../services/personne.service';

@Component({
  selector: 'app-update-personne',
  templateUrl: './update-personne.component.html',
  styleUrls: ['./update-personne.component.css']
})
export class UpdatePersonneComponent implements OnInit {
 

  constructor(private route: ActivatedRoute, private router: Router, private personneService: PersonneService) { }
  id: number;
  personne: any;
  ngOnInit() {
    

    this.id = this.route.snapshot.params['id'];

    this.personneService.getPerson(this.id)
      .subscribe(data => {
        console.log(data)
        this.personne = data;
        
      }, error => console.log(error));
  }
  
  updatePersonne() {
    this.personneService.updatePerson(this.id, this.personne)
      .subscribe(data => console.log(data), error => console.log(error));
    this.router.navigateByUrl("personne");
  }

  onSubmit() {
    this.updatePersonne();
  }


}
