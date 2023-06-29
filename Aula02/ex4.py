import math
tipo = int(input('digite o tipo de ladrilho: '))
area = int(input('digite a área da sala: '))
calculo = 0;

if tipo == 1:
    calculo = area / 80
elif tipo == 2:
    calculo = area / 60

print(f'Quantidade de ladrilhods: {math.ceil(calculo)}')