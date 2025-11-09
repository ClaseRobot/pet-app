import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from '../../environments/environment'

interface UserMessage {
  text: string;
}

interface MessageResponse {
  userMessageId: string;

  botMessage: {
    id: string;
    text: string;
    isPending: false;
    sender: 'bot'
  }
}

@Injectable({ providedIn: 'root' })
export class ChatService {
  private http = inject(HttpClient)

  sendMessage(message: string): Observable<MessageResponse>{
    console.log('send message service', message)
  
    const payload: UserMessage = { text: message };

    return this.http.post<MessageResponse>(`${environment.apiUrl}/chatbot`, payload)
  }

}