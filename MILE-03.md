# Grilla de Repositorios

Ahora iremos paso a paso creando la primera página de la aplicación. Lo primero que haremos será crear una página nueva llamada Repositories. Hay que recordar que las páginas son componentes de React, la única diferencia es que estas están relacionadas a una URL. En este caso la página **Repositories** está relacionada con la url raíz de nuestro sitio  (“/”). 

La página **Repositories** debe tener la siguiente estructura inicial en nuestro directorio. 

<p align='center'>
<img src='./images/repositories-folder-structure.png' width='400' alt='repo-browser'>
</p>

Dentro del archivo `Repositories.js` creemos la estructura base de nuestro componente. 

```js
import React, {Component} from 'react';


class Repositories extends Component {

    render() {
        return null;
    }
    
}

export default Repositories;
```

Hagamos que el componente  `App`   utilize el componente que acabamos de sacar del horno. 

```js
//App.js
import React, {Component} from 'react';

import './App.css';
import Repositories from "./pages/Repositories/Repositories";
class App extends Component {

    render() {
        return (
            <div className="app">
                <Repositories/>
            </div>
        );
    }
}

export default App;
```

Ahora importemos el archivo `githubClient` en la parte de arriba de nuestro archivo Repositories.js
```
//Repositories.js
import React, {Component} from 'react';
import * as githubClient from "../../services/githubClient/githubClient";
```

Este archivo contiene la función `getRepositories` con la siguiente firma: 
``` js
getRepositories(searchQuery = '', language = '',sortBy = '')
```

Asegurémonos que el método nos devuelve una lista de repositorios agregándolo al método `componentDidMount`   de nuestro componente `Repositories`.


```js
import React, {Component} from 'react';


class Repositories extends Component {

    componentDidMount() {
        githubClient.getRepositories('', 'php')
            .then(repositoriesList => {
                console.log(repositoriesList);
            });
    } 

    render() {
        return null;
    }
    
}

export default Repositories;
```

Ahora entremos a `localhost:3000` y si todo salió bien deberías de ver lo siguiente en la consola del navegador:

<p align='center'>
<img src='./images/repositories-console-log.png' width='600' alt='repo-browser'>
</p>

Ahora que ya podemos obtener los repositorios es hora de guardarlos en el `state`, así React sabrá que cuando se obtengan los repositorios el componente `Repositories` debe de renderizarse de nuevo.

```js
import React, {Component} from 'react';


class Repositories extends Component {

    state = {
        repositoriesList: []
    };

    componentDidMount() {
        githubClient.getRepositories('', 'php')
            .then(repositoriesList => {
		        this.setState({repositoriesList});
            });
    } 

    render() {
        return null;
    }
    
}

export default Repositories;
```


## Componente RepositoriesGrid

Ahora agreguemos un componente nuevo llamado `RepositoriesGrid`. Este componente solo será utilizado por el componente `Repositories` por lo que debe de ir dentro de su carpeta `components`.


<p align='center'>
<img src='./images/repositories-grid-folder-structure.png' width='400' alt='repo-browser'>
</p>


`RepositoriesGrid` será el encargado de manejar el grid de repositorios (un poco obvio). Este componente será un `functional stateless component` debido a que no maneja estado(state) y solo se encarga de renderizar la información que se le pase via props.

```js
import React from "react";
import PropTypes from 'prop-types';
import Grid from "../../../../components/Grid/Grid";

import './RepositoriesGrid.css';

const RepositoriesGrid = ({repositoriesList}) => {
    return (
        <Grid noItemsMessage="No results found">
            {repositoriesList.map(repository => (
                <div key={repository.id}>{repository.repoUrl}</div>
            ))}
        </Grid>
    );
};

RepositoriesGrid.propTypes = {
    repositoriesList: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        repoUrl: PropTypes.string.isRequired,
    })).isRequired
};

export default RepositoriesGrid;
```

Es importante definir los props que son necesarios para que el componente se renderice correctamente. En este caso definimos que el componente  `RepositoriesGrid ` espera que le pasen via prop un `repositoriesList` el cual es un array de objetos. Donde cada objeto debe tener un `id` (número) y un `repoUrl` (string).

Ahora en el archivo `Repositories` importa el componente `RepositoriesGrid` y úsalo para renderizar la lista de repositorios.

```js
//Repositories.js
render() {
        const {repositoriesList} = this.state;
        return (
            <div className="repositories">
                <RepositoriesGrid repositoriesList={repositoriesList}/>
            </div>
        );
    }
```


Si todo salió bien al entrar a tu navegador deberías de ver algo como esto: 

<p align='center'>
<img src='./images/repositories-grid-output.png' width='600' alt='repo-browser'>
</p>

