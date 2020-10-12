# Tetris-JS
## Hackenge (Hackaton + Challenge) da cadeira IF977 Engenharia de Software UFPE para o aprendizado da linguagem JavaScript

Instalando as dependências do Node
-------
```
npm install
```

Executando o app
-------
```
npm start
```

Executando a suíte de testes do Cypress
-------
```
npx cypress open
```

Especificação dos testes
-------

- **`check game over`**: Para que esse teste passe, a aplicação deve retonar uma alerta no momento em que não houver mais espaços disponíveis na primeira linha do grid.

- **`successfully loads new game state`**: Para que esse teste passe, o jogo deverá ser iniciado uma vez que o botão Start seja pressionado

- **`successfully loads new game`**: Para que esse teste passe, o jogo deverá ser reiniciado uma vez que o botão Restart seja pressioando

- **`successfully renders the grid and minigrid`**: Para que esse teste passe, o grid do jogo deverá ser renderizado uma vez que a página seja iniciada

- **`successfully plays the music when game is initiated`**: Para que esse teste passe, a música deverá ser reproduzida ao iniciar a partida

- **`successfully plays the music when game is restarted`**: Para que esse teste passe, a música deverá ser reproduzida ao reiniciar a partida

- **`successfully stops the music when game is paused`**: Para que esse teste passe, a música deverá ser pausada ao parar a partida

You can also play it by clicking [here](https://tetris-jses.herokuapp.com/).
