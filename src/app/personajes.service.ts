import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs';

export interface PersonajesResult {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  },
  results: Array<Personaje>
}

export interface Personaje {
  id: number;
  name: string;
  species: string;
  image: string;
  status: string;
  gender: string;
}

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {
  private readonly http = inject(HttpClient);

  constructor() { }

  cargar(pagina: number = 1) {
    return this.http.get<PersonajesResult>(
      `https://rickandmortyapi.com/api/character?page=${pagina}`
    ).pipe(
      map((respuesta) => respuesta.results)
    );
  }

}
