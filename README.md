# React SSR Seed
Semilla para desarollo de microfrontends basados en react y renderizados en el servidor y continuados en el browser

## Techs
Tecnologías usadas por la semilla
- Webpack (https://webpack.js.org/)
- Node + Express (https://expressjs.com/es/)
- React (https://reactjs.org/)
- React Router (https://github.com/ReactTraining/react-router)
- Redux + Thunks (https://redux.js.org/)
- Scss (https://sass-lang.com/documentation/syntax)
- Axios (https://github.com/axios/axios)

## Features pendientes
Próximos features a implementar
- [x] ~~UI Testing~~
- [ ] Node Testing
- [ ] Mocks
- [x] ~~Docker build~~
- [x] ~~Lint~~

## Empezando
Instalando dependencias
```$xslt
npm install
```
Ejecutando la semilla en el ambiente de desarrollo
```$xslt
npm run dev
```

Ejecutando la semilla en ambiente productivo
```$xslt
docker build -t <tag:image:version> .
```
## Como funciona
SSR nos propone decidir si ciertas partes de nuestra aplicación hacer un pre-fetching de las APIs antes de renderizar 
su contenido, con el fin de evitar tiempos de loading y experiencia negativa en los usuarios.

Para lograr esto, la semilla consta de tres partes:
- Server Node con express
- Client App SPA con react
- Server Api REST 

### Server Node con Express

Se encarga de exponer dos rutas, API donde estan todos nuestros servicios REST y una default donde levantará el template
de nuestra aplicación SPA, detecta si necesita hacer un prefetching y lo disponibiliza en redux. 
Este server node con express tiene la capacidad de interprestar nuestros componentes react con JSX y renderizarlos 
como HTML.

### Client App SPA con react

Es una aplicación SPA básica, basada en react con redux. En nuestro caso las "pages" serán nuestros containers, los que 
interactúen con redux, y los componentes la lógica de UI y sus interacciones.  

### Server API REST

Para los llamados al BFF, y con el fin de evitar CORS, nuestro server en node expone un contexto de API el cual
centraliza el llamado de APIs transformaciones, etc. De no ser necesario este componente se puede evitar y solucionar 
cors con alguna otra herramienta.

## Agregando nueva funcionalidad
