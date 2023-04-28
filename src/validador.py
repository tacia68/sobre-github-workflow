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
  # escreva seu código aqui
  
def validar_telefone(telefone):
  # escreve seu código aqui
  
 
  
