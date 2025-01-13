import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { Movie } from '@/infrastructure/interfaces/movieDB.interface'
import MoviesPoster from './MoviesPoster'

interface Props {
	movies: Movie[]
	className?: string
}

const MovieHorizontalList = ({ movies, className }: Props) => {
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
			/>
		</View>
	)
}

export default MovieHorizontalList
