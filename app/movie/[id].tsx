import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import { getMovieByAction } from '@/core/actions/movie/get-movie-by-id.actions'

const MovieScreen = () => {
	const { id } = useLocalSearchParams()

	getMovieByAction(+id)

	return (
		<View>
			<Text>MovieScreen</Text>
		</View>
	)
}

export default MovieScreen
