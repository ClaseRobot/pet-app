import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class UserService {
  private http = inject(HttpClient)

  user = signal<any>([]) // tipar

  constructor() {
    this.getUser()
  }

  getUser() {
    this.http.get(`${environment.apiUserUrl}/user`).subscribe((resp) => {
      console.log(resp)
      // this.user.set(resp)
    })
  }
}
