# Creación del proyecto

Abre una ventana de tu terminal preferida y en la carpeta de tu preferencia ejecuta:

```bash
npm install -g create-react-app // Instala globalmente create_react_app

create-react-app repo-browser // Crear una nueva react app en el directorio "repo-browser"

cd repo-browser/ // Ir al directorio "repo-browser"
npm start  // Iniciar el servidor node con la app de react
```

Para correr tu aplicación ejecuta:

```bash
npm start
```

El comando `npm start` levantará un servidor con la aplicación en el puerto *3000* del *localhost*. Puedes abrir a tu navegador e ingresar a la dirección `localhost:3000`.

## Limpieza del proyecto

Commentar las líneas dentro del archivo `index.js`:

```js
// import registerServiceWorker from './registerServiceWorker';
```

y

```js
// registerServiceWorker();
```

## Estructura base del proyecto

Primero deberás crear las siguientes carpetas dentro `src/`:

* components
* pages
* services

Luego, dentro de la recién creada carpeta `componentes/` agrega otras carpetas:

* Card
* Grid
* LoadingSpinner

Finalmente, dentro de la carpeta `services`agrega otra carpeta llamada `parsers`.

## Agregar dependencias del proyecto

Durante este proyecto utilizaremos dependencias que nos ayudarán a desarrollar aplicaciones más rápido.

En tu terminal preferida ejecuta:

```bash
npm install --save react-router-dom
npm install --save classname
npm install --save prop-types
```

## Identificar los `snippets` de código

Recordemos que este curso está enfocado en la creación de aplicaciones con ReactJS por lo cual haremos uso de algunas porciones de código sin entrar en explicación de como fueron creadas.

Por ejemplo, llamadas a una fuente de datos o los estilos de CSS que usaremos a lo largo del proyecto se te proporcionarán dentro de la carpeta `snippets/`.

### Configuración el cliente API de GitHub

Dirígete a la carpeta `snippets`:

* Copia el archivo llamado `githubClient.js` a la carpeta `services`del proyecto. Recuerda esta carpeta está en `repo-browser/src/services`
* Copia la carpeta llamada `parsers` a la carpeta `services`del proyecto.

### Entendiendo el modelo

Dentro de la carpeta `parsers` que acabas de agregar al proyecto encontrás:

* Un archivo llamado `contributorParser.js`
* Un archivo llamado `repositoryParser.js`

Como buena práctica, en tus proyectos lo primero siempre deberá ser entender el *modelo de datos* con el que estarás trabajando.

En nuestro caso tenemos dos modelos principales: `Repository` y `Contributor`

El modelo `Repository` lucirá así:

```js
{
    id,
    name,
    ownerAvatarUrl,
    repoUrl,
    startGazersCount,
    forksCount,
    description,
    githubPageLink
}
```

El modelo `Contributor` lucirá así:

```js
{
    loginName,
    avatarUrl,
    githubPageLink,
}
```