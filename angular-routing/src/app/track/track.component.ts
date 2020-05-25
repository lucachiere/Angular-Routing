import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Unit } from './unit.model';
import { SpotifyService } from '../spotify.service';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {
  //Osserva gli eventi sulla route tracks, restituisce la ParamMap che contiene tutti i
  //parametri passati all’url
  routeObs: Observable<ParamMap>;
  spotifyServiceObs: Observable<Object>;
  track : any; //Qui salverò la traccia selezionata
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
  //Usiamo la dependency injection per farci mandare i moduli del routing e dello
  //SpotifyService
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: SpotifyService,
    private location: Location ) { }


  ngOnInit(): void {
    //Ottengo l'observable che notifica le informazioni sulla route attiva
    this.routeObs = this.route.paramMap;
    this.routeObs.subscribe(this.getRouterParam);
  }

  //Ogni volta che viene invocata la route tracks/:id, l'observable richiama questo metodo
  getRouterParam = (params: ParamMap) =>
  {
    let trackId = params.get('id'); //Ottengo l'id dai parametri
    console.log (trackId); //Stampo su console
    //spotifyServiceObs va dichiarato
    this.spotifyServiceObs = this.service.getTrack(trackId) ;
    this.spotifyServiceObs.subscribe((data)=>this.track = data)
  }

  back() : void
  {
    this.location.back();
  }


}
