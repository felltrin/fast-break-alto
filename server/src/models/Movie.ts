import { Schema, Document, model } from "mongoose";

export interface IMovie extends Document {
  title: string;
  year: number;
  cast?: string[];
  directors?: string[];
  plot?: string;
  genres?: string[];
  runtime?: number;
  rated?: string;
  poster?: string;
  released?: Date;
  imdb?: { id: number; rating: number; votes: number };
}

const MovieSchema = new Schema<IMovie>({
  title: { type: String, required: true },
  year: { type: Number, required: true },
  cast: [String],
  directors: [String],
  plot: String,
  genres: [String],
  runtime: Number,
  rated: String,
  poster: String,
  released: Date,
  imdb: {
    id: Number,
    rating: Number,
    votes: Number,
  },
});

export const Movie = model<IMovie>("Movie", MovieSchema, "movies");
