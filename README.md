<a name="readme-top"></a>


<!-- PROJECT LOGO -->
<br />
<div align="center">
  
  ![logoMovies](https://user-images.githubusercontent.com/50422794/215829613-62a22bd5-13d9-4949-8c5f-001a1c1bb7dd.png)

  
  <h3 align="center">VIDEO CLUB</h3>

  <p align="center">
    Documentación
    <br />
    <br />
    <a href="https://videoclub-movies.vercel.app/">Despligue de la aplicación</a>
    <br />
    <a href="https://brayanduarte.vercel.app/">Portafolio - Brayan Duarte</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#Acerca-del-proyecto">Acerca del proyecto</a></li>
    <li><a href="#Construccion-de-la-aplicacion">Construcción de la aplicación</a></li>
    <li><a href="#Documentacion-tecnica">Documentación técnica</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## Acerca del proyecto

![logoMovies](https://user-images.githubusercontent.com/50422794/215829613-62a22bd5-13d9-4949-8c5f-001a1c1bb7dd.png)

En este proyecto utilizamos algunas tecnologias basicas, utilizamos la metodologia scrum para trabajar en equipo y sacar este proyecto adelante, es un crud básico pero el verdadero reto fue trabajar en equipo para sacarlo adelante

![si](https://user-images.githubusercontent.com/50422794/216082800-9033a27f-8ed7-42ba-804f-257c6250111d.jpeg)
![logoMovies](https://user-images.githubusercontent.com/50422794/215830147-fa7e237d-e162-474b-b3c4-dc8ec43984f7.png)

La aplicacion nos permite tanto visualizar como agregar peliculas, con sus respectivos datos, nos permite filtrar por nombres, agregar peliculas como lo mencioné previamente, se tiene la posibilidad de editar y borrar peliculas

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Construccion de la aplicacion

Esta sección tiene una lista de los principales marcos/bibliotecas que utilicé para construir el proyecto.

* <a href="https://reactjs.org">![image](https://user-images.githubusercontent.com/50422794/211116164-7b79fadd-869a-43e3-8053-a224f080f9c2.png)</a>
* <a href="https://react-icons.github.io/react-icons/">![image](https://user-images.githubusercontent.com/50422794/211116212-ef61c9ba-9787-42f1-917d-b49a15a2d75c.png)</a>
* <a href="https://reactrouter.com/en/main">![image](https://user-images.githubusercontent.com/50422794/211116261-6cda0e56-0192-4c44-a9ec-7f7f921e1f79.png)</a>
* <a href="https://expressjs.com/es/">![image](https://user-images.githubusercontent.com/50422794/215832140-54a86230-4ede-459c-82e3-5c05ee219f10.png)</a>
* <a href="https://www.mongodb.com/">![image](https://user-images.githubusercontent.com/50422794/215832681-e822e2d6-ae97-4c63-9d0b-be6c36a2eda1.png)</a>
* <a href="https://nodejs.org/es/">![image](https://user-images.githubusercontent.com/50422794/215834151-4c767188-7bfa-406e-9967-9c07dc4f737f.png)</a>
* <a href="https://mui.com/">![image](https://user-images.githubusercontent.com/50422794/215833458-26ad6ecd-120d-4153-bd96-291f950f034c.png)</a>
* <a href="https://sweetalert2.github.io/#native_link#">![image](https://user-images.githubusercontent.com/50422794/215833564-1e1010ba-b3ce-4097-adac-6c5588a9e74a.png)</a>
* <a href="https://www.npmjs.com/package/axios">![image](https://user-images.githubusercontent.com/50422794/215833618-06eef285-0ac3-46be-ac0c-44bc311dc823.png)</a>
* <a href="https://momentjs.com/">![image](https://user-images.githubusercontent.com/50422794/216081356-9b70f327-9a2f-4a2a-9102-f86f8ca4eb8a.png)</a>


<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Documentacion tecnica
* <h3>Filtro de peliculas</h3>

```javascript
  const [movies, setMovies] = useState([]);
  const [inputTitle, setInputTitle] = useState("");
  
  const filteredMovies = useMemo(() => {
        return movies.filter(item => (
            item.title.toLowerCase().includes(inputTitle.toLowerCase())
        ))
  },[inputTitle, movies]);
```

Se ulitizo el hook de useState para crear 2 estados, uno para guardar los datos de la bd y otro para guardar los datos que recibe el input.
Por otra parte se creo una una funcion llamada filteredMovies con la cual se realiza un filtro, pero para mejorar el rendimiento del consumo de los datos, se utilizo el hook de useMemo, que no permite mejorar la renderizacion de los datos que traemos de la bd, al momento de usar el useMemo tenemos que retornar un valor, entonces se utiliza el metodo filter para filtrar los datos y traer solo los titulos, para que el filtro funcione correctamente cambiamos los datos que traemos con el filtro a minusculas y los datos que se incluyen en el input de busqueda tambien los combierta a minusculas, al final el useMemo nos pide 2 dependencias para que se ejecute en el momento al que cambie alguna de estas 2.

```html
  <TextField
    id="searchInput"
    value={inputTitle}
    placeholder="Buscar por titulo"
    onChange={(e) => setInputTitle(e.target.value)}
    label="Outlined"
    InputProps={{
      startAdornment: (
        <InputAdornment position="end">
          <AiOutlineSearch />
        </InputAdornment>
      ),
    }}
    variant="outlined"
  />
```
En este imput le asignamos la variable inputTitle que tenemso en el hook useState para que los datos que ingrese el usuario se guarden en esta variable y se utiliza el metodo onChange para ejecutar una funcion interna y que el valor que ingrese el usuario se cambie en tiempo real con la funcion setInputTitle que nos genera el hook useState.

* <h3>Lista de películas</h3>

Para consultar los datos de películas registradas en la base de datos, se utiliza una función asíncrona que retorna una promesa, el valor de esta promesa está dado por la respuesta del método getMovies() de nuestra API. Finalmente, se actualiza el estado de la constante movies con los valores retornados. 

```javascript
  const getAllMovies = async () => {
    let response = await getMovies();
    setMovies(response.data);
  };
```

Se utiliza el hook useState para actualizar el listado de películas cada vez que se renderice el componente.

```javascript
  useEffect(() => {
    getAllMovies();
  }, []);
```

Para eliminar películas, se utiliza una función asíncrona que recibe como parámetro el id de la película a eliminar. Esta función muestra una alerta para confirmar o cancelar la acción, en caso dado de que la acción se confirma, se ejecuta el método deleteMovie(id) de nuestra API y posteriormente se informa al usuario en una nueva alerta que el registro fue borrado. 

```javascript
  const getAllMovies = async () => {
    let response = await getMovies();
    setMovies(response.data);
  };
```
## Componentes
![image](https://user-images.githubusercontent.com/114447994/216084908-23b521a0-1fc7-490c-947e-070743b82c0c.png)
* BurgerButton 

Este componente renderiza el boton de hamburguesa en vista movil el cual muestra un menu para poder navegar entre la lista de las peliculas o poder agregar peliculas. 
El icono fue extraido de: https://codepen.io/ 

```javascript
  const BurgerButton = (props) => {

    return (
        // the props at an event
        <div onClick={props.handleClick} className={`icon nav-icon-2 ${props.cliked ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
}
```
La contstante recibe las props del componente NavBar.
El 'div' tiene una condicion que si el estado 'clicked' es 'true' toma la clase 'open' si el 'false' no se le asigna nada.

* Footer

Este componente renderiza el pie de pagina. 
```javascript
  const Footer = () => {
    //footer and icons from https://fontawesome.com/
    return (
        <>
            <footer>
                <div className="text">©VIDEOCLUB</div> <hr/>
                <div className="icons">
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-square-twitter"></i>
                    <i class="fa-brands fa-square-youtube"></i>
                    <i class="fa-brands fa-square-instagram"></i>
                </div>
            </footer>
        
        </>
    );

};
```
Iconos extraidos de la pagina https://fontawesome.com/

* NavBar

Este compoente renderiza el header de la pagina el cual estan el logo, nombre de la pagina y poder ir a agregar peliculas o ver el listado de las peliculas 
```javascript
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
      setClicked(!clicked)
  }
```
Inicialmente el hook se lo asignamos como booleano 'false' para poder controlar los links y el menu de hamburguesa con las clases para el responsive. La constante 'handleclick' setea 'clicked' para pasarlo a su forma negada 

## ScrollToTop

```javascript
function ScrollToTop() {
    const { pathname } = useLocation()
	
    useEffect(() => {
        window.scrollTo(0,0)
    }, [pathname])
    return(null)
}

export {ScrollToTop}
```
La función `useLocation` proporciona información sobre la ubicación actual del usuario, mientras que `useEffect` es un hook que permite ejecutar código en un componente después de que este se haya renderizado en el DOM.

La función `ScrollToTop` se usa para llevar al usuario al inicio de la página cada vez que cambia la ruta (`pathname`). Cada vez que `pathname` cambia, se ejecutará la función de efecto que utiliza `window.scrollTo(0,0)` para llevar al usuario al inicio de la página. Finalmente, se devuelve `null` para no renderizar nada en el componente.

------------

## AddMovie

```javascript
const ButtonAdd = styled(FormControl)`
    margin: 20px 0;
    grid-column: span 2;
`;
```
`ButtonAdd` es un componente de React que se crea a partir de otro componente `FormControl` utilizando la librería de estilos `emotion/style`. La función `styled` permite aplicar estilos personalizados al componente base.

```javascript
const defaultValue = {
    id: "",
    title: "",
    year: "",
    time: "",
    language: "",
    release: "",
    country: "",
};
...
const [movie, setMovie] = useState(defaultValue);
```
El hook `useState` devuelve un par de valores, `movie` y `setMovie`. `movie` representa el objeto de estado actual que contiene los detalles de la película, mientras que `setMovie` es una función que permite actualizar ese estado. Recibe además un objeto `defaultValue` como argumento inicial, que representa una película vacía con valores predeterminados para cada propiedad.

```javascript
const navigate = useNavigate();
```
`useNavigate` es un hook de `React Router`. `navigate` es una variable que almacena la función de navegación proporcionada por el hook, que puede usarse para navegar a una nueva página.

```javascript
const onValueChange = (e) => {
      setMovie({ ...movie, [e.target.name]: e.target.value });
};
```
La función `onValueChange` es invocada cada vez que un valor de un campo de entrada cambia en un formulario. `e` es el objeto de evento que contiene información sobre el evento que se ha disparado (en este caso, un evento de cambio de valor).

La función utiliza el hook de estado `setMovie` para actualizar el estado de `movie`. Primero, utiliza el operador de propagación de objetos `(...movie)` para crear una copia del objeto de estado existente. Luego, usa la notación de corchetes `([e.target.name]: e.target.value)` para actualizar una propiedad en el objeto con el nombre y el valor del campo de entrada actual.

```javascript
const addMovieDetails = async () => {
        navigate('/all');
        await addMovie(movie);
    }
```
La función `addMovieDetails` Utiliza el hook `useNavigate` para navegar a la página principal (`/all`). También invoca a otra función llamada `addMovie` y le pasa el estado `movie` como argumento. La función es asíncrona, lo que significa que se ejecuta en segundo plano sin bloquear el resto del código.

## EditMovie
```javascript
const { id } = useParams();
```
`useParams` es un hook que te permite acceder a los parámetros de la ruta actual en la aplicación. Por ejemplo, si tienes una ruta como **/movie/:id**, puedes acceder al valor del parámetro **id** con `useParams().id`. Esto es útil para recuperar información específica sobre la ruta actual en la aplicación.

```javascript
const loadMovieDetails = async () => {
    const response = await getMovie(id);
    setMovie(response.data);
  };
```
La función `loadMovieDetails` hace una petición a la base de datos para obtener los detalles de una película específica usando la función `getMovie`, (la cual devuelve una promesa). La respuesta se almacena en la constante response.

Luego, la función utiliza el hook de estado `setMovie` para actualizar el objeto de estado de la película con los datos obtenidos de la base de datos `(response.data)`.


```javascript
<Input onChange={(e) => onValueChange(e)} 
         name="release" 
         value={moment.utc(movie.release).format('YYYY-MM-DD')}
         type="date"
 />
```
La propiedad `onChange` es una función de manejo de eventos que se llama cada vez que el usuario cambia el valor del elemento de formulario. La función `onValueChange` se proporciona como un valor para la propiedad `onChange`.

`moment.utc(movie.release)` crea un nuevo objeto `moment` en formato **UTC** a partir del valor de la fecha de lanzamiento de una película `(movie.release)`. La función `.utc` convierte la fecha a formato **UTC**, lo que significa que se toma en cuenta la diferencia horaria en todo el mundo.

* <h3>Controladores</h3>
  
  ```javascript
    export const editMovie = async (request, response) => {
      let movie = request.body;
      const editMovie = new Movie(movie);

      try {
          await Movie.updateOne({_id: request.params.id}, editMovie);
          response.status(201).json(editMovie);
      } catch (e) {
          response.status(409).json({message: e.message});
      }

    }
  ```
  
Voy a tomar como referencia el metodo de actualizar datos en el controlador, ya que los demas metodos son demasiado parecidos entonces no creo que tenga que explicar cada uno de ellos, en este metodo tenemos una funcion asincrona la cual nos exije 2 parametros que son propios de express los cuales son request y response. Se crea una variable local de tipo let llamada movie y le asignamos los valores del metodo request.body el cual sirve para obtener los valores que un formulario se envía a nuestra API, creamos una constante editMovie y le asignamos el valor de una nueva instacia para crear una nueva pelicula a la cual le pasamos como parametro la variable local movie, luego usamos un try/catch para manejar la parte de los errores, el try nos devuelve la respuesta asincrona, llamamos a la variable local movie e ingresamos a las propiedades y llamamos al metodos http rest updateOne, seguido a esto le pasamos como parametro la id que se encuentra en la base de datos, con la constante que creamos anteriormente, la respuesta de esto va a ser un response.status para conocer el estado en el que se encuentra la ejecucion del metodo en este caso es el 201 que nos devuelve un estado de creado, lo convertimos a un json para que se pueda leer y le pasamos como parametro la constante editMovie que tienen todos los datos de la actualización, en el catch nos trae un response.status(409) el cual nos indica que tenemos conflictos al momento de cambiar algun dato y lo imprimimos para que se pueda visualizar el error.
  
* <h3>Esquema</h3>

```
    const movieSchema = mongoose.Schema({
      id: Number,
      title: String,
      year: Number,
      time: Number,
      language: String,
      release: Date,
      country: String,
    });
  ```
 El esquema creado permite asociar la variable y el tipo de dato que se va a guardar en cada colección, teniendo así una estructura definida para los datos.
 
* <h3>Index</h3>
  
 Se realiza la importación de las dependecias y modulos que se van a usar, siendo estos:
  * Express:
    Permite utilizar express como framework de node.
  * dotenv:
    Permite acceder y modificar variables de ambiente, en el desarrollo sera utilizado para modificar el usuario y la clave de la base de datos.
  * cors:
    Permite tener acceso entre los diferentes servidores que se utilizan.
  * body-parser:
    Esta libreria permite el acceso al body de la petición en formato json().
   ```
    const app = express();

    dotenv.config();

    app.use(bodyParser.json({exteng: true}));
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(cors());

    app.use('/', Routes);

    const PORT = 8000;

    const username = process.env.DB_USERNAME;
    const password = process.env.DB_PASSWORD;

    Connection(username, password);

    app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));
   ```

Se definen las dependencias y como estas son usadas, además se determina el puerto que se utilizara. Luego se realiza la asignación del usuario y contraseña y se envian como parametros al modulo Conecction. Finalmente se deja un mensaje que permite visualizar la correcta conexión.

* <h3>Archive routes<h3/>

  <h4>Binder routes.js</h4>

  ```routes
  import { addMovie, getMovies, getMovie, editMovie, deleteMovie} from '../controller/user-controller.js';
  ```
  In this case, in the routes folder, properties called from the controller are imported to start routing each method.

  ```methods 
  router.post('/add',addMovie);
  router.get('', getMovies);
  router.get('/:id', getMovie);
  router.put('/:id', editMovie);
  router.delete('/:id', deleteMovie)
  ```

  <h3>Archive  database</h3>

  <h4>Binder db.js</h4>

  ```Connection Database
  const Connection = async (username, password) => {
  ```
  In this function it will contain 2 necessary properties that are needed to make the connection in the databases, it is the username and password.

  ```Connection Database
  const URL = `mongodb://${username}:${password}@ac-tuor9qz-shard-00-00.aha85bo.mongodb.net:27017,ac-tuor9qz-shard-00-01.aha85bo.mongodb.net:27017,ac-tuor9qz-shard-00-
  ```
    //First, the code in try is executed
    //if there were no errors,catch execution is ignored
    try {
        //The await keyword before any expression that returns a promise
        await mongoose.connect(URL, {useUnifiedTopology: true, useNewUrlParser: true});
        console.log('Database connected succesfully')
    } catch (e) {
        console.log('Error while connecting with the database', e)
    }
}

export default Connection;

  const URL = `mongodb://${Videoclub}:${movies}@movies.8wsfgdc.mongodb.net/?retryWrites=true&w=majority`;
  ```
  The constant variable URL will contain the link of the Mongo Atlas database in the cloud this link will contain two parameters of username and password.

  ```Connection Database
      try {
          await mongoose.connect(URL, {useUnifiedTopology: true, useNewUrlParser: true});
          console.log('Database connected succesfully')
  ``` 

  ```Try-catch
  The try-catch condition block is used where it allows us to detect and control what we are requesting through the connection
  ``` 

  In the try block it allows us to verify if the username and password are correct it allows us to connect to the database and show the console that it is connected

  ```Connection Database
      } catch (e) {
          console.log('Error while connecting with the database', e)
      }
  }
  ```


  ### Keywords
  There are two keywords in the connection async and await are keywords that serve to simplify the behavior of synchronous use of promises and perform some specific   behavior on a group of Promises
  
  <p align="right">(<a href="#readme-top">back to top</a>)</p>
