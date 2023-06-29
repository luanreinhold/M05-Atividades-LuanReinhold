kgMorango = float(input('Digite o KG do morango '))
kgMaca = float(input('Digite o KG da maça '))

total = 0;
if kgMorango < 0 or kgMaca < 0:
    print("Insira a quantidade válida.")
else:
    if kgMorango < 5 and kgMaca < 5:
        total = kgMorango * 2.50 + kgMaca * 1.80
        print(f'O total é {total}')
    else:
        total = kgMorango * 2.20 + kgMaca * 1.50
        print(f'O total é {total}')
       
