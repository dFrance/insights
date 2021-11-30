# Insights 

É uma aplicação que o usuário pode publicar seus insights, suas ideias, com limite de 400 carácteres e podendo adicionar tags para cada ideia.

## Tecnologias utilizadas em todo projeto :
Esse projeto foi dividido entre o frontend com VueJs e o <a href="https://github.com/dFrance/insights_api">backend com uma api em NodeJs</a>.
### FrontEnd
<ul>
  <li>VueJs</li>
  <li>Axios</li>
  <li>Vue Router</li>
  <li>Vuetify</li>
  <li>Sass</li>
  </ul>

### BackEnd
<ul>
  <li>NodeJs</li>
  <li>Express</li>
  <li>Mongodb</li>
  <li>Docker</li>
</ul>

## Como rodar o projeto?

Para rodar o projeto é preciso executar as etapas a seguir:
<ul>
  <li>Instalar o NodeJs, para baixar <a href="https://nodejs.org/en/download/">clique aqui</a>, caso tenha dúvida de como instalar <a href="https://www.youtube.com/watch?v=HV3gGblB2G4">clique aqui</a></li>
    <li>Instalar o Docker, para baixar <a href="https://www.docker.com/products/docker-desktop">clique aqui</a>, caso tenha dúvida de como instalar <a href="https://www.youtube.com/watch?v=sYsIoWtS5LY">clique aqui</a></li>
  <li>Instalar o VueJs <a href="https://www.youtube.com/watch?v=CpzqAzlpq-o">clique aqui</a></li>
  <li>Instalar o MongoDB <a href="https://www.mongodb.com/try/download/community">clique aqui</a>, baixe a versão MongoDB Community Server. Caso tenha dúvida de como instalar, <a href="https://www.youtube.com/watch?v=r6QM1NTzkTI">clique aqui</a></li>
  <li>Você irá precisar clonar esse repositório e <a href=> esse aqui </a>. Após essa etapa basta rodar o comandos abaixo </li>
</ul>

### No repositório insights
```
yarn install
```
em seguida
```
yarn serve 
```
### No repositório insights_api
Caso tenha instalado o docker
```
docker-compose up
```
se não instalou o docker
```
yarn install
```
em seguida
```
yarn dev
```

## Telas entregues pelo UX/UI

![screenshot](https://github.com/dFrance/insights/blob/master/assets_readme/home.png)
![screenshot](https://github.com/dFrance/insights/blob/master/assets_readme/new-insight.png)
![screenshot](https://github.com/dFrance/insights/blob/master/assets_readme/select-category.png)
![screenshot](https://github.com/dFrance/insights/blob/master/assets_readme/selected-category.png)


## Funções extras para melhorar a experiência do usuário
A ideia dessas funções foi tratar possíveis erros e demonstrar para o usuário por meio de um feedback visual se uma requisição está acontecendo, foi bem sucedida ou gerou uma exeção.

### Funções extras para a Home

![screenshot](https://github.com/dFrance/insights/blob/master/assets_readme/home-dont-publish-insight.png)
![screenshot](https://github.com/dFrance/insights/blob/master/assets_readme/feedback-request-connection.png)
![screenshot](https://github.com/dFrance/insights/blob/master/assets_readme/home-loading-page.png)
![screenshot](https://github.com/dFrance/insights/blob/master/assets_readme/home-dont-exist-insight.png)
![screenshot](https://github.com/dFrance/insights/blob/master/assets_readme/home-error-request.png)

#### Funções extras da publicação de insight

![screenshot](https://github.com/dFrance/insights/blob/master/assets_readme/publish-insight-feedback-success.png)
![screenshot](https://github.com/dFrance/insights/blob/master/assets_readme/publish-insight-feedback-error.png)
![screenshot](https://github.com/dFrance/insights/blob/master/assets_readme/publish-insight-loading.png)

