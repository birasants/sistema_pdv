
# Sistema de Ponto de Venda (PDV)

Este sistema de Ponto de Venda (PDV) é uma solução desenvolvida para gerenciar transações em um ambiente de varejo. O sistema permite a gestão de categorias, produtos, clientes e pedidos, oferecendo uma interface clara e funcionalidades robustas para facilitar as operações diárias de um estabelecimento comercial.

## Funcionalidades

- **Gerenciamento de Usuários**: Cadastro, autenticação e atualização de usuários.
- **Gerenciamento de Categorias**: Listagem de categorias pré-definidas como Informática, Celulares, entre outras.
- **Gerenciamento de Produtos**: Inclusão, atualização, listagem e exclusão de produtos, com suporte para vinculação de imagens.
- **Gerenciamento de Clientes**: Cadastro, atualização e listagem de clientes, com validação de campos únicos como e-mail e CPF.
- **Gerenciamento de Pedidos**: Registro de novos pedidos, listagem e regras de negócio específicas para gestão de estoque e integridade de dados.

## Tecnologias Utilizadas

- **Node.js**: Plataforma de desenvolvimento do lado do servidor.
- **PostgreSQL**: Sistema gerenciador de banco de dados relacional.
- **Express**: Framework para aplicativo da web para Node.js.
- **JWT (JSON Web Tokens)**: Utilizado para a autenticação de usuários.
- **Bcrypt**: Biblioteca utilizada para criptografar senhas.
- **Supabase/Blackblaze**: Serviços de armazenamento em nuvem para gerenciamento de imagens de produtos.

## Como Executar

Para executar este sistema, siga os passos abaixo:

1. **Clone o Repositório**
   ```bash
   git clone https://github.com/seu-usuario/sistema-pdv.git
   cd sistema-pdv
   ```

2. **Instale as Dependências**
   ```bash
   npm install
   ```

3. **Configure o Ambiente**
   - Crie um arquivo `.env` na raiz do projeto e configure as variáveis de ambiente necessárias (ex: conexão com banco de dados, chave secreta para JWT).

4. **Execute as Migrações**
   ```bash
   npm run migrate
   ```

5. **Inicie o Servidor**
   ```bash
   npm start
   ```

6. **Acesse a API**
   - A API estará disponível em `http://localhost:3000` ou na URL de deploy configurada.

## Documentação da API

A documentação detalhada dos endpoints está disponível no Swagger, que pode ser acessado através da URL `/docs` após iniciar o servidor. Isso proporcionará uma visão completa dos endpoints disponíveis, parâmetros esperados e respostas possíveis.

## Deploy

O sistema está hospedado e pode ser acessado através do link: [Sistema PDV - The Ximbinhas](https://desafio-backend-modulo-05-sistema-pdv-dds13-dbe04-apagecgl2.vercel.app/)


---

Este projeto é parte de um desafio de desenvolvimento para implementar práticas modernas de software e demonstrar competências técnicas em desenvolvimento back-end com NodeJS e PostgreSQL.