El componente `Grid` tiene la funcionalidad de separar a sus hijos en una grilla de 5 columnas por N filas. Si entras a ver el código verás que es un solo `div` que utiliza los estilos de `grid-layout` de `css`.

Ahora que ya tenemos los repositorios y están ordenador agreguemos las tarjetas para cada uno. Creemos un nuevo componente `RepositoryCard`en la carpeta `components` de `RepositoryGrid`. 

`RepositoryCard` debe recibir un objeto `repository` que contenga toda la información que será mostrada en la tarjeta. De nueva cuenta, debido a que este componente no maneja estados podemos hacer uso de un `functional stateless component`. El componente hará uso de las clases reutilizables `Card`, `CardAvatar`, `CardDetails` y `CardItem` y debe verse así:

```js
//RepositoryCard.js
import React from 'react';
import PropTypes from 'prop-types';
import Card, {CardAvatar, CardDetails, CardItem} from "../../../../../../components/Card/Card";

import './RepositoryCard.css';

const RepositoryCard = ({repository}) => (
    <Card className="repositories__card">
        <CardAvatar imageSrc={repository.ownerAvatarUrl}/>
        <CardDetails>
            <CardItem label="Name">{repository.name}</CardItem>
            <CardItem label="Stars">{repository.startGazersCount}</CardItem>
            <CardItem label="Forks">{repository.forksCount}</CardItem>
        </CardDetails>
    </Card>
);


RepositoryCard.propTypes = {
    repository: PropTypes.shape({
        ownerAvatarUrl: PropTypes.string,
        name: PropTypes.string.isRequired,
        startGazersCount: PropTypes.number.isRequired,
        forksCount: PropTypes.number.isRequired,
    }).isRequired,
};

export default RepositoryCard;
```

Ahora importemos nuestro nuevo componente en `RepositoryGrid` y usémoslo.

```js
//RepositoryGrid.js
import React from "react";
import PropTypes from 'prop-types';

import RepositoryCard from "./components/RepositoryCard/RepositoryCard";
import Grid from "../../../../components/Grid/Grid";

import './RepositoriesGrid.css';


const RepositoriesGrid = ({repositoriesList}) => {
    return (
        <Grid noItemsMessage="No results found">
            {repositoriesList.map(repository => (
                    <RepositoryCard
                        id={repository.id} //<-- No olvidemos el key
                        repository={repository}
                    />
            ))}
        </Grid>
    );
};

RepositoriesGrid.propTypes = {
    repositoriesList: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        repoUrl: PropTypes.string.isRequired,
    })).isRequired
};

export default RepositoriesGrid;

```

Si todo salió bien al entrar a nuestro navegador deberíamos de ver algo como esto: 


<p align='center'>
<img src='./images/repositories-grid-browser.png' width='600' alt='repo-browser'>
</p>

Tal vez hayas notado que al recargar la página antes de que se muestren los repositories sale un mensaje de “no content”. Este mensaje lo pone por defecto el componente `Grid` pero solo debería mostrarse cuando le pasas una lista vacía. El problema es cuando se monta por primera vez nuestro componente `Repositories` el valor de `repositoriesList` es un array vacío. Agreguemos una nueva variable llamada `loading` que será la encargada de decirnos si ya se han solicitado o no los repositorios al cliente `githubClient`. 

```js
//Repositories.js
import React, {Component} from 'react';
import * as githubClient from "../../services/githubClient/githubClient";
import RepositoriesGrid from "./components/RepositoryGrid/RepositoryGrid";
import './Repositories.css';

class Repositories extends Component {

    state = {
        repositoriesList: [],
        loading: false // <-- agregar valor inicial
    };

    componentDidMount() {
        this.setState({loading: true}); // <-- Empezaremos a pedir los repos
        return githubClient.getRepositories('', 'php')
            .then(repositoriesList => {
                this.setState({
                    repositoriesList,
                    loading: false //<-- Ya terminamos de pedirlos
                });
            });
    }


    render() {
             // Obtenemos los repositorios y el estado de loading 
	 //Si loading es falso, renderizar RepositoriesGrid 
        const {repositoriesList, loading} = this.state;
        return (
            <div className="repositories">
                {!loading && ( 
                    <RepositoriesGrid repositoriesList={repositoriesList}/>
                )}
            </div>
        );
    }
}

export default Repositories;

```


Ahora el mensaje ya no debe aparecer. Pero vamos a **METERLE MÁS DISEÑO**. Agreguemos el componente `LoadingSpiner` de la siguiente manera:

```
//Repositories.js
render() {
        const {repositoriesList, loading} = this.state;
         //  Si loading es true mostremos el loading
         //  Si loading es false mostremos el grid
        return (
            <div className="repositories">
	        {loading ?
                    (<LoadingSpinner/>)
                    :
                    (<RepositoriesGrid repositoriesList={repositoriesList}/>)
                }
            </div>
        );
    }
```


