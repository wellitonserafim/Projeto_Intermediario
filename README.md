# Projeto Intermediário

Projeto intermediário desenvolvido para a diciplina de Java para Web da Universidade do Extremo Sul Catarinense (UNESC). 
Esta aplicação consiste em uma API que armazena dados referentes a Musicas, com as seguintes definições: **Música**, **Álbum** e **Compositor**. 
Através dos CRUDS: **Get, Post, Put e Delete** é possivel consultar, inserir, alterar e deletar os dados armazenados.


### 📋 Pré-requisitos

O endereço de acesso da aplicação é: http://localhost:3000/

Para se conectar ao Banco de dados Mongoose é necessário criar um arquivo **config.json** contendo as seguintes variaveis:

| Variáveis      | 
| -------------- |
| user           |
| password       |
| database       | 


### 📑  Get

O método GET tem a finalidade de retornar dados em nossa API. Não é necessário passar nada no corpo da mensagem.
```
Exemplo de listagens gerais com Requisição Get:

Música: http://localhost:3000/musica
Álbum: http://localhost:3000/album
Compositor:http://localhost:3000/compositor
```
```
Exemplo de listagens específicas com Requisição Get:

Música: http://localhost:3000/musica?nome=DieYoung
Álbum: http://localhost:3000/album?nome=Warrior
Compositor: http://localhost:3000/compositor?nome=Kesha
```

## ✔ Post

O método POST tem a finalidade de inserir novos objetos. É necessário passar no corpo da mensagem o objeto completo a ser inserido. O retorno é próprio objeto enviado.
```
Exemplo de inserção com Requisição Post: 

Música: http://localhost:3000/musica
Corpo da mensagem em Json: {"nome":"Payphone", "genero":"Pop", "ano":"2012"}

Álbum: http://localhost:3000/album
Corpo da mensagem em Json: {"nome":"Overexposed","genero":"Pop", "ano":"2012", "gravadora":"Interscope Records" }

Compositor: http://localhost:3000/compositor
Corpo da mensagem em Json: {"nome":"Maroon 5","nome_completo":"Adam Levine","nacionalidade":"Americana"}
```

### 🔄 Put

O método PUT tem a finalidade de alterar um recurso ou coleção. É necessário passar no corpo da mensagem um objeto completo  a ser atualizado e um "Id" válido no endereço. O retorno é o próprio objeto enviado.
```
Exemplo de alteração com Requisição Put: 

Música: http://localhost:3000/musica/:id
Corpo da mensagem em Json: {"nome":"Pay", "ano":"2014"}
```
### ✖ Delete

O método DELETE é utilizado para deletar recursos. Não é necessário passar nada no corpo mas é necessário passar um "Id" válido no endereço. O retorno em caso de sucesso é próprio objeto deletado.
```
Exemplo de exclusão com Requisição Delete:

Música: http://localhost:3000/musica/:id
```

### 🆘 Código de Status

O código de status utilizado na API tem as seguintes representações:

| Código | Definição                   | 
| -----  | --------------------------  |
|  200   | Sucesso                     |
|  500   | Erro causado pelo servidor  |


## ✒️ Autor

* **Welliton Serafim** - *Projeto Intermediário - Unesc/2020* - [wellitonserafim](https://github.com/wellitonserafim/)
