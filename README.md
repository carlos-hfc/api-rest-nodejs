<p align="center">
  <img src="https://img.shields.io/badge/node-v18.18.2-339933?style=flat&logo=nodedotjs&logoColor=%23339933" />
  <img src="https://img.shields.io/badge/npm-v9.8.1-CB3837?style=flat&logo=npm" />
  <img src="https://img.shields.io/badge/feito_por-Carlos_Faustino-black" />
</p>

<br/>

# :bulb: Sobre

Controle de finanças pessoal desenvolvido no módulo sobre API REST da formação de Node.js da Rocketseat.

## :page_with_curl: Pré-requisitos

1. Antes de começar, certifique-se de ter o Node.js instalado em sua máquina. 
    <a href="https://nodejs.org">
      <img width="24" src="https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png" alt="Node.js" title="Node.js"/>
    </a>

## :gear: Configuração

1. Clone o repositório para sua máquina local:

```bash
git clone https://github.com/carlos-hfc/api-rest-nodejs
```

2. Acesse o diretório do projeto:

```bash
cd api-rest-nodejs
```

3. Instale as dependências:

```bash
npm install
```

4. Crie um arquivo `.env.local` na raiz do projeto e adicione as seguinte chaves:

```env
NODE_ENV=""
DATABASE_URL=""
```

5. Rode a aplicação

```bash
npm run dev
```

## :computer_mouse: Features

### Requisitos funcionais

- :ballot_box_with_check: O usuário pode criar uma nova transação
- :ballot_box_with_check: O usuário pode obter um resumo da sua conta
- :ballot_box_with_check: O usuário pode listar todas as transações que já ocorreram
- :ballot_box_with_check: O usuário pode visualizar uma transação única

### Regras de negócio

- :ballot_box_with_check: A transação pode ser do tipo crédito que somará ao valor total, ou débito, que subtrairá
- :white_large_square: Deve ser possível identificar o usuário entre as requisições
- :white_large_square: O usuário só pode vistualizar transações criadas por ele

## :computer: Tecnologias utilizadas

<p float="left">
  <img width="50" src="https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png" alt="Node.js" title="Node.js"/>
  <img width="50" src="https://user-images.githubusercontent.com/25181517/183890598-19a0ac2d-e88a-4005-a8df-1ee36782fde1.png" alt="TypeScript" title="TypeScript"/>
</p>

## :page_facing_up: Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).