import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import moment from "moment/moment";

//import styles
import './formMovie.css'

//import images
import Cinta from '../../assets/img/cinta-sola.png'
import MovieImg from '../../assets/img/movie.png'

//import components from material library
import {
  FormControl,
  Input,
  InputLabel,
  styled,
} from "@mui/material";

//import functions from services api
import { editMovie, getMovie } from "../../service/api";

//styled components - emotion library
const FormSpan = styled(FormControl)`
    grid-column: span 2;
`;

//initial values for each of the properties that correspond to the inputs
const defaultValue = {
  id: "",
  title: "",
  year: "",
  time: "",
  language: "",
  release: "",
  country: "",
};

const EditMovie = () => {
  //destructuring of variable with an initial default value
  const [movie, setMovie] = useState(defaultValue);

  //variable that stores the navigation function provided by the hook
  const navigate = useNavigate();

  //hook that accesses the parameters of the current route in the application (in this case, id)
  const { id } = useParams();

  //component rendering and function execution
  useEffect(() => {
    loadMovieDetails();
  }, []);

  //Get movie data from database and update application status
  const loadMovieDetails = async () => {
    const response = await getMovie(id);
    setMovie(response.data);
  };

  //event handling function to update object state
  const onValueChange = (e) => {
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };

  //Function for editing movie data
  const editMovieDetails = async () => {
    navigate("/all");
    await editMovie(movie, id);
  };

  return (
    <>
      <section className="container_all">
        <section className="container_form">
          <div className="title">
            <div className="triangle"></div>
            <h1>EDITAR PELÍCULA - {movie.title}</h1>
          </div>

          <form className="add-form">
            <FormControl>
              <InputLabel>ID</InputLabel>
               {/* executes event handling function whenever the value of the input field changes */}
              <Input onChange={(e) => onValueChange(e)}
                name="id"
                value={movie.id}
              />
            </FormControl>

            <FormControl>
              <InputLabel>Año</InputLabel>
              <Input onChange={(e) => onValueChange(e)}
                name="year"
                value={movie.year}
              />
            </FormControl>

            <FormSpan>
              <InputLabel>Titulo</InputLabel>
              <Input onChange={(e) => onValueChange(e)}
                name="title"
                value={movie.title}
              />
            </FormSpan>

            <FormControl>
              <InputLabel>Tiempo duración</InputLabel>
              <Input onChange={(e) => onValueChange(e)} 
                    name="time" 
                    value={movie.time}
                    />
            </FormControl>

            <FormControl>
              <InputLabel>Lenguaje</InputLabel>
              <Input onChange={(e) => onValueChange(e)} 
                      name="language" 
                      value={movie.language}
                      />
            </FormControl>

            <FormControl>
              <InputLabel>Fecha de lanzamiento</InputLabel>
              <Input onChange={(e) => onValueChange(e)} 
              name="release" 
              value={moment.utc(movie.release).format('YYYY-MM-DD')}
              type="date"
              />
            </FormControl>

            <FormControl>
              <InputLabel>País</InputLabel>
              <Input onChange={(e) => onValueChange(e)} 
              name="country" 
              value={movie.country}
              />
            </FormControl>

            <div className="btns-actions">
              <Link to='/all'><button className="btn btn-edit"> CANCELAR </button></Link>
              <button className="btn" onClick={() => editMovieDetails()}>
                GUARDAR CAMBIOS
              </button>
            </div>

          </form>
        </section>
        <img src={Cinta} alt="Imagen cinta" className="cinta" />
        <img src={MovieImg} alt="Imagen de combo" className="movie-img" />

      </section>

    </>
  );
};

export default EditMovie;