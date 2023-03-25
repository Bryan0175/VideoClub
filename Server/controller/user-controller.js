import { request, response } from "express";
import Movie from "../schema/user-schema.js";

//Function to add a movie
export const addMovie = async (request, response) => {
    const movie = request.body;

    const newMovie = new Movie(movie);

    try {
        await newMovie.save();
        response.status(201).json(newMovie);
    } catch (e) {
        response.status(409).json({message: e.message});
    }
}

//Function to get a movie
export const getMovies = async (request, response) =>{
    try {
        const movies = await Movie.find({});
        response.status(200).json(movies);
    } catch (e) {
        response.status(404).json({message: e.message});
    }
}

//Function to get a movie by id
export const getMovie= async (request, response) => {
    try {
        //const movie = await Movie.find({_id: request.params.id});
        const movie = await Movie.findById(request.params.id);
        response.status(200).json(movie);
    } catch (e) {
        response.status(404).json({message: e.message});
    }
}

//Function to update a movie
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

//Function to delete a movie
export const deleteMovie = async (request, response) => {
    try {
        await Movie.deleteOne({_id: request.params.id});
        response.status(200).json({message: 'Pelicula borrada de manera exitosa'});
    } catch (e) {
        response.status(409).json({message: e.message});
    }
}
