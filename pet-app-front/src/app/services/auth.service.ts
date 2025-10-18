import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable, of, throwError } from "rxjs";
import { delay } from 'rxjs/operators'


interface AuthResponse {
  token: string;
  user: { id: number; email: string; name: string }
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private http = inject(HttpClient)
  private apiUrl = 'https://api.tudominio.com/auth'; // 👈 URL real del backend

  // Credenciales MOCK (Temporales, solo para simular un inicio de sesión exitoso)
  private readonly MOCK_EMAIL = 'test@example.com';
  private readonly MOCK_PASSWORD = 'password123';

  // ------------------------------------------------------------------
  // 1. Método para el MOCK (PRUEBAS INICIALES)
  // ------------------------------------------------------------------

  loginMock(email: string, password: string): Observable<AuthResponse>{
    if(email === this.MOCK_EMAIL && password === this.MOCK_PASSWORD) {
      // ✅ Simula el éxito: Retorna un Observable con datos de respuesta
      return of({
        token: 'mock-jwt-token-12345',
        user: { id: 1, email: this.MOCK_EMAIL, name: 'Usuario Mock'}
      }).pipe(
        delay(1000) // Simula 1 segundo de latencia de red
      );
    } else {
      // ❌ Simula un error: Retorna un Observable de error (código 401)
      return throwError(() => ({
        status: 401,
        message: 'Credenciales invalidas (Mock)'
      }))
    }
  }

  // ------------------------------------------------------------------
  // 2. Método para la LÓGICA REAL (Futuro)
  // ------------------------------------------------------------------

  
}