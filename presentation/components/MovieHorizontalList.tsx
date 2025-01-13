import {
	View,
	Text,
	FlatList,
	NativeSyntheticEvent,
	NativeScrollEvent
} from 'react-native'
import React, { useRef } from 'react'
import { Movie } from '@/infrastructure/interfaces/movieDB.interface'
import MoviesPoster from './MoviesPoster'

interface Props {
	movies: Movie[]
	className?: string
}

const MovieHorizontalList = ({ movies, className }: Props) => {
	const isLoading = useRef(false)

	const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
		if (isLoading.current) return

		const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent

		const isEndReached =
			contentOffset.x + layoutMeasurement.width + 600 >= contentSize.width

		if (!isEndReached) return

		isLoading.current = true

		// Cargar siguientes películas
		console.log('Cargando siguientes películas')
	}

	return (
		<View className={`${className}`}>
			<FlatList
				horizontal
				showsHorizontalScrollIndicator={false}
				data={movies}
				keyExtractor={(item) => item.id.toString()}
				renderItem={({ item }) => (
					<MoviesPoster id={item.id} poster={item.poster} smallPoster />
				)}
				onScroll={onScroll}
			/>
		</View>
	)
}

export default MovieHorizontalList
