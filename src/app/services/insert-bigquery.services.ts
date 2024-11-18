import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class InsertBigqueryService {
    private apiUrl = 'https://us-central1-deep-freehold-441923-s7.cloudfunctions.net/function-to-insert-bigquery'; // Reemplaza con la URL de tu servicio de Google Cloud

    constructor(private http: HttpClient) { }

    public insertToBigQuery(bigQueryData: {
        name: string,
        lastname: string,
        email: string,
        contact_number: number,
        company_name: string,
        country: string,
        interest_product: string,
        message: string
    }): Observable<any> {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.post(this.apiUrl, bigQueryData, { headers });
    }
}