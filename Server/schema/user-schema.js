import mongoose from "mongoose";

// established data types
const movieSchema = mongoose.Schema({
  id: Number,
  title: String,
  year: Number,
  time: Number,
  language: String,
  release: Date,
  country: String,
});

// reasigment the table and data types to const movie
const movie = mongoose.model('movie', movieSchema);

export default movie;
