import axios from "axios";

const URL = "https://videoclub-server-back.vercel.app";

export const addMovie = async (data) => {
    try {
        return await axios.post(`${URL}/add`, data);
    } catch (e) {
        console.log("Error while calling add User Api", e);
    }
};

export const getMovies = async () => {
    try {
        return await axios.get(`${URL}`);
    } catch (e) {
        console.log("Error while calling getMovies API", e);
    }
};

export const getMovie = async (id) => {
    try {
        return await axios.get(`${URL}/${id}`);
    } catch (e) {
        console.log("Error while calling getMovie api", e);
    }
};

export const editMovie = async (movie, id) => {
    try {
        return await axios.put(`${URL}/${id}`, movie);
    } catch (e) {
        console.log("Error while calling editUser api", e);
    }
};


export const deleteMovie = async (id) => {
    try {
        return await axios.delete(`${URL}/${id}`);
    } catch (e) {
        console.log('Error while callign deleteUser api', e)
    }
}