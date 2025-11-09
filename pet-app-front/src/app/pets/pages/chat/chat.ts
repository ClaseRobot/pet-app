import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef, inject, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ChatService } from '../../../services/chat.service';
import { take } from 'rxjs';

// TODO: exportar esta interfaz a otro archivo
interface Message {
  localId?: string; // Id temporal para rastrear el mensaje del usuario
  text: string;
  isPending?: boolean;
  sender: 'user' | 'bot';
  dbId?: string; // Id persistente del backend
}

interface MessageResponse {
  userMessageId: string;

  botMessage: {
    id: string;
    text: string;
    isPending?: false;
    sender: 'bot'
  }
}

@Component({
  selector: 'app-chat',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './chat.html',
  styleUrl: './chat.css'
})
export default class Chat {
  @ViewChild('chatContainer') private chatbotScrollContainer!: ElementRef;

  private fb = inject(FormBuilder)
  private cdr = inject(ChangeDetectorRef)

  private chatService = inject(ChatService)

  messages: Message[] = [
    { localId: this.generateId(), text: '¡Hola! Soy tu asistente. ¿En qué puedo ayudarte hoy?', isPending: false, sender: 'bot'}
  ]

  chatForm: FormGroup = this.fb.group({
    messageInput: ['', [Validators.required, Validators.minLength(5)]]
  })

  get messageInput() {
    return this.chatForm.get('messageInput')
  }

  private generateId(): string {
    return crypto.randomUUID()
  }

  ngAfterViewChecked(): void {
    this.scrollToBottom()
    console.log('ngAfterViewChecked', 'TODO: revisar scroll')
  }

  sendMessage(): void {
    console.log('ID', this.chatForm.get('id'))
    if(this.chatForm.invalid) {
      console.log('Formulario invalido')
    }
    const { messageInput } = this.chatForm.value

    if(messageInput) {
      const userMsg: Message = {
        localId: this.generateId(), 
        text: messageInput, 
        isPending: true,
        sender: 'user'
      }

      console.log('userMsg', userMsg)

      this.messages = [...this.messages, userMsg]

      this.chatForm.reset()

      // TODO: tipar lo que se manda al back
      console.log(messageInput)
      this.chatService.sendMessage(messageInput)
        // .pipe(take(1))
        .subscribe({
            next: (response: MessageResponse) => {
              console.log('response front',response)
              // 3. ✅ Mapeo de la Respuesta y Actualización de la UI
              const { userMessageId, botMessage } = response

              // 3a. Actualizar el mensaje del usuario con el ID persistente
              const index = this.messages.findIndex(m => m.localId === userMsg.localId)
              if(index !== -1) {
                this.messages[index] = {
                  ...this.messages[index],
                  dbId: userMessageId,
                  isPending: false,
                }
              }

              // 3b. Mapear y añadir la respuesta del bot
              const botResponse: Message = {
                localId: botMessage.id,
                text: botMessage.text,
                sender: botMessage.sender,
                dbId: userMessageId,
                isPending: false
              }

            // 3c. Añadir la respuesta del bot al historial
            this.messages = [...this.messages, botResponse]

            // Forzar deteccion de cambios
            this.cdr.detectChanges();
          },
        error: (err) => {
          console.error('Error al obtener la respuesta del bot: ', err)

          const index = this.messages.findIndex(m => m.localId === userMsg.localId)
          if(index !== -1) {
            this.messages[index] = {
              ...this.messages[index],
              isPending: false,
              text: '(error de envio)'
            }
          }

          this.messages = [...this.messages, { localId: this.generateId(), text: 'Lo siento, hubo un error al conectar con el asistente.', isPending: false, sender: 'bot' }]
        }
      })
    }
  }

  private scrollToBottom(): void {
    if(this.chatbotScrollContainer) {
      this.chatbotScrollContainer.nativeElement.scrollTop = this.chatbotScrollContainer.nativeElement.scrollHeight; // TODO: Revisar esto
    }
  }

  
}
