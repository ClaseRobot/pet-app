import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment'; // TODO: acortar las urls

@Injectable({ providedIn: 'root' })
export class PetService {
  private http = inject(HttpClient)

  listOfPets = signal<any>([])

  constructor() {
    this.getAllPets()
  }

  getAllPets() {
    this.http.get(`${environment.apiPetsUrl}/pets`).subscribe((resp) => {
      console.log(resp)
      // this.listOfPets.set(resp)
    })
  }
}
