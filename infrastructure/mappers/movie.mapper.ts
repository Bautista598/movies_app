import { MovieDBResponse } from '../interfaces/movieDB-movie-response'
import { MovieDBMoviesResponse, Result } from '../interfaces/movieDB-response'
import { CompleteMovie, Movie } from '../interfaces/movieDB.interface'

export class MovieMapper {
	static fromTheMovieDB(movie: Result): Movie {
		return {
			id: movie.id,
			title: movie.title,
			description: movie.overview,
			releaseDate: new Date(movie.release_date),
			poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
			backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
			rating: movie.vote_average
		}
	}

	static fromCompleteMovie = (movie: MovieDBMoviesResponse): CompleteMovie => {
		return {
			id: movie.id,
			title: movie.title,
			description: movie.overview,
			releaseDate: new Date(movie.release_date),
			poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
			backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
			rating: movie.vote_average,
			budget: movie.budget,
			duration: movie.runtime,
			genres: movie.genres.map((genre) => genre.name),
			productionCompanies: movie.production_companies.map(
				(company) => company.name
			),
			originalTitle: movie.original_title
		}
	}
}
