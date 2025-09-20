import { Component, inject } from '@angular/core';
import { PetService } from '../../services/pet.service';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export default class Dashboard {
  petService = inject(PetService)

  dashboardLink = "/dashboard"
  searchLink = "/dashboard/search"

  petServiceData = this.petService.getAllPets()
}
