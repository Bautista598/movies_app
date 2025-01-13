import { View, Image, Text, useWindowDimensions, Pressable } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'

interface Props {
	originalTitle: string
	title: string
	poster: string
}

const MoviesHeader = ({ originalTitle, title, poster }: Props) => {
	const { height: screenHeight } = useWindowDimensions()

	return (
		<>
			<View className="absolute top-35 left-[35] z-[99] elevation-lg">
				<Pressable onPress={() => router.dismiss()}>
					<Ionicons
						name="arrow-back"
						size={30}
						color="white"
						className="shadow"
					/>
				</Pressable>
			</View>

			<View
				style={{ height: screenHeight * 0.7 }}
				className="shadow-xl shadow-black/20"
			>
				<View className="flex-1 rounded-b-[25px] overflow-hidden">
					<Image
						source={{ uri: `${poster}` }}
						className="flex-1"
						alt={`${originalTitle}`}
						resizeMode="cover"
					/>
				</View>
			</View>

			<View className="px-5 mt-5">
				<Text className="font-normal">{originalTitle}</Text>
				<Text className="font-semibold text-2xl">{title}</Text>
			</View>
		</>
	)
}

export default MoviesHeader
