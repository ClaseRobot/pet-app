import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { PetService } from '../../pets/services/pet.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './layout.html',
  styleUrl: './layout.css'
})
export default class Layout {
  title = 'layout'

  petService = inject(PetService)
  userService = inject(UserService)

  dashboardLink = "/home/dashboard"
  searchLink = "/home/search"
  inboxLink = "/home/inbox"
  usersLink = "/home/users"
  productsLink = "/home/products"
  signInLink = "/login"
  signUpLink = "/login"

  petServiceData = this.petService.getAllPets()
  userServiceData = this.userService.getUser()

}
