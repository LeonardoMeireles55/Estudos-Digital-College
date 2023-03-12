# importa o módulo random do Python. Esse módulo contém funções que geram números aleatórios.
import random
# define uma variável N com o valor 6. Essa variável indica quantos números devem ser sorteados para a aposta.
n = 7
# função random.sample() para gerar 6 números aleatórios únicos.
sorteados = random.sample(range(1, 61), n)
# Mostrar na tela resultado com mensagem.
print(f'Os números da sua aposta são: {sorteados}')