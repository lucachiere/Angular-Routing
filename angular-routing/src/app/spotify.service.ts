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
        'Bearer BQBNop_LVdE1na1SB7y0GS7NrJCtxK27kg1-7yS1YIWrWlpqm2XH9-8fPkboGG0TqrnODS5V3xG0PiV5vNaSoYxf7bjPfoerXZAfIGmK1_bQPj9wg01K_yz3TrtL9K4y0WfnqgXFEhCMzuIZLCcRqewq9Vydh4nKeII5sN_P5mBvGd0FIpw2-wCAhwHhzMpF6l-XyVO5I2mgimbpNXmy0p-kqQ8kGQl3LzHFjBJu1dHkVNSzQDBc5V6vLwDn3SzuIe6KAqxbh5CXlc8'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
}
