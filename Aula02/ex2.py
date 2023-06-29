salario = float(input('Informe um salário: '))

if salario < 500:
    novoSalario = salario + salario * 0.15
elif salario >= 500 and salario <= 1000:
    novoSalario = salario + salario * 0.10
elif salario >= 1000:
    novoSalario = salario + salario * 0.05


print(f'O novo salário atual: {novoSalario}')
