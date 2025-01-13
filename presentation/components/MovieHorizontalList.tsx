import {
	View,
	Text,
	FlatList,
	NativeSyntheticEvent,
	NativeScrollEvent
} from 'react-native'
import React, { useEffect, useRef } from 'react'
import { Movie } from '@/infrastructure/interfaces/movieDB.interface'
import MoviesPoster from './MoviesPoster'

interface Props {
	movies: Movie[]
	className?: string

	loadNextPage?: () => void
}

const MovieHorizontalList = ({ movies, className, loadNextPage }: Props) => {
	const isLoading = useRef(false)

	useEffect(() => {
		setTimeout(() => {
			isLoading.current = false
		}, 200)
	}, [movies])

	const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
		if (isLoading.current) return

		const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent

		const isEndReached =
			contentOffset.x + layoutMeasurement.width + 600 >= contentSize.width

		if (!isEndReached) return

		isLoading.current = true

		// Cargar siguientes películas
		console.log('Cargando siguientes películas')
		loadNextPage && loadNextPage()
	}

	return (
		<View className={`${className}`}>
			<FlatList
				horizontal
				showsHorizontalScrollIndicator={false}
				data={movies}
				keyExtractor={(item, i) => `${item.id} - ${i}`}
				renderItem={({ item }) => (
					<MoviesPoster id={item.id} poster={item.poster} smallPoster />
				)}
				onScroll={onScroll}
			/>
		</View>
	)
}

export default MovieHorizontalList
