import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment'; // TODO: acortar las urls
import { Pet } from '../../interfaces/pet.model'
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PetService {
  private http = inject(HttpClient)

  getAllPets(): Observable<Pet[]> {
    return this.http.get<Pet[]>(`${environment.apiPetsUrl}/pets`)
      .pipe(
        catchError((error => {
          console.error('ha ocurrido un error en la llamada' , error)
          return throwError(() => new Error('No se pudieron recuperar las mascotas'))
        }))
      )
  }
}

// https://github.com/ClaseRobot/country-spa/blob/main/src/app/country/pages/by-capital-page/by-capital-page.component.ts
