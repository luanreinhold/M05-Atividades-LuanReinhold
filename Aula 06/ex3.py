# JUROS = CAPITAL X TAXA DE JUROS X MESES

capital = float(input("Valor do capital: "))

while capital > 0:
   
    valorEmprestimo = float(input("Valor do empréstimo: "))
    meses = int(input("Duração dos meses: "))
    if capital < valorEmprestimo:
        print(f'Empréstimo negado, capital total é de R$ {capital}')
        break;
    
    if valorEmprestimo <= 10000:
        juros = 0.10
    else:
        juros = 0.07

    
    jurosDevidos = valorEmprestimo * juros * meses
    totalDevido = valorEmprestimo + jurosDevidos
    capital = capital -valorEmprestimo
    print(f'Taxa de juros aplicada : {juros}%')
    print(f'Juros Devidos: {jurosDevidos}')
    print(f'Valor total = {capital}')