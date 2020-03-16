import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AutoresService {

    apiUrl: "https://localhost:44359/api/v1/autores";

    constructor(private _http: HttpClient) {
    }

    obterAutores(): Observable<any[]> {
        return this._http.get<any[]>(this.apiUrl);
    }

    inserirAutores(idAutor: number, nomeAutor: string): Observable<any> {
        return this._http.post<any>(this.apiUrl + '/inserirAutor', { body: idAutor, nomeAutor });
    }

    removerAutores() {
        return this._http.delete(this.apiUrl);
    }
}