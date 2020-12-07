import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Personne } from 'src/app/classes/personne';
@Component({
  selector: 'app-detail-personne',
  templateUrl: './detail-personne.component.html',
  styleUrls: ['./detail-personne.component.css']
})
export class DetailPersonneComponent implements OnInit {
  personne:Personne;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe(res=>{
      
      this.personne.nom = res.get('nom');
      this.personne.prenom = res.get('prenom');
      console.log(this.personne.nom + ' '+this.personne.prenom);

    })
  }

}
