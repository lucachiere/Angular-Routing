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
        'Bearer BQCNJHgs3hz9oHMWnyUUe2oNUrs7_H8d2w14b-vYPBZBB0EhPErwqBDM9Euy6CfZYxiN7aYXBXh8ss366NbrGHshSk-XpM7jcMP81ZEnAv-u2SvdrGfJZCWtC7_pDPBV2ZPCs0VBHiUJNozk0umGzKZ1UAgM71hjv3ZH4sKDmagjTRXQmXBzjNt-tQIywKVl6hCD1Aor30ed37X7B32-VQB6k_sJH5k4x7UUaCtnzN4_VaZAJleNeJksqdRro9CFnilwbGn3C12pPLc"'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
}
