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

function validarCPF(cpf) {
  cpf = cpf.replace(/[^\d]+/g,''); // remove todos os caracteres não numéricos
  if(cpf == '') return false; // se o CPF estiver vazio, retorna false
  // verifica se o CPF tem 11 dígitos
  if (cpf.length != 11) return false;

  // realiza o cálculo dos dígitos verificadores
  var soma = 0;
  for (var i = 0; i < 9; i++) {
    soma += parseInt(cpf.charAt(i)) * (10 - i);
  }
  var resto = 11 - (soma % 11);
  if (resto == 10 || resto == 11) resto = 0;
  if (resto != parseInt(cpf.charAt(9))) return false;

  soma = 0;
  for (var i = 0; i < 10; i++) {
    soma += parseInt(cpf.charAt(i)) * (11 - i);
  }
  resto = 11 - (soma % 11);
  if (resto == 10 || resto == 11) resto = 0;
  if (resto != parseInt(cpf.charAt(10))) return false;

  return true; // CPF válido
}


function validarTelefone(telefone) {
  telefone = telefone.replace(/[^\d]+/g,''); // remove todos os caracteres não numéricos
  if (telefone.length != 11 && telefone.length != 10) { // verifica se o telefone tem 10 ou 11 dígitos
    return false;
  }

  // verifica se o primeiro dígito é 9 (caso de celular) ou 2 a 5 (caso de telefone fixo)
  if (!telefone.match(/^[2-5|9]{1}/)) {
    return false;
  }

  return true; // telefone válido
}


