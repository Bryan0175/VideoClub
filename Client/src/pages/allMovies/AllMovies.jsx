import { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import moment from "moment/moment";

// import components
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
// import styles
import "./allMovies.css";
// import icons
import { BsFillPencilFill, BsFillTrashFill } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
//import images
import Camera from '../../assets/img/videocamera.png';
import Reel from '../../assets/img/cinta-03.png'
// import of services
import { getMovies, deleteMovie } from "../../service/api";

const AllMovies = () => {
  const [movies, setMovies] = useState([]);
  const [inputTitle, setInputTitle] = useState("");

  /* Filter the records in the table based on the movie title and cache the result. The above action uses the variables inputTitle and movies as dependencies. */
  const filteredMovies = useMemo(() => {
    return movies.filter((item) =>
      item.title.toLowerCase().includes(inputTitle.toLowerCase())
    );
  }, [inputTitle, movies]);

  /* updates the list of movies each time the component is rendered */
  useEffect(() => {
    getAllMovies();
  }, [movies]);

  /* use the getMovies API service to retrieve the list of movies from the database */
  const getAllMovies = async () => {
    let response = await getMovies();
    setMovies(response.data);
  };

  /*It uses an alert to confirm or cancel the deletion of a movie, if the action is confirmed, the deleteMovie API service is executed to delete a movie using the id as a parameter.*/
  const deleteMovieDetails = async (id) => {
    Swal.fire({
      title: "¿Estás seguro de querer eliminar esta película?",
      text: "¡No podrás revertir esta acción!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      confirmButtonText: "Si, ¡bórrala!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteMovie(id);
        Swal.fire(
          "¡Película eliminada!",
          `El registro de esta película ha sido borrado con éxito`,
          "success"
        );
        getAllMovies();
      }
    });
  };

  //HTML
  return (
    <div className="all-movies">
      <img src={Camera} alt="Imagen videocamara" className="camera" />
      <img src={Reel} alt="Rollo fotográfico" className="reel" />
      {/* movie search input */}
      <div className="search">
        <TextField
          id="searchInput"
          value={inputTitle}
          placeholder=" Buscar por titulo"
          onChange={(e) => setInputTitle(e.target.value)}
          label=""
          InputProps={{
            startAdornment: (
              <InputAdornment position="end">
                <AiOutlineSearch />
              </InputAdornment>
            ),
          }}
          variant="outlined"
        />
      </div>
      {/* table with information */}
      <div className="table-responsive">
        <table className="table">
          {/* table header */}
          <thead>
            <tr className="table-head">
              <th>ID</th>
              <th>TÍTULO</th>
              <th>AÑO</th>
              <th>TIEMPO</th>
              <th>LENGUAJE</th>
              <th>FECHA</th>
              <th>PAÍS</th>
              <th>ACCIONES</th>
            </tr>
          </thead>
          {/* table body */}
          <tbody>
            {/* maps the array of movies and for each element it generates a row in the table that shows its information */}
            {filteredMovies.map((movie) => (
              <tr key={movie._id} className="table-body">
                <td>{movie.id}</td>
                <td>{movie.title}</td>
                <td>{movie.year}</td>
                <td>{movie.time} min</td>
                <td>{movie.language}</td>

                <td>{moment.utc(movie.release).format('YYYY-MM-DD')}</td>
                <td>{movie.country}</td>
                <td>
                  <div className="actions">
                    {/* button to edit a movie */}
                    <Link to={`/edit/${movie._id}`} className="button edit">
                      <BsFillPencilFill className="icon" />
                    </Link>
                    {/* button to delete a movie */}
                    <Link
                      className="button delete"
                      onClick={() => deleteMovieDetails(movie._id)}
                    >
                      <BsFillTrashFill className="icon" />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllMovies;
