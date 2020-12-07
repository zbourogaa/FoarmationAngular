import { AfterContentInit, Component, ContentChild, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FilsComponent } from '../fils/fils.component';
import { TitreComponent } from '../titre/titre.component';

@Component({
  selector: 'app-pere',
  templateUrl: './pere.component.html',
  styleUrls: ['./pere.component.css']
})
export class PereComponent implements OnInit/*,AfterContentInit*/ {
// @ViewChild(FilsComponent,{static: false}) fils: FilsComponent;
  //@ViewChildren(FilsComponent) fils: QueryList<FilsComponent>;
  @ContentChild(TitreComponent, { static: false }) titre:TitreComponent;
  
  tab: Array<string> = ['premier', 'deuxieme', 'troisieme'];
    nord ='Lille';
    sud='Marseille';
    capitale ='Paris'

  constructor() { }

  ngOnInit(): void {
  }
  
//  ngAfterContentInit(): void {
//console.log(this.titre.valeur);
//}
  ngAfterViewInit(): void {
    console.log(this.titre.valeur);
     // this.fils.forEach(elt=>console.log(elt));
    //forEach(elt=>console.log(elt));
    //console.log(this.fils.ordre);
  }

}
