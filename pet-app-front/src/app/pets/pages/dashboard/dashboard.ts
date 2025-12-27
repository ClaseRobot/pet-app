import { Component, inject, signal, WritableSignal } from '@angular/core';
import { PetService } from '../../services/pet.service';
import { Pet } from '../../../interfaces/pet.model'

// Definicion de interfaces ( TODO: llevar a otro archivo )
// interface Pet {
//   id: number;
//   name: string;
//   species: 'Dog' | 'Cat';
//   breed: string;
//   age: number;
//   nextAppointment: string;
//   appointmentDate: Date;
// }

interface Tip {
  title: string;
  content: string;
  // category: 'Alimentacion' | 'Vacunas' | 'Cuidado';
  category: string;
  colorClass: string;
}

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export default class Dashboard {
  title = 'Dashboard section'

  private petService = inject(PetService)

  activePet: WritableSignal<Pet | null> = signal(null);
  dailyTips: WritableSignal<Tip[]> = signal([]);
  isLoading: WritableSignal<boolean> = signal(true);

  //TODO: Con RxResource ( con Observables )
  // version tradicional
  ngOnInit(): void {
    console.log('onInit ejecutado');
    this.petService.getAllPets().subscribe({
      next: (pets: Pet[]) => {
        if(pets && pets.length > 0) {
          console.log(pets)
          this.activePet.set(pets[0])
          console.log(this.activePet())
          this.loadDailyTips(pets[0].id)
        } else {
          this.isLoading.set(false)
          console.warn('No se encontraron mascotas')
        }
      },
      error: (error) => {
        this.isLoading.set(false)
        console.error('Error al cargar mascotas: ', error)
      }
    })
  }

  loadDailyTips(petId: number): void {
    // llamada al servicio de tips
    const tipsData = [
      { title: 'Hidratación en Días Calurosos', content: 'Asegúrate de cambiar el agua fresca dos veces al día.', category: 'Cuidado', colorClass: 'green-tip' },
      { title: 'Próxima Desparasitación', content: 'El recordatorio de desparasitación es en 5 días. Prepara tu cita.', category: 'Vacunas', colorClass: 'orange-tip' },
      { title: 'Evita Alimentos Tóxicos', content: 'Recordatorio: el chocolate y el aguacate son muy peligrosos para tu perro.', category: 'Alimentacion', colorClass: 'blue-tip' },
    ]

    this.dailyTips.set(tipsData);
    this.isLoading.set(false)
  }
}
