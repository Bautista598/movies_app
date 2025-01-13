import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import { Movie } from '@/infrastructure/interfaces/movieDB.interface'

interface Props {
	id: number
	poster: string
	smallPoster?: boolean
	className?: string
}

const MoviesPoster = ({
	id,
	poster,
	smallPoster = false,
	className
}: Props) => {
	return (
		<Pressable className={`active:opacity-90 px-2 ${className}`}>
			<Image
				source={{ uri: poster }}
				style={{
					width: smallPoster ? 80 : 160,
					height: smallPoster ? 130 : 250
				}}
				className="rounded-xl"
				resizeMode="cover"
			/>
		</Pressable>
	)
}

export default MoviesPoster
