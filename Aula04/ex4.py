nome = input('Informe seu nome: ')
idade = int(input('Informe sua idade: '))
produto = int(input('Informe o número do produto'));

if idade < 18 and produto in [1,2,3]:
    print(f'{nome} você não pode comprar o produto {produto}')
elif nome == 'Jubiscleisson' and produto == 3:
    print(f'{nome} você não pode comprar o produto {produto}')
else:
    print(f'{nome} você pode comprar o produto {produto}')