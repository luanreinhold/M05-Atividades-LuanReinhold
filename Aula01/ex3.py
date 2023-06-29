import math
L = float(input('Forneça o comprimento do fio: '))
P = float(input('Forneça a força peso: '))
m = float(input('Forneça a massa: '))

g = P/m
# pi = math.pi
# T = 2 * math.pi * (L/g)**0.5
T = 2 * math.pi * math.sqrt(L/g)

print(f'A aceleração da gravidade é {g:.3f}')
print(f'O período do pêndulo é {T:.3f}')