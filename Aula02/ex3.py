i = int(input('Informe o valor I'))

a = int(input('Informe o segundo número A'))

b = int(input('Informe o segundo número B'))

c = int(input('Informe o terceiro número C'))

if i % 2 == 0:
    media = (a+b+c) / 3
    print(f'MA: {media}')
elif i > 10 and i % 2 != 0:
    media = (a+b+c) / 3
    mediaPonderada = (a*2 + b*3 + c*4) / 9
    print(f'MA: {media} \nMP: {mediaPonderada}')




