// Conjunto de REGEX para validação de entradas.

function validar_email(email)
{
    var regex = /^([a-zA-Z0-9._-]+)@([a-zA-Z0-9_-]+)\.([a-zA-Z]{2,5})$/;
    return regex.test(email);
}
  
function validar_cep(cep){
 
    var regex = /^\d{5}-?\d{3}$/;
    return regex.test(cep);
  

}

function validar_cpf(cpf){
// escreva seu código aqui

}

function validar_telefone(telefone){
  // escreve seu código aqui

}
