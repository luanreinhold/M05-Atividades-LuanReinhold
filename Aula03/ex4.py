peso = float(input('Digite o peso (em kg): '))
altura = float(input('Digite a altura (em metros): '))

imc = peso / (altura ** 2)

print(f'Seu IMC é {imc:.2f}, o que indica ')

if imc < 18.5:
  print('abaixo do peso')
elif (imc >= 18.5) and (imc <= 24.9):
  print('peso normal')
elif (imc >= 25.0) and (imc <= 29.9):
  print('sobrepeso')
elif (imc >= 30.0) and (imc <= 34.9):
  print('obesidade grau 1')
elif (imc >= 35.0) and (imc <= 39.9):
  print('obesidade grau 2')
else:
  print('obesidade grau 3 (mórbida)')