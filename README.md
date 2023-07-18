
# Mini Projeto: Manipulação de DOM, consumo de API, Acessibilidade e Usabilidade.

Criação de um SPA com consumo de uma API aberta para praticar JS fetch e manipulação de DOM, considerando também aprimorar a usabilidade e acessibilidade da aplicação. :wheelchair:

A aplicação é baseada na atividade número 34 do curso "100 DAYS OF CODE" da _Angela Yu_ (_Udemy_). O código (da minha autoria) cria um jogo de trivia/perguntas "certo ou falso" usando a biblioteca GUI para desktop Tkinter de Python, este foi adaptado para usar DOM manipulation e fetch de JS, criando uma versão web do jogo.

Após a adaptação do código para a lógica por trás foi necessário escrever o HTML e o CSS, para o CSS se criaram componentes (container, card, buttons) baseados/replicando BootStrap com vanilla JS e CSS com assitência de chatGPT, as fontes foram importadas do CDN de BootStrap.

Para acessibilidade foi usado o site **webAIM.com**, para calcular o fator de contraste entre as cores usadas, primariamente branco e preto, e também azul, BootStrap variante (primary, default) e shades de azul para os botões também de alto contraste. A cor azul é também friendly para pessoas com daltonismo, razão pela qual a variante "success" (verde) foi rejeitada.

Finalmente foi implementado código para permitir manipular a aplicação desde o teclado sem precisar o uso do mouse (considerando acessibilidade de pessoas com Parkinson e outras que não podem usar o mouse), permitindo ser usado com só uma mão no teclado. 

Os botões já tinham indexação default então é possível usar Tab para navegar entre eles e Enter para selecionar, mesmo assim você precisa usar Shift + Tab para voltar; funcionalidade extra para usar só as teclas "T" e "F" (true e false) e as setas esquerda e direta (:arrow_left:, :arrow_right:) para navegar entre os botões mais facilmente (mais opções e usando só uma tecla em vez de uma combinação) foi acrescentada ampliando assim a usabilidade.

## API usada: Open Trivia DB

#### Get perguntas

```http
  GET 
  https://opentdb.com/api.php?amount={amount}&difficulty={difficulty}&type={boolean}
```
Parametros default da aplicação: faz uma solicitação à endpoint do API para gerar os dados para um jogo como 20 perguntas de "certo ou falso" de dificuldade média.

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
|  `amount` | `number` | **Required**. 20 |
|  `difficulty` | `string` | **Required**. medium |
|  `type` | `string` | **Required**. boolean|



## Referência das cores

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Cor da fonte | ![#212529](https://via.placeholder.com/10/212529?text=+) #212529 |
| Cor de fundo | ![#f8f8f8](https://via.placeholder.com/10/f8f8f8?text=+) #f8f8f8 |
| Cor do botão | ![#007bff](https://via.placeholder.com/10/007bfftext=+) #007bff |
| Cor do botão (focus) | ![#0056b3](https://via.placeholder.com/10/0056b3text=+) #0056b3|
| Cor da borda: blue| ![#0000ff](https://via.placeholder.com/10/0000ff?text=+) #0000ff |

### Coeficiênte de contraste mais baixo, #007bff: 

Razão de contraste: **3.97**

Suficiente para pasar as provas de componentes de interfaz gráfica. Apto para botão. :white_check_mark:

### Coeficiênte de contraste mais alto, #212529:
Razão de contraste: **15.42**

Passa todas as provas :white_check_mark::white_check_mark::white_check_mark:

## Fontes e recursos

 - [Angela Yu, 100 days of code](https://www.udemy.com/course/100-days-of-code/)
 - [Open Trivia database](https://opentdb.com/)
 - [BootStrap fonts CDN](https://www.bootstrapcdn.com/)


