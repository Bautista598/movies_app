import { getMovieByAction } from '@/core/actions/movie/get-movie-by-id.actions'
import { getMovieCastActions } from '@/core/actions/movie/get-movie-cast.actions'
import { useQuery } from '@tanstack/react-query'

const useMovie = (id: number) => {
	const movieQuery = useQuery({
		queryKey: ['movie', id],
		queryFn: () => getMovieByAction(id),
		staleTime: 1000 * 60 * 60 * 24
	})

	const castQuery = useQuery({
		queryKey: ['movie', id, 'cast'],
		queryFn: () => getMovieCastActions(id),
		staleTime: 1000 * 60 * 60 * 24
	})

	return { movieQuery, castQuery }
}

export default useMovie
