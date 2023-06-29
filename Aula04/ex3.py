l1 = int(input('lado 1 '))
l2 = int(input('lado 2 '))
l3 = int(input('lado 3 '))


if l1 == l2 and l1 == l3 and l3 == l1 and l3 == l2:
  print('Equilátero')
elif l1 == l2 or l1 == l3 or l3 == l2 or l3 == l1:
  print('Isóceles')
else:
  print('Escaleno')