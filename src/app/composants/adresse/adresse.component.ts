import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-adresse',
  templateUrl: './adresse.component.html',
  styleUrls: ['./adresse.component.css']
})
export class AdresseComponent implements OnInit {
  zipCode : any;
  ville: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe(res=>{
      this.zipCode = res.get('zipCode');
      this.ville = res.get('ville');
      console.log(this.zipCode + ' '+this.ville);

    })
  }

}
