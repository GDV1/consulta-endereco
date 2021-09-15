import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { HttpClient } from '@angular/common/http';
import { ConsultaCep } from '../model/consulta-cep.model';

@Injectable({
  providedIn: 'root'
})
export class ConsultaCepService {

  private PATH = environment.apiURL

  constructor(private http: HttpClient) { }

  // Método GET
  public obtemEndereco(cep: string) {
    const enderecoPorCep = `${this.PATH}/${cep}`;
    return this.http.get<ConsultaCep>(enderecoPorCep);
  }

}
