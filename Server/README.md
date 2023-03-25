<a name="readme-top"></a>


<!-- PROJECT LOGO -->
<br />
<div align="center">
  
  ![logoMovies](https://user-images.githubusercontent.com/50422794/215829613-62a22bd5-13d9-4949-8c5f-001a1c1bb7dd.png)

  
  <h3 align="center">DOCUMENTATION</h3>

  <p align="center">
    Esta documentación es parte de un proyecto educativo
    <br />
    <br />
    <a href="#">Despligue de la aplicación</a>
    <br />
    <a href="#">Brayan Duarte</a>
    ·
    <a href="https://github.com/AngelaDiaz20">Angela Diaz</a>
    ·
    <a href="#">Valentina Camacho</a>
    ·
    <a href="#">Ivan Muños</a>
    ·
    <a href="#">Jonathan Sánchez</a>
    ·
    <a href="#">Jazmin Bejarano</a>
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
