import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private apiUrl = 'https://us-central1-deep-freehold-441923-s7.cloudfunctions.net/send-email-function'; // Reemplaza con la URL de tu servicio de Google Cloud

  constructor(private http: HttpClient) {}

  public sendEmail(emailData: { to_email: string; subject: string; body: string }): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.apiUrl, emailData, { headers });
  }
}