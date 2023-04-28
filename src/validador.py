# Conjunto de REGEX para validação de entradas.

import re

def validar_email(email):
  regex = r'^([a-zA-Z0-9._-]+)@([a-zA-Z0-9_-]+)\.([a-zA-Z]{2,5})$'
    if re.match(regex, email):
        return True
    else:
        return False
  
def validar_cep(cep):
  regex = r"^\d{5}-?\d{3}$"
    if re.match(regex, cep):
        return True
    else:
        return False
  

def validar_cpf(cpf):
    cpf = re.sub('[^0-9]', '', cpf) # remove todos os caracteres não numéricos
    if len(cpf) != 11: # verifica se o CPF tem 11 dígitos
        return False

    # realiza o cálculo dos dígitos verificadores
    soma = 0
    for i in range(9):
        soma += int(cpf[i]) * (10 - i)
    resto = 11 - (soma % 11)
    if resto == 10 or resto == 11:
        resto = 0
    if resto != int(cpf[9]):
        return False

    soma = 0
    for i in range(10):
        soma += int(cpf[i]) * (11 - i)
    resto = 11 - (soma % 11)
    if resto == 10 or resto == 11:
        resto = 0
    if resto != int(cpf[10]):
        return False

    return True # CPF válido
def validar_telefone(telefone):
    telefone = re.sub('[^0-9]', '', telefone) # remove todos os caracteres não numéricos
    if len(telefone) != 11 and len(telefone) != 10: # verifica se o telefone tem 10 ou 11 dígitos
        return False

    # verifica se o primeiro dígito é 9 (caso de celular) ou 2 a 5 (caso de telefone fixo)
    if not re.match('^[2-5|9]{1}', telefone):
        return False

    return True # telefone válido
  
 
  
