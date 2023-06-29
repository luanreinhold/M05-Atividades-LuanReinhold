#Tag: Questão 2
#Escreva seu código:
n1 = int(input('n1 '))
n2 = int(input('n2 '))
n3 = int(input('n3 '))

if n1 > n2 and n1 > n3:
  print(f'O Número {n1} é o maior')

elif n2 > n1 and n2 > n3:
  print(f'O Número {n2} é o maior')

else:
  print(f'O Número {n3} é o maior')
