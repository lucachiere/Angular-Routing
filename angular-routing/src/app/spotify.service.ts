import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Dichiaro che il servizio è iniettabile agli altri componenti a partire dal componente root
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
   //url per oauth: https://developer.spotify.com/console/get-search-item/
  //Ottengo il modulo HttpClient
  constructor(private http: HttpClient) { }

  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer curl -X "GET" "https://api.spotify.com/v1/search?q=eravamo%20re&type=track" -H "Accept: application/json" -H "Content-Type: application/json" -H "Authorization: Bearer BQBj8edZc_8DXNnMZz39S3rA21Oq96GhfGqbTk3JiUt8XhI9EtvDChwoBX_gUDU8x4Fj6J5jFQS4AtTJetrY-V0aGKNYmWXe01EOAQ96sqssRNTlQ94upjOUrPBiY-EGOXNqTom_LJiI2GIRbDu-sy1JTys9vNY9Jzm-eU__YoNc_wy82bxVdp8jm1jMWGOprVpm_MENxhDOCpVeAhP5-qDYi_wCoxY2KcSo7nH-QnRk5dllqq0wj5Q8adWqC3gGIEx0tMg57ZwjEos"'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
}
