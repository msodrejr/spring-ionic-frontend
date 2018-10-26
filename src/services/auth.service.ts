import { Injectable } from "@angular/core";
import { CredenciaisDTO } from "../models/credenciais.dto";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../config/api.config";

@Injectable()
export class AuthService{

    constructor(public http : HttpClient){

    }
    authenticate(creds : CredenciaisDTO){
        return this.http.post(`${API_CONFIG.baseUrl}/login`, creds, {
            //Especifica que a requisição vai retornar um objeto do tipo response
            observe: 'response',
            //Especifica o tipo da resposta.
            //Como a resposta é de corpo vazio, colocar como text, para evitar erro de Parse JSON.
            responseType: 'text'
        });
    }
}