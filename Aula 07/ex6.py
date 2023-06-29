inNumero = int(input("Informe o número 1: "))
inNumero2 = int(input("Informe o número 2: "))

somaNumeros = 0;
while inNumero < inNumero2:
    if inNumero % 2 == 0:
        somaNumeros += inNumero
    inNumero = inNumero + 1

print(f'A soma é {somaNumeros}')


