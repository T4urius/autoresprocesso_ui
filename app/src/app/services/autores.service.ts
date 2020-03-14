import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AutoresService {

    constructor(private _http: HttpClient) { }

    obterAutores() {
        // return this._http.get<any[]>();
    }

    inserirAutores(){
        // return this._http.post<any>();
    }

    removerAutores() {
        
    }
}