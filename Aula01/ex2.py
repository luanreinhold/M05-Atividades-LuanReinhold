#Tag: Questão 2
#Escreva seu código:

PT1 = float(input("Informe a PT1"))
EP1 = float(input("Informe a EP1"))
PT2 = float(input("Informe a PT2"))
EP2 = float(input("INforme a EP2"))

AV1 = 0.3 * PT1 + 0.15 * EP1
AV2 = 0.4 * PT2 + 0.15 * EP2

semestreNota = AV1 + AV2

print(AV1)
print(AV2)
print(f'Nota Semestral {semestreNota:.2f}')