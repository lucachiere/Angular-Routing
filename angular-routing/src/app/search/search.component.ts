import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Unit } from './unit.model';
import { Observable } from 'rxjs';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent  {
  query: string;
  title = 'first-routed-app';
  obsTrack: Observable<Object>;
  results: any;
  // faccio iniettare lo spotify service e faccio una ricerca
  constructor(public spotify: SpotifyService) {

  }
  postObserver : Observable<Object>;
  postData : Object;

  addUnit (newUnit: HTMLInputElement, newCost: HTMLInputElement, newHitSpeed: HTMLInputElement): boolean {
      let newData = new Unit(newUnit.value, newCost.value, newHitSpeed.value);
      let headers =  {headers: new HttpHeaders().set('Content-Type', 'application/json')};
      //this.postObserver = this.http.post('https://3000-acb13a3a-bd01-4915-87cb-626d26b7ea44.ws-eu01.gitpod.io/songs', JSON.stringify(newData),headers)

      //Meglio così ma da verificare
      //this.postObserver = this.http.post('http://localhost:3000/users', newData);
      this.postObserver.subscribe(data => this.postData = data);
      return false;
  }
  submit(query: HTMLInputElement): void {

    if (!query.value) {
      return;
    }
    this.query = query.value;
    this.obsTrack = this.spotify.searchTrack(this.query);
    this.obsTrack.subscribe((data) => { this.results = data; console.log(this.results) });
  }

  renderResults(res: any): void {
    this.results = null;
    if (res && res.tracks && res.tracks.items) {
      this.results = res.tracks.items;
    }
  }

}
