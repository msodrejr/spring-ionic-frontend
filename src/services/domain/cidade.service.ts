import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../../config/api.config";
import { Observable } from "rxjs/Rx";
import { CidadeDTO } from "../../models/cidade.dto";

@Injectable()
export class CidadeService {
    
    constructor(public http : HttpClient){
    }

    //import do observable correto é rxjs/RX. O rxjs/Observable está incompleto.
    findCitiesFromState(estado_id : string) : Observable<CidadeDTO[]> {
        return this.http.get<CidadeDTO[]>(`${API_CONFIG.baseUrl}/estados/${estado_id}/cidades`);
    }

}