Como toque final agreguemos un título para que nuestra grilla de repositorios se va muy bonita. 

```js
//Repositorioes.js
render() {
        const {repositoriesList, loading} = this.state;
        return (
            <div className="repositories">
.                <div className="repositories__title">
                    <h1>Repositories</h1>
                </div>
                {loading ?
                    (<LoadingSpinner/>)
                    :
                    (<RepositoriesGrid repositoriesList={repositoriesList}/>)
                }
            </div>
        );
    }
```

## Componente SearchBar

Ya que podemos mostrar los repositorios, ahora agreguemos la capacidad de buscarlos. Iniciemos creando un componente `RepositorySearchBar` que será un sub-componente de `Repositories`.

```js
// RepositorySearchBar.js
import React, {Component} from "react";

import './RepositorySearchBar.css';

class RepositorySearchBar extends Component {
    render() {
        return (
            <form
                className="repositories__search-form"
            >
                HOLA SOY LA SEARCH BAR, SCOOBY DO PA PA! 
            </form>
        );
    }
}

export default RepositorySearchBar;

```

Agreguemos  `RepositorySearchBar`  dentro del método `render` de `Repositories`.

```js
//Repositories.js
render() {
        const {repositoriesList, loading} = this.state;
        return (
            <div className="repositories">
                <RepositorySearchBar onSearchSubmit={this.handleSearchSubmit}/>
                <div className="repositories__title">
                    <h1>Repositories</h1>
                </div>
                {loading ?
                    (<LoadingSpinner/>)
                    :
                    (<RepositoriesGrid repositoriesList={repositoriesList}/>)
                }
            </div>
        );
    }
```

Si entras al navegador debería de aparecer esta preciosura:

<p align='center'>
<img src='./images/search-bar-scooby-do.png' width='600' alt='repo-browser'>
</p>


Antes de empezar a agregar los campos de búsqueda aprendamos que son los **controlled components**. 

### Controlled components crash coursito

Elementos como  `<input/>` o `<select/>` normalmente manejan su estado por si mismos. Sin embargo si queremos usar **React** para manipular su valor, es necesario que definamos dos props values; el prop _value_ y el prop _onChange_. 

El prop _value_ nos permite definir el valor que debe aparecer en el elemento, y el prop _onChange_ nos permite suscribirnos a un evento que es disparado cada vez que algo o alguien causa un cambio en el estado del elemento. 

Por ejemplo, cambiemos por un momento nuestro archivo App.js a lo siguiente: 

```js
import React, {Component} from 'react';
import AppRoutes from "./components/AppRoutes/AppRoutes";

import './App.css';

class App extends Component {
    state = {value: ''};

    handleChange = (event) => {
        this.setState({value: event.target.value});
    };

    render() {
        return (
            <label>Name:<input type="text" value={this.state.value} onChange={this.handleChange}/></label>
        );
    }
}

export default App;

```

Este deberá de mostrar lo siguiente en el navegador: 


Debes poder escribir como si fuera un input normal, lo sé, no hay mucha magia aquí, se comporta tal y como se esperaba. Si tienes instalado el React Web tools, ábrelo para que veamos como el `state` del componente va cambiando cada vez que modificamos el input. 

Algo que nos permite **React** es utilizar el prop _value_ en un elemento input es poder manipular su valor desde otro lugar. Por ejemplo podríamos poner un valor inicial: 

```js
import React, {Component} from 'react';
import AppRoutes from "./components/AppRoutes/AppRoutes";

import './App.css';

class App extends Component {
    state = {value: 'SOY UN VALOR INICIAL WOW'};

    handleChange = (event) => {
        this.setState({value: event.target.value});
    };

    render() {
        return (
            <label>Name:<input type="text" value={this.state.value} onChange={this.handleChange}/></label>
        );
    }
}

export default App;

```


La página de **Buscar Repositorios** está compuesta por dos componentes: 

- Coding  session
  - Crear componente Repositories
  - Agregar método componentDidMount y hacer llamada a githubClient para traer los repos
  - Mostrar los repos en consola con console.log (solo para que vean que si están llegando)
  - Agregar repos al state
  -  Agregar el grid
  -  Crear el RepositoryCard
  - Crear RepositoriesGrid y mover todo lo relacionado  al grid ahi
  - Agregar LoadingSpinner
  -  Agregar Input the texto (\<- explicar controlled inputs
  -  Agregar Search button
  -  Crear SearchBar y mover todo lo relacionado dentro de ese componente
  -  Explicar como el estate de SearchBar será comunicado a su padre(Repositories)
  - Agregar dropdowns
  -  Hacer un número musical que termine con un beso apasionado
  -  Explicar React Router, agregar configuración y primera ruta

