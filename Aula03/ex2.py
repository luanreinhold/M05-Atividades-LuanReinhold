nm = int(input('Digite um número: '))

mensagem = ' ';
if nm % 2 == 0 and nm % 3 == 0:
    mensagem = 'O número é divisivel por 2 e por 3.'
else:
    if nm % 2 == 0:
        mensagem = 'O número é dívisivel por 2 e não por 3.'
    else:
        mensagem = 'O número não é divisivel por 2'

print(mensagem)