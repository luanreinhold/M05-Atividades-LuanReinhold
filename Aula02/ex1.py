import math
a = int(input('Informe primeiro número A'))

b = int(input('Informe o segundo número B'))

c = int(input('Informe o terceiro número C'))

# soma = math.sqrt(a) + math.sqrt(b) 
soma = a ** 2 + b ** 2

if soma == c ** 2:
    print(f'Os números: [{a, b, c}] representam um terno pitagórico')

elif soma != c ** 2:
    print(f'Os números: [{a, b, c}] NÃO representam um terno pitagórico')


