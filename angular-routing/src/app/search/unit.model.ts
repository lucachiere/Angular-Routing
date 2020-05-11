
export class Unit
{
  Titolo : string;
  Artista : string;
  Album: string;

  constructor(public titolo: string, public artista: string, public album: string) {
    this.Titolo = titolo;
    this.Artista = artista;
    this.Album = album;
	}
}
