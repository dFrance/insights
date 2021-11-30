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
  <li>Docker(em beta)</li>
</ul>

## Como rodar o projeto?

Para rodar o projeto é preciso executar as etapas a seguir:
<ul>
  <li>Instalar o NodeJs, para baixar <a href="https://nodejs.org/en/download/">clique aqui</a>, caso tenha dúvida de como instalar <a href="https://www.youtube.com/watch?v=HV3gGblB2G4">clique aqui</a></li>
  <li>Instalar o VueJs <a href="https://www.youtube.com/watch?v=CpzqAzlpq-o">clique aqui</a></li>
  <li>Instalar o MongoDB <a href="https://www.mongodb.com/try/download/community">clique aqui</a>, baixe a versão MongoDB Community Server. Caso tenha dúvida de como instalar, <a href="https://www.youtube.com/watch?v=r6QM1NTzkTI">clique aqui</a></li>
  <li>Você irá precisar clonar esse repositório e <a href=> esse aqui </a>. Após essa etapa basta rodar o comandos abaixo </li>
  <li>Instalar o Docker, para baixar <a href="https://www.docker.com/products/docker-desktop">clique aqui</a>, caso tenha dúvida de como instalar <a href="https://www.youtube.com/watch?v=sYsIoWtS5LY">clique aqui</a> Com o docker ainda não é possível usar a rota de importação de arquivos csv</li>
  <li>Instalar o Insomnia, link para baixar <a href="https://insomnia.rest/download">clique aqui</a>, se tiver dificuldade bastar seguir <a href="https://www.youtube.com/watch?v=sKAbNbMy7vY">essa video aula</a></li>
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
Sem o docker
```
yarn install
```
em seguida
```
yarn dev
```
Caso tenha instalado o docker (a versão atual ainda não possui a importação de arquivo CSV)
```
docker-compose up
```
### Rotas de requisição
Para cadastro de categorias, ainda não foi criada uma interface visual, contudo a rota /category com o verbo POST é possível cadastrar uma nova categoria, para isso passe um json, como o exemplo abaixo. Para ter acesso as categorias, bastar fazer uma requisição para a mesma rota com o verbo GET, contudo ao ir para a tela de publicação de um novo insight a aplicação consulta o banco e lista automaticamente as opções de tag. 
```
{
  "title": "NOME DA CATEGORIA"
}
```
Para publicação de insight e visualização dos publicados, já possui interface visual completa. Mas caso queira fazer uma requisição por algum app, basta usar a rota /cards, sendo post para uma nova publicação ou get para solicitar todos os insights. O formato de json para uma publicação é o mesmo do abaixo:
```
{
  "title": "SEU INSIGHT",
  "category": [{"idCategoria": "XXXXX", "title": "NOME DA CATEGORIA"}]
}
```
Lembre-se sempre de passar uma categoria já existente, para seguir os mesmos padrões da idCategoria. Os campos para cadastro possuem validação no backend, para o insight e categoria é obrigado passar o <i>title</i>.
### Importação via arquivos CSV
Caso você tenha um arquivo CSV com um backup dos insights é possível importar todos os insights de uma vez, para isso na versão atual você irá precisar utilizar o Insomnia ou qualquer outro programa, para fazer uma requisição do tipo post na rota /importcsv, anexando o arquivo na requisição. Utilize o nome file para o arquivo. O formato do csv deve ser da seguinte forma:
```
Arrascaeta fez a diferença e garantiu a vitória para o time rubro-negro,TEMPORADA
Flamengo consegue boa vitória fora de casa na estréia da Copa Libertadores 2021,
Primeira partida de um grupo difícil exigiu que o time carioca virasse o placar em dois momentos do jogo,TEMPORADA
Corinthians vence Athletico-PR e se firma na zona da Libertadores,TEMPORADA;JOGADOR
```
Tente sempre subir as categorias em caixa alta, contudo há tratativa no código para caso você esqueça. Os parametros como ID são incrementados durante a requisição, o código faz uma busca nas categorias, se já houver uma categoria com o mesmo nome ele copia o idCategoria da mesma, se não ele cria um idCategoria. Os ids da aplicação são gerados combinando 6 dígitos randomizados entre [A-Z/1-9].

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

