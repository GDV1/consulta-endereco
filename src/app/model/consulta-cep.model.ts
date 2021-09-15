export class ConsultaCep {

    public cep: string;
    public logradouro: string;
    public bairro: string;
    public cidade: string;
    public estado: string;
    public ddd: string

    constructor(
        cep: string, 
        logradouro: string, 
        bairro: string, 
        cidade: string,
        estado: string,
        ddd: string
    ) {
        this.cep = cep;
        this.logradouro = logradouro;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
        this.ddd = ddd;
    }
}