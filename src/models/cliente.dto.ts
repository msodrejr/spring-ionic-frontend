export interface ClienteDTO{
    id : string;
    nome : string;
    email : string;
    //O "?" indica que o atributo não precisa ser preenchido
    imageUrl? : string;
}