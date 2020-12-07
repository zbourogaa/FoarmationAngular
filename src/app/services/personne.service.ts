import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Personne } from '../interfaces/personne';


@Injectable({
  providedIn: 'root'
})
export class PersonneService {
  url: string = "http://localhost:5555/personnes/"
  constructor(private http: HttpClient) { }
  getAll() {
    return this.http.get<Array<Personne>>(this.url);
  }
  addPerson(p:Personne){
    return this.http.post(this.url,p);
  }
  deletePerson(id: number) : Observable<any> {
    return this.http.delete(this.url + id);
  }
  getPerson(id: number) {
    return this.http.get(this.url + id);
  }

  updatePerson(id: number, p: Personne) {
    return this.http.put(this.url + id, p);
  }
}
