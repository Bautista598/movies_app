import { View, Text, ActivityIndicator, ScrollView } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import { getMovieByAction } from '@/core/actions/movie/get-movie-by-id.actions'
import useMovie from '@/presentation/hooks/useMovie'
import MovieHeader from '@/presentation/components/MovieHeader'

const MovieScreen = () => {
	const { id } = useLocalSearchParams()

	const { movieQuery } = useMovie(+id)

	if (movieQuery.isLoading || !movieQuery.data) {
		return (
			<View className="flex flex-1 justify-center items-center">
				<Text className="text-2xl font-semibold mb-4">
					Aguarde un segundo...
				</Text>
				<ActivityIndicator color={'blue'} size={50} />
			</View>
		)
	}

	return (
		<ScrollView>
			<Text>{movieQuery.data.title}</Text>
			<MovieHeader
				title={movieQuery.data.title}
				poster={movieQuery.data.poster}
				originalTitle={movieQuery.data.originalTitle}
			/>
		</ScrollView>
	)
}

export default MovieScreen
