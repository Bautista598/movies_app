import { nowPlayingMovie } from '@/core/actions/movies/now-playing.actions'
import { useQuery } from '@tanstack/react-query'

export const useMovies = () => {
	//Queries
	const nowPlayingQuery = useQuery({
		queryKey: ['movies', 'nowPlaying'],
		queryFn: nowPlayingMovie,
		staleTime: 1000 * 60 * 60 * 24
	})

	return { nowPlayingQuery }
}
