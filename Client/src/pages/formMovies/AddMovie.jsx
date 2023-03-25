import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

//import styles
import './formMovie.css'

//import images
import Cinta from '../../assets/img/cinta-sola.png'
import MovieImg from '../../assets/img/movie.png'

//import icon from react icons
import { MdNoteAdd } from 'react-icons/md'

//import components from material library
import {
    FormControl,
    Input,
    InputLabel,
    styled,
} from "@mui/material";

//import function from services api
import { addMovie } from "../../service/api";

//styled components - emotion library
const FormSpan = styled(FormControl)`
    grid-column: span 2;
`;

const ButtonAdd = styled(FormControl)`
    margin: 20px 0;
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

const AddMovie = () => {
    //destructuring of variable with an initial default value
    const [movie, setMovie] = useState(defaultValue);

    //variable that stores the navigation function provided by the hook
    const navigate = useNavigate();

    //function that updates the state of the form whenever a change occurs in a form element
    const onValueChange = (e) => {
        setMovie({ ...movie, [e.target.name]: e.target.value });
    };

    //function that adds movie details to a database
    const addMovieDetails = async () => {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Registro exitoso',
            showConfirmButton: false,
            timer: 1500
        })
        navigate('/all');
        await addMovie(movie);
    }

    return (
        <section className="container_all">
            <section className="container_form">
                <div className="title">
                    <div className="triangle"></div>
                    <h1>REGISTRO DE PELÍCULA</h1>
                </div>

                <form className="add-form">
                    <FormControl>
                        <InputLabel>ID</InputLabel>
                        {/* executes event handling function whenever the value of the input field changes */}
                        <Input onChange={(e) => onValueChange(e)} name="id" />
                    </FormControl>

                    <FormControl>
                        <InputLabel>Año</InputLabel>
                        <Input onChange={(e) => onValueChange(e)} name="year" />
                    </FormControl>

                    <FormSpan>
                        <InputLabel>Titulo</InputLabel>
                        <Input onChange={(e) => onValueChange(e)} name="title" />
                    </FormSpan>

                    <FormControl>
                        <InputLabel>Tiempo duración</InputLabel>
                        <Input onChange={(e) => onValueChange(e)} name="time" />
                    </FormControl>

                    <FormControl>
                        <InputLabel>Lenguaje</InputLabel>
                        <Input onChange={(e) => onValueChange(e)} name="language" />
                    </FormControl>

                    <FormControl>
                        <InputLabel>Fecha de lanzamiento</InputLabel>
                        <Input onChange={(e) => onValueChange(e)} name="release"/>
                    </FormControl>

                    <FormControl>
                        <InputLabel>País</InputLabel>
                        <Input onChange={(e) => onValueChange(e)} name="country" />
                    </FormControl>

                    <ButtonAdd>
                        <button className="btn" onClick={() => addMovieDetails()}><MdNoteAdd className="icon"/>AGREGAR PELICULA</button>
                    </ButtonAdd>

                </form>
            </section>
            <img src={Cinta} alt="Imagen cinta" className="cinta" />
            <img src={MovieImg} alt="Imagen de combo" className="movie-img" />

        </section>
    );
};

export default AddMovie;
