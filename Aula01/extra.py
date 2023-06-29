h = float(input('Digite a altura: '))
s = input('Digite o sexo (m ou f): ')

if s == 'f':
  peso = 62.1*h - 44.7
  print(f'O peso ideal é {peso:.2f}')
elif s == 'm':
  peso = 72.7*h - 58
  print(f'O peso ideal é {peso:.2f}')
else:
  print('entrada inválida')