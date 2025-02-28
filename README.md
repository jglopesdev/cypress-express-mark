# Cypress eXpress

Projeto criado a partir dos conhecimentos aprendidos durante o curso [Cypress eXpress](https://www.udemy.com/course/cypress-express/), ministrado pelo [Fernando Papito](https://www.udemy.com/user/fernando-papito/) onde pude aplicar na prática a automação de testes E2E com Cypress.

## Pré condições

É necessário ter instalado o Node.js e o npm para executar este projeto.

> Eu usei a versão `v18.20.7` and `10.8.2` do Node.js e npm, respectivamente. Eu sugiro que você use a mesma versão do Node.js para não ter problemas para subir a api e o servidor web.

## Instalação

Rode o comando `npm install` (ou a versão curta `npm i`) para instalar as dependencias de desenvolvimento.

## Testes

Neste projeto, você pode executar os testes em viewports de desktop e mobile.

##### Desktop
Execute o comando `npx cypress run` para executar o teste em modo headless.     
Ou, execute o NPM Script já criado `cy:run` para executar o teste em modo headless.     

Execute o comando `npx cypress open` para executar o teste em modo interativo (UI).     
Ou, execute o NPM Script já criado `cy:open` para executar o teste em modo interativo (UI). 

##### Mobile
    
Use, o NPM Script `cy:open:mobile` para executar o teste em viewport mobile em modo interativo (UI).      

Use, o NPM Script `cy:run:mobile` para executar o teste em viewport mobile.    

