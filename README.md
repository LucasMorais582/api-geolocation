# api-geolocation

Aplicação back-end que calcula distâncias entre pontos especificados pelo usuário com o auxílio da api do Google.

## Tecnologias

- Yarn Package
- NodeJs
- Axios
- Typescript
- Express
- Jest

## Preparação do ambiente

Clonando o projeto
```
git clone https://github.com/LucasMorais582/api-geolocation.git
```
Após acessar o diretório do projeto, rodar o comando no terminal para baixar a node_modules:
```
yarn init
```

### Passos para executar bateria de testes automatizados

Rodar o comando:
```
yarn test
```

## Passos para inicializar a aplicação:

### Criar chave de autenticação na api do [Google](https://developers.google.com/maps/documentation/javascript/get-api-key):

Criar arquivo '.env' baseado no .env.example e colocar a chave gerada pelo Google na variável `API_GOOGLE_KEY` (lembre-se que não deve ter espaços antes e depois da chave).

Rodar o comando:
```
yarn dev:server
```
Para acessar a aplicação, utilize uma API Client como [Postman](https://www.postman.com/) ou [Insomnia Core](https://insomnia.rest/download/):
- http://localhost:3333
