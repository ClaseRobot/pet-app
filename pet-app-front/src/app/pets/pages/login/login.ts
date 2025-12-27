import { Component, inject } from '@angular/core';
import { Router } from '@angular/router'
import { JsonPipe } from '@angular/common';
import { FormBuilder, FormControl, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms'
import { FormUtils } from '../../../utils/form-utils';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export default class Login {
  title = 'Login page buenarda'

  private router = inject(Router)
  private fb = inject(FormBuilder)

  private authService = inject(AuthService)
  loginError = false;

  formUtils = FormUtils;

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.minLength(3)]],
    password: ['', [Validators.required, Validators.minLength(4)]]
  })

  get email() {
    return this.loginForm.get('email')
  }

  get password() {
    return this.loginForm.get('password')
  }


  loginUser() {
    this.router.navigate(['/home'])
  }

  onSubmit() {
    console.log(this.loginForm) // revisar que al hacer click en sign in sin haber escrito algo no lo envia
    this.loginForm.markAllAsTouched();
    if(this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return
    }

    const { email, password } = this.loginForm.value
    
    console.log('Formulario valido. Datos: ', this.loginForm.value)
    
    this.authService.login(email, password).subscribe({
      next: (response) => {
        this.loginError = false
        console.log('Inicio de sesion exitoso: ', response)
        // Aquí iría: this.tokenService.saveToken(response.token);
        this.router.navigate(['/home'])
      },
      error: (error) => {
        this.loginError = true
        console.error('Error de login', error)
        this.loginForm.controls['password'].reset()
      }
    })
  }
}
