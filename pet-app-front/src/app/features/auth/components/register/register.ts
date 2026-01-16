import { Component, inject, signal } from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { Router, RouterLink } from "@angular/router";
import { AuthService } from "../../../../services/auth.service";

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './register.html'
})
export default class RegisterComponent {
  private fb = inject(FormBuilder)
  private authService = inject(AuthService) // Cambiar ubicacion de AuthService cuando ordene las carpetas por features
  private router = inject(Router)

  errorMessage = signal<string | null>(null);
  isLoading = signal(false)

  registerForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  onSubmit() {
    if (this.registerForm.invalid) return;

    this.isLoading.set(true)
    this.errorMessage.set(null)

    this.authService.register(this.registerForm.value).subscribe({
      next: () => {
        // Si sale bien lo mando al dashboard
        this.router.navigate(['/home'])
      },
      error: (err) => {
        this.isLoading.set(false)
        this.errorMessage.set(err.error?.message || 'Error al registrarse.')
      }
    })
  }
}